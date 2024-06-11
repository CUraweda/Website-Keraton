<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="flex q-gutter-md">
      <q-table
        :rows="subscriberDatas"
        :columns="columns"
        row-key="email"
        selection="multiple"
        v-model:selected="selected"
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
              @click="deleteSubscriber(props.row.id)"
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
                <q-btn no-caps class="q-mt-md full-width" label="Send Email" />
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

            <q-input v-model="limitOrder" outlined type="number" label="Show" />
          </q-card-section>

          <q-card-section>
            <div
              v-for="(item, i) in itemDatas"
              :key="i"
              class="flex justify-between q-mt-md"
            >
              <q-img :src="item.image" style="width: 12rem; height: 8rem" />

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
                  {{ item.name }}
                </div>
                <div
                  style="
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 20rem;
                  "
                >
                  {{ item.desc }}
                </div>
              </div>
              <div>
                <q-btn no-caps label="Promote" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "stores/environment";
import cookieHandler from "src/cookieHandler";
import navbar from "../components/NavbarNew.vue";
import routeList from "src/router/routes";

export default {
  components: { navbar },
  data() {
    return {
      columns: [
        { name: "id", label:"Id", field: "id" },
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
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const subscriptionResponse = await this.$api.get("subscribe");
        if (subscriptionResponse.status != 200)
          throw Error(response.data.message);
        this.subscriberDatas = subscriptionResponse.data.data.map((subs) => ({
          id: subs.id,
          email: subs.email,
        }));

        if (this.itemDatas.length < 1) {
          const eventResponse = await this.$api.get("event");
          const tiketResponse = await this.$api.get("items");
          let currentLength = 0;
          for (let data of eventResponse.data.data) {
            if (currentLength === this.showManyData) break;
            currentLength++;
            this.itemDatas.push({
              ident: "event",
              id: data.id,
              image: data.image,
              name: data.name,
              desc: data.desc,
            });
            for (let data of tiketResponse.data.data) {
              if (currentLength === this.showManyData) break;
              currentLength++;
              this.itemDatas.push({
                ident: "tiket",
                id: data.id,
                image: data.image,
                name: data.name,
                desc: data.desc,
              });
            }
          }
        }
        if (this.linkList.length < 1) {
          this.linkList = routeList.map((link) => ({
            label: `${link.name} - ${link.path}`,
            path: link.path,
          }));
        }
        console.log(this.linkList);
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
      } catch (err) {
        console.log(err);
      }
    },
    async deleteSubscriber(id) {
      try {
        const response = await this.$api.delete(`subscribe/${id}`);
        if (response.status != 200) throw Error(response.data.message);
      } catch (err) {
        console.log(err);
      }
    },
  },
  setPromotedItem(data) {
    try {
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
