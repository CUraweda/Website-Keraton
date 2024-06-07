<template>
    <div></div>
</template>

<script>
import { ref } from 'vue';
import env from 'stores/environment'
import cookieHandler from "src/cookieHandler";

export default {
    data(){
        return{
            openDialog: ref(false),
            selectedItem: ref(),
            selectedUsers: ref([]),
            subscriberDatas: ref([]),
            eventDatas: ref([]),
            tiketDatas: ref([]),
            promoteLinkInput: ref(),
            token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
        }
    },
    watch: {
        selectedUsers: {
            handler(val){
                this.openDialog = val.length > 0 ? true : false
            }
        }
    },
    mounted(){
        this.fetchData()
    },
    methods: {
        async fetchData(){
            try{
                const subscriptionResponse = await this.$api.get('subscribe')
                if(subscriptionResponse.status != 200) throw Error(response.data.message)
                this.subscriberDatas = subscriptionResponse.data.data
                if(this.eventDatas.length < 1){
                    const eventResponse = await this.$api.get('event/page')
                    this.eventDatas = eventResponse.data.data
                }
                if(this.tiketDatas.length < 1){
                    const tiketResponse = await this.$api.get('items')
                    this.tiketDatas = tiketResponse.data.data
                }
            }catch(err){
                console.log(err)
            }
        },
        async sendPromoteEmail(){
            try{
                const response = await this.$api.post('email/subscription/promote', {
                    identifier: this.selectedItem.type,
                    id: this.selectedItem.id,
                    sendTo: this.selectedUsers,
                    promoteLink: this.promoteLinkInput
                }, { headers: {
                    'Authorization': `Bearer ${this.token}`
                } })
                if(response.status != 200) throw Error(response.data.message)
            }catch(err){
                console.log(err)
            }
        },
        async deleteSubscriber(id){
            try{
                const response = await this.$api.delete(`subscribe/${id}`)
                if(response.status != 200) throw Error(response.data.message)
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>