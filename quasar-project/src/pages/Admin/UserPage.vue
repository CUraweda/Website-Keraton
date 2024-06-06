<template>
    <div></div>
</template>

<script>
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import { ref } from "vue";

export default {
    data() {
        return {
            token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
            userDialog: ref(false),
            currentId: ref(),
            userDatas: ref([]),
            userData: ref({
                name: '',
                email: '',
                password: '',
                role: '',
            }),
            userRoleOptions: [
                { label: "Super Admin", value: "SUPER_ADMIN" },
                { label: "Admin", value: "ADMIN" },
                { label: "Customer ", value: "CUSTOMER" },
                { label: "Cashier", value: "CASHIER" },
            ]
        }
    },
    mounted(){
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const response = await this.$api.get('user', {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })
                if(response.status != 200) throw Error(response.data.message)
                this.userDatas = response.data.data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }))
            } catch (err) {
                console.log(err)
            }
        },
        async updateCreate(){
            try{
                const url = this.currentId ? `user/${this.currentId}` : 'user'
                const response = await this.$api.post(url, this.userData, {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })
                if(response.status != 200) throw Error(response.data.message)
            }catch(err){
                console.log(err)
            }
        },
        async deleteData(id){
            try{
                const response = await this.$api.delete(`user/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${this.token}`
                    }
                })
                if(response.status != 200) throw Error(response.data.message)
            }catch(err){
                console.log(err)
            }
        },
        handleDialog(data){
            this.userDialog = !this.userDialog
            if(this.userDialog && data) {
                this.currentId = data.id
                this.userData = data
            }
        }
    }
}
</script>