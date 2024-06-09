<template>
  <div>
    <nav>
      <navbar border :isCheckoutPage="true" />
    </nav>
    <div class="header">
      <div class="text1">
        <ul>
          <RouterLink :to="'/booking'">Booking / Paket Keraton</RouterLink>
        </ul>
        <div class="kakaje">
          <ul>
            <a class="text2">
              <strong><a class="text2">Tiket Event Keraton</a></strong>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <a class="judul1">Tiket Masuk Keraton & Bundling</a>
  <div class="container">
    <div class="ni" v-for="(item, index) in tiketItems" :key="index">
      <img class="image" :src="item.image ? getImageURL(item.image) : defaultImageUrl" alt="Gambar" />
      <div class="buttonaji"></div>
      <h2 class="judul-sedang">{{ item.titleBig }}</h2>
      <h1 class="judul-besar">{{ item.titleMedium }}</h1>
      <div class="tengah">
        <h3 class="judul-kecil">
          {{ `Rp. ${formatRupiah(item.price)} / ${item.unit}` }}
        </h3>
        <button class="tambah" @click="addToCart(item)">
          Tambah <img class="photo" src="../assets/Frame.svg" />
        </button>
      </div>
    </div>
  </div>

  <div v-for="(item, index) in paketItems" :key="index">
    <a class="judul1">{{ `${paketNameItems[index].name} (minimal ${paketNameItems[index].minimumUnit} orang)` }}</a>
    <div class="container">
      <div class="ni" v-for="(data, i) in item" :key="i">
        <img class="image" :src="data.image ? getImageURL(data.image) : defaultImageUrl" alt="Gambar" />
        <div class="buttonaji"></div>
        <h2 class="judul-sedang">{{ data.titleBig }}</h2>
        <h1 class="judul-besar">{{ data.titleMedium }}</h1>
        <div class="tengah">
          <h3 class="judul-kecil">{{ "Rp. " + formatRupiah(data.price) + "/" + data.unit }}</h3>
          <button class="tambah" @click="addToCart(data)">
            Tambah <img class="photo" src="../assets/Frame.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <Notification v-if="notification.message" :message="notification.message" :type="notification.type" />
</template>

<script setup>
import { verifyToken } from "src/auth/auth";
import navbar from "../components/NavBar.vue";
import Carts from "../stores/carts";
import env from "stores/environment"
import Notification from "components/NotificationAlert.vue";
</script>

<script>
import { ref } from "vue";
import cookieHandler from "src/cookieHandler";

