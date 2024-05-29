<template>
  <div>
    <div>
      <!-- <h1>Event</h1> -->
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
          <q-card
            class="my-card"
            flat
            bordered
            style="width: 20rem; height: 30rem"
          >
            <q-img :src="item.image" style="height: 15rem" />

            <q-card-section>
              <div class="flex q-gutter-sm">
                <q-badge color="blue">{{ item.buttonText1 }}</q-badge>
                <q-badge color="blue">{{ item.buttonText2 }}</q-badge>
              </div>
              <div class="text-h6 q-mt-sm q-mb-xs">{{ item.titleBig }}</div>
              <div class="text-caption text-grey">
                {{ item.titleMedium }}
              </div>
            </q-card-section>

            <q-card-actions>
              <div class="text-subtitle1 text-weight-medium">
                {{ item.price }}
              </div>

              <q-space />

              <q-btn flat color="primary" label="Bayar" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>

  <q-btn class="text-capitalize" @click="openDialog('event')"
    >Add New Event</q-btn
  >
  <q-btn class="text-capitalize" @click="openDialog('tiketPaket')"
    >Add New Tiket / Paket</q-btn
  >

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
            <q-input
              filled
              v-model="event.name"
              label="Iteration"
              color="black"
              bg-color="gray"
            />
            <div class="flex items-center">
              <div>Free</div>
              <q-toggle v-model="statusEvent" color="green" />
            </div>
          </div>
          <q-input
            filled
            v-model="event.name"
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
            <q-btn no-caps label="Create" @click="sendCreate('event')" />
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
    <q-card style="width: 610px; max-width: 70vw">
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
          <q-btn no-caps label="Create" @click="sendCreate('tiket')" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

  <!-- <q-dialog v-model="addNewTiketPaket">
      <q-input
        filled
        v-model="tikets.name"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-input
        filled
        v-model="tikets.desc"
        label="Text"
        type="textarea"
        color="black"
        bg-color="gray"
      />
      <q-input
        filled
        v-model="tikets.price"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-input
        filled
        v-model="tikets.priceUmum"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-input
        filled
        v-model="tikets.priceMancanegara"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-file
        filled
        type="file"
        v-model="tikets.image"
        label="Tambahkan Image"
        color="black"
        class="q-mt-md"
      />
    </q-dialog> -->

  <!-- <q-dialog v-model="addNewEvent">
      <q-input
        filled
        v-model="event.name"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-input
        filled
        v-model="event.desc"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-input
        filled
        v-model="event.price"
        label="Text"
        color="black"
        bg-color="gray"
      />
      <q-file
        filled
        type="file"
        v-model="event.image"
        label="Tambahkan Image"
        color="black"
        class="q-mt-md"
      />
    </q-dialog> -->
</template>

<script>
import socket from "src/socket";
import { ref } from "vue";
export default {
  setup() {
    return {
      unit: ref(),
      unitOptions: ["Perorangan", "Kelompok"],
      statusEvent: ref(false),
      currentId: null,
      events: ref(),
      tiketPakets: ref(),
      iterations: ref([]),
      units: ref([
        { data: "orang", label: "Perorangan" },
        { data: "kelompok", label: "Perkelompok" },
      ]),
      subTypes: ref([]),
      event: ref({
        name: "",
        desc: "",
        price: "",
        image: ref(null),
        iterationId: 0,
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
          buttonText1: event.iteration.name,
          buttonText2: event.isFree ? "Gratis" : "Bayar",
          titleMedium: event.desc,
          titleBig: event.name,
        }));
        this.tiketPakets = tiketPaketReponse.data.data.map((tiket) => ({
          id: tiket.id,
          image: tiket.image,
          name: tiket.name,
          desc: tiket.desc,
          subType: tiket.orderSubType.name,
          price: tiket.price,
        }));
        this.iterations = helper.data.data.iterations;
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
      type != "event"
        ? (this.addNewTiketPaket = true)
        : (this.addNewEvent = true);
      if (itemData) {
        const dataToChanged = type != "event" ? "event" : "tikets";
        this[dataToChanged] = { ...itemData };
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
