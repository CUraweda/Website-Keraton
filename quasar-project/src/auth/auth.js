import cookieHandler from 'src/cookieHandler';
import env from '../stores/environment'
import axios from 'src/boot/axios';

export async function verifyToken() {
  let data = { isLogin: false, isAdmin: false }
  const token = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
  if (!token) return data
  try {
    const response = await fetch(env.BASE_URL + "/keraton/auth/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = await response.json()
    if (response.status != 200) throw Error(responseData.message)
    data.isLogin = true
    if (responseData.data.role === "ADMIN" || responseData.data.role === "SUPER_ADMIN") data.isAdmin = true
    return data
  } catch (err) {
    console.log(err)
    cookieHandler.removeCookie(env.TOKEN_STORAGE_NAME)
    localStorage.removeItem(env.CART_STORAGE_NAME)
    localStorage.removeItem(env.USER_STORAGE_NAME)
    sessionStorage.removeItem(env.GLOBAL_STORAGE)
    return data
  }
}