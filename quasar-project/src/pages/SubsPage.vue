<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="flex q-gutter-md">
      <q-table
        :rows="subscriberDatas"
        :columns="columns"
        row-key="email"
        selection="multiple"
        v-model:selected="selectedUsers"
        class="q-mt-md col-grow"
        style="height: 50rem"
      >
        <template v-slot:body-cell-Action="props">
          <div class="flex items-center justify-center">
            <q-btn
              icon="delete"
              flat
              color="red"
              no-caps
              @click="confirmDelete(props.row.id)"
              style="background-color: rgba(255, 0, 0, 0.102)"
            ></q-btn>
          </div>
        </template>
      </q-table>

      <div class="col-grow">
        <q-card>
          <q-card-section>
            <div class="flex justify-between">
              <q-img
                :src="selectedItem.image || ''"
                style="width: 12rem; height: 8rem"
              />
              <div>
                <div
                  class="text-h6 text-bold"
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 20rem;
                  "
                >
                  {{ selectedItem.name || "--------" }}
                </div>
                <div
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 20rem;
                  "
                >
                  {{ selectedItem.desc || "-------------" }}
                </div>
              </div>

              <div>
                <q-select
                  dense
                  outlined
                  label="Link To Direct"
                  :options="linkList"
                  v-model="selectedItem.link"
                  style="width: 15rem"
                />
                <q-btn
                  no-caps
                  class="q-mt-md full-width"
                  label="Send Email"
                  @click="sendPromoteEmail"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mt-xs">
          <q-card-section class="flex items-center q-gutter-xs">
            <q-input
              outlined
              v-model="searchEvent"
              type="search"
              label="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <q-input
              v-model="showManyData"
              outlined
              type="number"
              label="Show"
            />
          </q-card-section>

          <q-card-section v-if="itemDatas.length > 0">
            <div
              v-for="index in showManyData"
              :key="index"
              class="flex justify-between q-mt-md"
            >
              <q-img
                :src="itemDatas[index]?.image"
                style="width: 12rem; height: 8rem"
              />

              <div v-if="itemDatas[index]">
                <div
                  class="text-h6 text-bold"
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 20rem;
                  "
                >
                  {{ itemDatas[index]?.name }}
                </div>
                <div
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 20rem;
                  "
                >
                  {{ itemDatas[index]?.desc }}
                </div>
              </div>
              <div v-if="itemDatas[index]">
                <q-btn
                  no-caps
                  label="Promote"
                  @click="setPromotedItem(itemDatas[index])"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import env from "stores/environment";
import cookieHandler from "src/cookieHandler";
import navbar from "../components/NavbarNew.vue";
import routeList from "src/router/routes";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export default {
  components: { navbar },
  data() {
    return {
      columns: [
        { name: "id", label: "Id", field: "id" },
        { name: "Email", align: "center", label: "Email", field: "email" },
        { name: "Action", align: "center", label: "Action", field: "" },
      ],
      searchEvent: ref(),
      selected: ref(),
      openDialog: ref(false),
      selectedItem: ref({
        image: undefined,
        ident: undefined,
        name: "",
        desc: "",
        link: undefined,
      }),
      selectedUsers: ref([]),
      subscriberDatas: ref([]),
      itemDatas: ref([]),
      showManyData: ref(5),
      promoteLinkInput: ref(),
      linkList: ref([]),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
    };
  },
  watch: {
    selectedUsers: {
      handler(val) {
        this.openDialog = val.length > 0 ? true : false;
      },
    },
    showManyData: {
      handler(val) {
        this.showManyData = +this.showManyData;
      },
    },
    searchEvent: {
      handler(val) {
        console.log(val);
        this.fetchData();
      },
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    confirmDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteSubscriber(id);
        }
      });
    },
    showNotif(msg, status) {
      const myNotify = new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
        autoclose: false,
      });
      setTimeout(() => {
        myNotify.close();
      }, 3000);
    },
    async fetchData() {
      try {
        const subscriptionResponse = await this.$api.get("subscribe");
        if (subscriptionResponse.status != 200)
          throw Error(response.data.message);
        this.subscriberDatas = subscriptionResponse.data.data.map((subs) => ({
          id: subs.id,
          email: subs.email,
        }));

        if (this.searchEvent || this.itemDatas.length < 1) {
          let eventUrl = "event",
            tiketUrl = "items",
            itemData = [];
          if (this.searchEvent) {
            eventUrl += `?search=${this.searchEvent}`;
            tiketUrl += `?search=${this.searchEvent}`;
          }
          const eventResponse = await this.$api.get(eventUrl);
          const tiketResponse = await this.$api.get(tiketUrl);
          for (let data of eventResponse.data.data) {
            itemData.push({
              ident: "event",
              id: data.id,
              image: data.image,
              name: data.name,
              desc: data.desc,
            });
          }
          for (let data of tiketResponse.data.data) {
            itemData.push({
              ident: "tiket",
              id: data.id,
              image: data.image,
              name: data.name,
              desc: data.desc,
            });
          }
          this.itemDatas = itemData;
        }
        if (this.linkList.length < 1) {
          this.linkList = routeList.map((link) => ({
            label: `${link.name} - ${link.path}`,
            path: link.path,
          }));
        }
        if (this.itemDatas.length > 0)
          this.selectedItem = { ...this.itemDatas[0] };
      } catch (err) {
        console.log(err);
      }
    },
    async sendPromoteEmail() {
      try {
        if (this.selectedUsers.length < 1)
          throw Error("Pilih User Terlebih Dahulu");
        const response = await this.$api.post(
          "email/subscription/promote",
          {
            identifier: this.selectedItem.ident,
            id: this.selectedItem.id,
            sendTo: this.selectedUsers.map((user) => {
              return user.email;
            }),
            promoteLink: `${env.FRONTEND_URL}${this.selectedItem.link.path}`,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status != 200) throw Error(response.data.message);
        this.showNotif(response.data.message, "success");
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    async deleteSubscriber(id) {
      try {
        const response = await this.$api.delete(`subscribe/${id}`);
        if (response.status != 200) throw Error(response.data.message);
        this.showNotif(response.data.message, "success");
        this.fetchData();
      } catch (err) {
        this.showNotif(
          err.response ? err.response.data.message : err.message,
          "error"
        );
        console.log(err);
      }
    },
    setPromotedItem(data) {
      try {
        this.selectedItem = { ...data };
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
