import environment from "./environment"
import { encrypt, decrypt } from "./encryption"

export default class GlobalStorageData {
    constructor(){
        let storageData = localStorage.getItem(environment.GLOBAL_STORAGE)
        if(storageData) storageData = JSON.parse(encrypt(storageData)) 
        if(!storageData) storageData = {}
        this.storageValue = storageData
    }
    setItem(name, value){
        this.storageValue[name] =  value
        return this
    }
    getItem(name){
        return this.storageValue[name]
    }
    update(){
        const data = JSON.stringify(decrypt(this.storageValue))
        localStorage.setItem(environment.GLOBAL_STORAGE, data)
    }
}