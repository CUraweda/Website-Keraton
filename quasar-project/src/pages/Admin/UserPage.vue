<template>
    <div></div>
</template>

<script>
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";

export default {
    data() {
        return {
            token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
            userDatas: ref([]),
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
                        'Authorization': `Bearer ${token}`
                    }
                })
                
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>