export default {
  components: {
    Notification
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tiketItems: ref(),
      paketItems: ref(),
      paketNameItems: ref(),
      defaultImageUrl: "https://picsum.photos/200/300",
      isOpen: false,
      isOpen2: false,
      imageUrl: "../assets/trigger.svg",
      options: [
        { label: "Hari", value: "Perhari" },
        { label: "Minggu", value: "Perminggu" },
        { label: "Bulan", value: "Perbulan" },
      ],
      options2: [
        { label: "Gratis", value: "Gratis" },
        { label: "Berbayar", value: "Berbayar" },
      ],
      selectedOptions: [],
      selectedOptions2: [],
      notification: {
        message: "",
        type: "info",
      },
      cart: new Carts(),
    };
  },
  async mounted() {
    this.fetchData();
  },
  beforeUnmount() {
    this.storeCartToDatabase();
  },
  methods: {
    async storeCartToDatabase() {
      this.cart.updateToDB();
    },
    async fetchData() {
      try {
        const response = await this.$api.get("items/booking");
        if (response.status !== 200) throw Error("Error Occured");

        let tikets = [],
          pakets = {};

        for (let subType of response.data.data) {
          switch (subType.orderTypeId) {
            case 1: //Tiket Type
              for (let order of subType.orders) {
                tikets.push({
                  id: order.id,
                  image: order.image,
                  titleMedium: order.name,
                  titleBig: order.desc,
                  subType: subType.orderTypeId,
                  quantity: 0,
                  price: order.price,
                  unit: order.units,
                });
              }
              break;
            case 2: //Paket Type
              const subTypeName = `${subType.name}|${subType.minimumUnits ? subType.minimumUnits : undefined}`;
              if (!pakets[subTypeName]) {
                pakets[subTypeName] = [];
              }

              for (let order of subType.orders) {
                pakets[subTypeName].push({
                  id: order.id,
                  image: order.image,
                  titleMedium: order.name,
                  titleBig: order.desc,
                  minimumUnit: subType.minimumUnits,
                  quantity: 0,
                  price: order.price,
                  unit: order.units,
                });
              }
              break;
          }
        }

        this.tiketItems = tikets;
        this.paketItems = Object.values(pakets);
        this.paketNameItems = Object.keys(pakets).map(paket => {
          const [name, minimumUnit] = paket.split('|')
          return { name, minimumUnit }
        })
      } catch (err) {
        console.log(err);
      }
    },
    getImageURL(image) {
      if (image.startsWith("http")) {
        return image;
      } else {
        return this.$api.get(`uploads/${image}`);
      }
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
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
    filterItems(startId, endId) {
      return this.items.filter(
        (item) => item.id >= startId && item.id <= endId
      );
    },
    findItemById(id) {
      return this.items.find((item) => item.id === id);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown2() {
      this.isOpen2 = !this.isOpen2;
    },
    selectOption(option) {
      this.selectedOptions.push(option);
    },
    selectOption2(option) {
      this.selectedOptions2.push(option);
    },
    applySelection() {
      // Close dropdowns
      this.isOpen = false;
      this.isOpen2 = false;
      // Filter items based on selected options
      const filteredItems = this.items.filter((item) => {
        // Check if item matches selected pelaksanaan option
        const pelaksanaanMatch =
          this.selectedOptions.length === 0 ||
          this.selectedOptions.includes(item.buttonText1.toLowerCase());
        // Check if item matches selected jenis event option
        const jenisEventMatch =
          this.selectedOptions2.length === 0 ||
          this.selectedOptions2.includes(item.buttonText2.toLowerCase());
        return pelaksanaanMatch && jenisEventMatch;
      });
      console.log("Filtered items:", filteredItems);
    },
    addToCart(rowData) {
      try {
        const tokenExist = cookieHandler.getCookie(env.TOKEN_STORAGE_NAME)
        if (!tokenExist) throw Error('Anda Masih Belum Log In!')
        const storedData = {
          id: rowData.id,
          name: rowData.titleMedium,
          image: rowData.image,
          quantity: 1,
          minimumUnit: rowData.minimumUnit,
          price: rowData.price,
          type: "T",
        };
        const cartData = this.cart.addManyItem([storedData]).getItem();
        if (!cartData) throw Error("Error Occured");
        return this.cart.updateItem();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.header {
  margin-top: 93px;
  background: linear-gradient(90deg,
      rgba(218, 165, 32, 0.5) 0%,
      rgba(18, 59, 50, 0.5) 100%);
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 101px;
  top: 104px;
  flex-direction: row;
  gap: 327px;
  display: flex;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 69px;
}

.text1 {
  margin-left: 110px;
  font-size: 24px;
  font-family: Raleway;
}

.text1 {
  font-size: 14px;
  color: #212121;
  font-family: "Arial", sans-serif;
  width: 400px;
  height: 22px;
  top: 86.69px;
  left: 156px;
  line-height: 22px;
  text-align: left;
}

.text2 {
  width: 372px;
  height: 32px;
  top: 151px;
  left: 132px;
  font-family: "Raleway";
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  font-weight: bold;
}

.judul1 {
  font-family: "Raleway";
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  margin-left: 132px;
  margin-top: 69px;
}

.opsi1 {
  width: 150px;
  height: 40px;
  top: 228px;
  left: 132px;
  font-family: "Lexend", sans-serif;
  padding: 10px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid;
  border-color: #e0e0e0;
  margin-left: 129px;
}

.opsi2 {
  width: 150px;
  height: 40px;
  top: 228px;
  left: 132px;
  font-family: "Lexend", sans-serif;
  padding: 10px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid;
  border-color: #e0e0e0;
  margin-left: 30px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

nav ul li {
  margin-right: 30px;
}

nav ul li a,
nav ul li button {
  display: block;
  color: #000000;
  background-color: transparent;
  border: none;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 25px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

nav ul li a:hover,
nav ul li button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.ni {
  width: 370px;
  height: 90px;
  margin-top: 14px;
  margin-right: 20px;
  position: relative;
}

.container::-webkit-scrollbar {
  display: none;
}

.container {
  display: flex;
  margin-left: 131px;
  height: 340px;
  /* Contoh ukuran tinggi */
  overflow-x: scroll;
  margin-bottom: 72px;
}

.buttonaji {
  display: flex;
  /* Use flexbox */
  justify-content: left;
  /* Center children horizontally */
  align-items: left;
  /* Center children vertically */
  margin-left: -10px;
}

.tengah {
  display: flex;
  /* Use flexbox */
  justify-content: left;
  /* Center children horizontally */
  align-items: left;
  /* Center children vertically */
}

.image {
  width: 325px;
  height: 181px;
  object-fit: cover;
  border-radius: 10px;
  /* Adjust the value to change the roundness */
  z-index: 2;
}

.btn-small {
  padding: 6px 12px;
  /* Reduced padding for a more compact button */
  font-size: 12px;
  /* Decreased font size */
  border-radius: 6.29px;
  /* Updated border-radius */
  background: transparent;
  border: 0.79px solid #49454f1f;
  color: #1d1b20;
  width: 75.15px;
  /* Width based on Hug dimension */
  height: 25.15px;
  /* Height based on Fixed dimension */
  font-family: Raleway;
  /* Corrected the font-family property */
  display: flex;
  justify-content: center;
  /* Center the content horizontally */
  align-items: center;
  /* Center the content vertically */
  margin-right: 0px;
  margin-left: 10px;
  /* Adjusted margin for spacing */
  cursor: pointer;
}

.btn-small:hover {
  background-color: #49454f1f;
  /* Darker shade when hovered */
}

.judul-sedang {
  width: 308px;
  height: 24px;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.judul-besar {
  max-width: 308px;
  height: 66px;
  font-family: Raleway;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #5e5e5e;
}

.judul-kecil {
  width: 220px;
  height: 24px;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.tambah {
  width: auto;
  height: auto;
  padding: 4px 14px;
  border-radius: 6.29px;
  gap: 4px;
  background: #fae084;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 700;
  font-family: Raleway;
  cursor: pointer;
}

/* .tambah :hover {
} */

.photo {
  text-align: center;
  margin-left: 6px;
}

.btn-small,
.btn-kall,
.tambah {
  width: auto;
}

.dropdown-toggle {
  width: 150px;
  height: 40px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  position: absolute;
  top: 228px;
  left: 132px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
  cursor: pointer;
}

.dropdown-toggle span {
  margin-right: 8px;
  z-index: 1;
}

.dropdown-toggle img {
  margin-left: auto;
  /* Jarak antara teks dan gambar */
  z-index: 1;
}

.dropdown-menu {
  position: absolute;
  width: 150px;
  top: 274px;
  left: 132px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: Lexend;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.5px;
  cursor: pointer;
  z-index: 1;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 8px;
  gap: 8px;
  /* Jarak antara checkbox dan teks */
  font-family: Lexend;
  font-size: 14px;
  cursor: pointer;
  z-index: 1;
}

.checkbox-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
}

.checkbox-icon {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: black;
  /* Warna default ikon centang */
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;
  /* Efek transisi untuk perubahan warna */
}

.container input:checked~.checkmark {
  background-image: linear-gradient(gold, gold);
  z-index: 1;
}

.dropdown-toggle2 {
  width: 150px;
  height: 40px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  position: absolute;
  top: 228px;
  left: 132px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
  margin-left: 170px;
  cursor: pointer;
  z-index: 1;
}

.dropdown-menu2 {
  position: absolute;
  width: 150px;
  top: 274px;
  left: 132px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  margin-left: 170px;
  cursor: pointer;
  z-index: 1;
}

.dropdown-toggle2 span {
  margin-right: 8px;
  z-index: 1;
}

.dropdown-toggle2 img {
  margin-left: auto;
  /* Jarak antara teks dan gambar */
  z-index: 1;
}

.foto1 {
  width: 68px;
  height: 71px;
}

.foto2 {
  width: 69px;
  height: 74px;
}

.foto3 {
  width: 53px;
  height: 71px;
}

.foto4 {
  width: 100px;
  height: 49px;
}

.footer {
  width: 1280px;
  height: 650px;
  margin-top: 156px;
  position: relative;
}

a {
  text-decoration: none;
  color: #212121;
}

ul {
  list-style-type: none;
}

.footer-col {
  display: flex;
}

.footer-col h3 {
  font-size: 30px;
  font-weight: 40px;
  display: inline-block;
  margin-bottom: 11px;
  margin-top: 76px;
}

.footer-col-1 {
  margin-left: 88px;
  color: #212121;
}

.logo {
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  margin-left: 88px;
}

.logo img {
  width: 70px;
  margin-right: 9px;
}

.footer-col-2 {
  margin-left: 60px;
}

.footer-col-3 {
  margin-left: 60px;
}

.footer-col-4 {
  margin-left: 139px;
  width: 434px;
}

.footer-col li {
  color: #212121;
}

.footer-col li:not(:last-child) {
  margin-bottom: 11px;
}

.adress {
  width: 184px;
  height: 84px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 62px;
  margin-left: 88px;
}

.lower {
  width: 1080px;
  height: 142px;
  margin-left: 88px;
  display: flex;
}

.inlower {
  padding-top: 108px;
  margin-left: 80px;
  position: absolute;
}

.collab {
  display: flex;
  flex-direction: row;
  gap: 46px;
}

.susun {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 46px;
  padding-left: 645px;
}

.button {
  width: 431px;
  height: 58px;
  border-radius: 10px;
  border: none;
  background-color: #123b32;
  color: #ffffff;
  text-align: left;
  padding-left: 22px;
  font-size: 20px;
  font-weight: 800;
  margin-top: 22px;
  line-height: 28px;
  font-family: "Raleway";
}

.namanyafooter {
  margin-top: 2rem;
}
</style>