<template>
  <div class="q-gutter-xs q-mx-md">
    <q-btn class="text-capitalize" @click="openDialog('event')"
      >Add New Event</q-btn
    >
    <q-btn class="text-capitalize" @click="openDialog('tiketPaket')"
      >Add New Tiket / Paket</q-btn
    >
  </div>

  <q-dialog v-model="addNewEvent">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add New Event</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="flex q-gutter-md">
        <div>
          <div class="flex">
            <q-select
              filled
              v-model="event.iterationId"
              :options="iterations"
              class="col-grow"
              label="Iteration"
            />
            <div class="flex items-center">
              <div>Free</div>
              <q-toggle v-model="statusEvent" color="green" />
            </div>
          </div>
          <q-input
            filled
            v-model="event.title"
            label="Name"
            color="black"
            bg-color="gray"
            class="q-mt-md"
          />
          <q-input
            filled
            v-model="event.desc"
            label="Description"
            color="black"
            bg-color="gray"
            class="q-mt-md"
          />

          <div class="flex items-center q-mt-md q-gutter-md">
            <q-btn no-caps label="Create" @click="actionHandler('event')" />
            <q-input
              filled
              v-model="event.price"
              label="Rp."
              color="black"
              bg-color="gray"
            />
          </div>
        </div>
        <div style="display: flex; flex-direction: column">
          <q-file
            filled
            type="file"
            v-model="event.image"
            label="Tambahkan Image"
            color="black"
            class="ellipsis"
            style="width: 10rem"
            @update:model-value="handleUploadEvent()"
          />
          <q-img :src="imgURLEvent" v-if="imgURLEvent" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="addNewTiketPaket">
    <q-card style="width: 40rem; max-width: 70vw">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add New Tiket Paket</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="flex q-gutter-md">
        <div>
          <q-input
            filled
            v-model="tikets.name"
            label="Name"
            color="black"
            bg-color="gray"
          />
          <q-input
            filled
            v-model="tikets.desc"
            label="Description"
            type="textarea"
            color="black"
            class="q-mt-md"
            bg-color="gray"
          />
        </div>

        <div>
          <q-input
            filled
            v-model="tikets.price"
            label="Price"
            color="black"
            bg-color="gray"
          />
          <q-input
            filled
            v-model="tikets.priceUmum"
            label="Price Umum"
            color="black"
            class="q-mt-md"
            bg-color="gray"
          />
          <q-input
            filled
            v-model="tikets.priceMancanegara"
            label="Price Manca"
            color="black"
            class="q-mt-md"
            bg-color="gray"
          />
          <q-select
            filled
            v-model="unit"
            :options="unitOptions"
            label="Unit"
            class="q-mt-md"
          />
        </div>

        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <q-file
            filled
            type="file"
            v-model="tikets.image"
            label="Tambahkan Image"
            color="black"
            class="ellipsis"
            style="width: 10rem"
            @update:model-value="handleUploadTiket()"
          />
          <q-img :src="imgURLTiket" v-if="imgURLTiket" />
          <q-btn no-caps label="Create" @click="actionHandler('tiket')" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

  <div class="q-gutter-md q-mt-md">
    <div class="text-h5 q-mx-lg q-mt-md">Event</div>
    <div
      class="flex col-grow q-gutter-md"
      style="
        overflow-x: auto;
        flex-wrap: nowrap;
        -ms-overflow-style: none;
        scrollbar-width: none;
      "
    >
      <div v-for="(item, index) in events" :key="index">
        <q-card class="my-card" flat bordered style="width: 20rem">
          <q-img :src="item.image" style="height: 15rem" />

          <q-card-section>
            <div class="flex q-gutter-sm">
              <q-badge color="blue">{{ item.name }}</q-badge>
              <q-badge color="blue">{{ item.isFree }}</q-badge>
            </div>
            <div
              class="text-h6 q-mt-sm q-mb-xs"
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              "
            >
              {{ item.title }}
            </div>
            <div
              class="text-caption text-grey"
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              "
            >
              {{ item.desc }}
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="text-subtitle1 text-weight-medium">
              {{ item.price }}
            </div>

            <q-space />

            <q-btn flat @click="openDialog('event', item)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="green"
              >
                <path
                  d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
                />
              </svg>
            </q-btn>
            <q-btn flat @click="sendDelete('event', item.id)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="red"
              >
                <path
                  d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                /></svg
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="text-h5 q-mt-md q-mx-lg">Tiket & Paket</div>

    <div
      class="flex col-grow q-gutter-md"
      style="
        overflow-x: auto;
        flex-wrap: nowrap;
        -ms-overflow-style: none;
        scrollbar-width: none;
      "
    >
      <div v-for="(item, index) in tiketPakets" :key="index">
        <q-card class="my-card" flat bordered style="width: 20rem">
          <q-img :src="item.image" style="height: 15rem" />

          <q-card-section>
            <q-badge color="blue">{{ item.subType }}</q-badge>
            <div
              class="text-h6 q-mt-sm q-mb-xs"
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              "
            >
              {{ item.name }}
            </div>
            <div
              class="text-caption text-grey"
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              "
            >
              {{ item.desc }}
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="text-subtitle1 text-weight-medium">
              {{ item.price }}
            </div>

            <q-space />

            <q-btn flat @click="openDialog('tiket', item)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="green"
              >
                <path
                  d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
                />
              </svg>
            </q-btn>
            <q-btn flat @click="sendDelete('tiket', item.id)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="red"
              >
                <path
                  d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                /></svg
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";
export default {
  components: { navbar },
  setup() {
    return {
      unit: ref(),
      unitOptions: ["Perorangan", "Kelompok"],
      statusEvent: ref(false),
      currentId: null,
      events: ref(),
      tiketPakets: ref(),
      iterations: ref({}),
      units: ref([
        { data: "orang", label: "Perorangan" },
        { data: "kelompok", label: "Perkelompok" },
      ]),
      subTypes: ref([]),
      event: ref({
        name: "",
        desc: "",
        title: "",
        price: "",
        image: ref(null),
        iterationId: null,
        isFree: false,
      }),
      tikets: ref({
        name: "",
        desc: "",
        unit: "",
        price: 0,
        priceUmum: null,
        priceMancanegara: null,
        image: ref(null),
        subTypeId: 0,
      }),

      addNewEvent: ref(),
      addNewTiketPaket: ref(),
    };
  },
  mounted() {
    this.fetchData();
    socket.connect();
  },
  beforeUnmount() {
    socket.disconnect();
  },
  watch: {
    addNewEvent: {
      handler(val) {
        if (!val) this.resetDefault();
      },
    },
    addNewTiketPaket: {
      handler(val) {
        if (!val) this.resetDefault();
      },
    },
  },
  methods: {
    handleUploadEvent() {
      if (this.event.image) {
        this.imgURLEvent = URL.createObjectURL(this.event.image);
      }
    },
    handleUploadTiket() {
      if (this.tikets.image) {
        this.imgURLTiket = URL.createObjectURL(this.tikets.image);
      }
    },
    async fetchData() {
      try {
        const helper = await this.$api.get("items/helper");
        const eventResponse = await this.$api.get("event");
        const tiketPaketReponse = await this.$api.get("items");
        if (eventResponse.status != 200) throw Error("Error occured");
        if (tiketPaketReponse.status != 200) throw Error("Error occured");
        this.events = eventResponse.data.data.map((event) => ({
          id: event.id,
          image: event.image,
          price: event.price ? `Rp. ${this.formatRupiah(event.price)}` : "",
          name: event.iteration.name,
          isFree: event.isFree ? "Gratis" : "Bayar",
          desc: event.desc,
          title: event.name,
          iterationId: event.iteration.name,
        }));
        this.tiketPakets = tiketPaketReponse.data.data.map((tiket) => ({
          id: tiket.id,
          image: tiket.image,
          name: tiket.name,
          desc: tiket.desc,
          subType: tiket.orderSubType.name,
          price: tiket.price ? `Rp. ${this.formatRupiah(tiket.price)}` : "",
        }));
        this.iterations = helper.data.data.iteration.map((itr) => ({
          label: itr.name,
          value: itr.id,
        }));
        console.log(this.iterations);
        this.subTypes = helper.data.data.subTypes;
      } catch (err) {
        console.log(err);
      }
    },
    async sendUpdate(type) {
      let url, requestBody;
      try {
        switch (type) {
          case "event":
            url = `event/update/${this.currentId}`;
            requestBody = this.event;
            break;
          case "tiket":
            url = `item/update/${this.currentId}`;
            requestBody = this.tikets;
            break;
          default:
            break;
        }
        const response = await this.$api.post(url, requestBody, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status != 200) throw Error("Error Occured");
      } catch (err) {
        console.log(err);
      }
    },

    async sendDelete(type, id) {
      let url;
      try {
        switch (type) {
          case "event":
            url = `event/${id}`;
            break;
          case "tiket":
            url = `item/${id}`;
            break;
          default:
            break;
        }
        const response = await this.$api.delete(url);
        if (response.status == 200) {
          this.fetchData();
        }
      } catch (err) {
        console.error(err);
      }
    },

    async sendCreate(type) {
      let url, requestBody;
      try {
        switch (type) {
          case "event":
            url = `event/create`;
            requestBody = this.event;
            break;
          case "tiket":
            url = `item/create`;
            requestBody = this.tikets;
            break;
          default:
            break;
        }
        const response = await this.$api.post(url, requestBody, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status != 200) throw Error("Error Occured");
      } catch (err) {
        console.log(err);
      }
    },
    actionHandler(type) {
      try {
        if (!type) throw Error("No Type is specified");
        this.currentId ? this.sendUpdate(type) : this.sendCreate(type);
      } catch (err) {
        console.log(err);
      }
    },
    openDialog(type, itemData) {
      if (type === "event") {
        this.addNewEvent = true;
        if (itemData) {
          this.event = { ...itemData };
          if (itemData.image) {
            this.imgURLEvent = itemData.image;
          }
        }
      } else {
        this.addNewTiketPaket = true;
        if (itemData) {
          this.tikets = { ...itemData };
          if (itemData.image) {
            this.imgURLTiket = itemData.image;
          }
        }
      }
    },
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
    countPrice(normalPrice, secondPrice, thirdPrice) {
      let returnedPrice = `Rp. ${this.formatRupiah(normalPrice)}`;
      const prices = [normalPrice, secondPrice, thirdPrice]
        .filter((price) => price !== null)
        .sort((a, b) => a - b);
      if (prices.length > 1) {
        returnedPrice = `Rp. ${this.formatRupiah(
          prices[0]
        )} - ${this.formatRupiah(prices[prices.length - 1])}`;
      }
      return returnedPrice;
    },
    resetDefault() {
      const listToClear = [];
      for (let clear of listToClear) {
        this[clear] = "";
      }
      this.event = {
        name: "",
        desc: "",
        price: "",
        image: "",
        iterationId: 0,
        isFree: false,
      };
      this.tikets = {
        name: "",
        desc: "",
        unit: "",
        price: 0,
        priceUmum: null,
        priceMancanegara: null,
        image: "",
        subTypeId: 0,
      };
    },
  },
};
</script>
