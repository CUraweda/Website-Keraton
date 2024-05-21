import env from './environment'
// import { decrypt, encrypt } from './encryption'

export default class Carts {
    // static cartName = env.CART_STORAGE_NAME;

    constructor() {
        const cartData = localStorage.getItem(env.CART_STORAGE_NAME)
        this.userCart = cartData ? JSON.parse(cartData) : {}
    }

    getItem() {
        return this.userCart
    }

    updateItem() {
        localStorage.setItem(env.CART_STORAGE_NAME, JSON.stringify(this.userCart))
        return this
    }

    addManyItem(listOfData = [{ id, name, image, price, quantity }]) {
        for (let data of listOfData) {
            const alreadyExist = this.userCart[data.id]
            if (alreadyExist) data.quantity = alreadyExist['quantity'] + data.quantity
            this.userCart[data.id] = { ...data }
        }
        return this
    }

    changeQuantity(ascDesc, itemId, qty) {
        const cartItem = this.userCart[itemId]
        if (!cartItem) throw Error('Item didnt exist')
        cartItem.quantity = ascDesc != "asc" ? cartItem.quantity - qty : cartItem.quantity + qty
        if (cartItem.quantity > 1) this.userCart[this.userCart] = cartItem
        else this.removeItem([{ id: itemId }])
        return this
    }

    removeItem(listOfData = [{ id }]) {
        if (Object.values(this.userCart).length < 1) throw Error('Cart already empty')
        for (let data of listOfData) delete this.userCart[data.id]
        return this
    }
}