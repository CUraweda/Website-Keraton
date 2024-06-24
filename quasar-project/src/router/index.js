import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import env from 'stores/environment'
import cookieHandler from 'src/cookieHandler'
import Carts from "src/stores/carts";
import { verifyToken } from "src/auth/auth";
import { encrypt } from "src/stores/encryption";


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

function alreadyHasToken() {
  return cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
}

async function setDefaultAndCheck() {
  let dataToStore = {}
  try {
    const storageAlreadyExist = sessionStorage.getItem(env.GLOBAL_STORAGE)
    const token = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
    if(!token) cookieHandler.removeCookie(env.TOKEN_STORAGE_NAME)
    if (storageAlreadyExist) return
    const cartClass = new Carts();
    const checkToken = await verifyToken();
    if (checkToken.isLogin) {
      //Globalcn
      dataToStore["isLogin"] = checkToken.isLogin
      dataToStore["isAdmin"] = checkToken.isAdmin
      //Cart
      const cart = cartClass.getItem();
      if (cart && Object.keys(cart).length > 0) {
        const validateCartResponse = await fetch(env.BASE_URL + "/keraton/cart/validate", {
          method: "POST", headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ carts: cart })
        });
        const validateCartResponseData = await validateCartResponse.json()
        if (validateCartResponse.status != 200) {
          cartClass.clearCart();
        }
        cartClass.setNew(Object.values(validateCartResponseData.data));
      }
    }
    const availableWisata = await fetch(env.BASE_URL + "/keraton/wisata");
    const wisataData = await availableWisata.json()
    if (availableWisata.status != 200) throw Error(wisataData.message);
    dataToStore["wisataOption"] = wisataData.data.wisataData.map(
      (wisata) => ({
        label: wisata.label,
        value: wisata.to,
      })
    );
    sessionStorage.setItem(env.GLOBAL_STORAGE, encrypt(JSON.stringify(dataToStore)))
  } catch (err) {
    console.log(err);
  }
}

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from, next) => {
    await setDefaultAndCheck()
    if (to.meta.preventToken) {
      const token = alreadyHasToken()
      if (!token) next(from.path)
        if(to.meta.onlyAdmin){
          const { isAdmin } = await verifyToken()
          if(!isAdmin) next(from.path)
        }
    }
    next()
  })

  return Router
})
