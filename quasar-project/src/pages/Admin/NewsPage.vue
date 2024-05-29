<template>
    <div v-for="(data, i) in newsDatas">
        <h1>{{ data. }}</h1>
    </div>
    <div>
        <q-input v-model="newsData.name"></q-input>
        <q-input v-model="newsData.desc"></q-input>
        <q-input v-model="newsData.image"></q-input>
        <q-input v-model="newsData.price"></q-input>

        <q-btn @click="handleDialog"></q-btn>
        <q-dialog v-model="newsDialog">
            
        </q-dialog>
    </div>
    <Notification v-if="notification.message" :message="notification.message" :type="notification.type" />
</template>

<script>
import { ref } from 'vue'
import cookieHandler from "src/cookieHandler";
import env from 'src/environment'
import Notification from "components/NotificationAlert.vue"

export default {
    components: {
        Notification
    },
    data() {
        return {
            token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
            newsDatas: ref(),
            newsData: ref({
                price: null,
                name: null,
                desc: null,
                image: null
            }),
            iterationsDatas: ref(),
            newsDialog: ref(false),
            currentId: undefined
        }
    },
    watch: {
        newsDialog: {
            handler(val) {
                if (!val) this.resetDefault()
            }
        }
    },
    mounted(){
        this.fethcData()
},
    methods: {
        async fethcData() {
            try {
                const responseNews = await this.$api.get('news')
                if (responseNews.status != 200) throw Error(responseNews.data.message)
                this.newsDatas = responseNews.data.data
            } catch (err) {
                console.log(err)
            }
        },
        async createUpdateData() {
            try {
                let url = "news"
                if (this.currentId) url += `/${this.currentId}`

                const response = await this.$api.post(url, { ...this.newsData })
                if (response.status != 200) throw Error(response.data.message)
                this.newsDialog = false
                this.showNotif(response.data.message, success)
            } catch (err) {
                console.log(err)
            }
        },
        async deleteData() {
            try {
                const response = await this.$api.delete(`news/${this.currentId}`)
                if (response.status != 200) throw Error(response.data.message)
                this.showNotif(response.data.message, success)
            } catch (err) {
                console.log(err)
            }
        },
        showNotif(mes, type) {
            this.notification.message = mes;
            this.notification.type = type;
            setTimeout(() => {
                this.notification.message = "";
                this.notification.type = "";
            }, 4000);
        },
        handleDialog() {
            this.newsDialog = !this.newsDialog
            if (!this.newsDialog) this.currentId = undefined
        },
        resetDefault() {
            this.newsData = {
                iterationId: null,
                price: null,
                name: null,
                desc: null,
                image: null
            };
        }
    }
}
</script>