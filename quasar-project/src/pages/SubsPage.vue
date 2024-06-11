<template>
  <div>
    <navbar :isAdmin="true" />
    <div class="flex q-gutter-md full-width">
      <q-table
        :rows="subscriberDatas"
        :columns="columns"
        row-key="email"
        selection="multiple"
        v-model:selected="selected"
        class="q-mt-md col-grow"
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
                src="../assets/images/bedug.png"
                style="width: 12rem; height: 8rem"
              />
              <div>
                <div class="text-h6 text-bold">Tiket Masuk</div>
                <div>Kamu bisa masuk disini</div>
              </div>

              <div>
                <q-select
                  dense
                  outlined
                  label="Select"
                  :option="selectOption"
                  v-model="select"
                  style="width: 10rem"
                />

                <q-btn no-caps class="q-mt-md full-width" label="Button" />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mt-xs">
          <q-card-section>
            <q-input
              outlined
              v-model="searchEvent"
              type="search"
              label="Search"
              style="width: 15rem"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <div class="text-h6 text-bold">Event</div>
            <div
              v-for="(item, index) in eventDatas"
              :key="index"
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

            <div class="text-h6 text-bold q-mt-md">Tiket / Paket</div>
            <div
              v-for="(item, index) in tiketDatas"
              :key="index"
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

export default {
  components: { navbar },
  data() {
    return {
      columns: [
        { name: "id", field: "id" },
        { name: "Email", align: "center", label: "Email", field: "email" },
        { name: "Action", align: "center", label: "Action", field: "" },
      ],
      searchEvent: ref(),
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

        if (this.eventDatas.length < 1) {
          const eventResponse = await this.$api.get("event");
          this.eventDatas = eventResponse.data.data;
        }
        if (this.tiketDatas.length < 1) {
          const tiketResponse = await this.$api.get("items");
          this.tiketDatas = tiketResponse.data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async sendPromoteEmail() {
      try {
        const response = await this.$api.post(
          "email/subscription/promote",
          {
            identifier: this.selectedItem.type,
            id: this.selectedItem.id,
            sendTo: this.selectedUsers,
            promoteLink: this.promoteLinkInput,
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
};
</script>
