<template>
  <div>
    <navbar :isAdmin="true" />
    <div>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        selection="multiple"
        v-model:selected="selected"
        class="q-mt-md"
      >
        <template v-slot:body-cell-Action>
          <div class="flex items-center justify-center">
            <q-btn
              icon="edit"
              flat
              color="green"
              no-caps
              @click="handleDialog(props.row)"
              style="background-color: rgba(0, 255, 0, 0.102)"
            ></q-btn>
          </div>
        </template>
      </q-table>
    </div>

    <!-- <q-table
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-bottom
      selection="multiple"
      v-model:selected="selected"
      class="q-mt-md"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td :props="props"> </q-td>
          <q-td key="Email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td class="q-gutter-x-sm flex items-center justify-center">
            <q-btn
              icon="edit"
              flat
              color="green"
              no-caps
              @click="handleDialog(props.row)"
              style="background-color: rgba(0, 255, 0, 0.102)"
            ></q-btn>
            <q-btn icon="delete" flat color="red" no-caps style="background-color: rgba(255, 0, 0, 0.102)" />
          </q-td>
        </q-tr>
      </template>
    </q-table> -->
  </div>
</template>

<script>
import { ref } from "vue";
import env from "stores/environment";
import cookieHandler from "src/cookieHandler";
import navbar from "../components/NavbarNew.vue";

export default {
  components: { navbar },
  data() {
    return {
      columns: [
        { name: "Email", align: "center", label: "Email", field: "email" },
        { name: "Action", align: "center", label: "Action", field: "" },
      ],

      rows: [
        {
          email: "razan.kaka@gmail.com",
        },
        {
          email: "razan.kaka@gmail.com",
        },
        {
          email: "razan.kaka@gmail.com",
        },
        {
          email: "razan.kaka@gmail.com",
        },
        {
          email: "razan.kaka@gmail.com",
        },
      ],
      selected: ref(),
      openDialog: ref(false),
      selectedItem: ref(),
      selectedUsers: ref([]),
      subscriberDatas: ref([]),
      eventDatas: ref([]),
      tiketDatas: ref([]),
      promoteLinkInput: ref(),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
    };
  },
  watch: {
    // selectedUsers: {
    //   handler(val) {
    //     this.openDialog = val.length > 0 ? true : false;
    //   },
    // },
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    // async fetchData() {
    //   try {
    //     const subscriptionResponse = await this.$api.get("subscribe");
    //     if (subscriptionResponse.status != 200)
    //       throw Error(response.data.message);
    //     this.subscriberDatas = subscriptionResponse.data.data;
    //     if (this.eventDatas.length < 1) {
    //       const eventResponse = await this.$api.get("event/page");
    //       this.eventDatas = eventResponse.data.data;
    //     }
    //     if (this.tiketDatas.length < 1) {
    //       const tiketResponse = await this.$api.get("items");
    //       this.tiketDatas = tiketResponse.data.data;
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // async sendPromoteEmail() {
    //   try {
    //     const response = await this.$api.post(
    //       "email/subscription/promote",
    //       {
    //         identifier: this.selectedItem.type,
    //         id: this.selectedItem.id,
    //         sendTo: this.selectedUsers,
    //         promoteLink: this.promoteLinkInput,
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${this.token}`,
    //         },
    //       }
    //     );
    //     if (response.status != 200) throw Error(response.data.message);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // async deleteSubscriber(id) {
    //   try {
    //     const response = await this.$api.delete(`subscribe/${id}`);
    //     if (response.status != 200) throw Error(response.data.message);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
};
</script>
