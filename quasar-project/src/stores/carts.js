import { event } from 'quasar'
import env from './environment'
import cookieHandler from 'src/cookieHandler'
// import { decrypt, encrypt } from './encryption'

export default class Carts {
    // static cartName = env.CART_STORAGE_NAME;

    constructor() {
        try {
            const cartData = localStorage.getItem(env.CART_STORAGE_NAME)
            this.userCart = cartData ? JSON.parse(cartData) : {}
        } catch (err) {
            console.log(err)
        }
    }

    getItem() {
        return this.userCart
    }

    updateItem() {
        localStorage.setItem(env.CART_STORAGE_NAME, JSON.stringify(this.userCart))
        return this
    }

    async updateToDB() {
        const token = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
        console.log(this.userCart)
        if (!token) throw Error('Token didnt exist, please Log In')
        const response = await fetch(env.BASE_URL + "/keraton/cart/update", {
            method: "POST",
            body: {
                cart: this.userCart
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const responseData = await response.json()
        if (response.status != 200) throw Error(responseData.message)
        return this
    }

    setNew(listOfData = [{ id, name, image, price, minimumUnit , quantity, event }]) {
        if (listOfData.length < 1) return this
        for(let data of listOfData) this.userCart[`${data.type}|${data.id}`] = { ...data }
        return this.updateItem()
    }

    addManyItem(listOfData = [{ id, name, image, price, minimumUnit, quantity, event }]) {
        for (let data of listOfData) {
            const alreadyExist = this.userCart[`${data.type}|${data.id}`]
            if (alreadyExist) data.quantity = alreadyExist['quantity'] + data.quantity
            this.userCart[`${data.type}|${data.id}`] = { ...data }
        }
        return this
    }

    changeQuantity(itemId, qty) {
        const cartItem = this.userCart[itemId]
        if (!cartItem) throw Error('Item didnt exist')
        cartItem.quantity = qty
        if (cartItem.quantity > 1) {
            this.userCart[itemId] = cartItem
        } else this.removeItem([{ id: itemId }])
        return this
    }

    clearCart(){
        this.userCart = {}
        return this
    }

    removeItem(listOfData = [{ id }]) {
        if (Object.values(this.userCart).length < 1) throw Error('Cart already empty')
        for (let data of listOfData) {
            const propertyId = `${data.type}|${data.id}`
            if (this.userCart.hasOwnProperty(propertyId)) delete this.userCart[propertyId];
        }
        return this
    }
}