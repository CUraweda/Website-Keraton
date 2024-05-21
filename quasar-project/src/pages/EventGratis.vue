<template>
  <nav>
    <navbar border :isCheckoutPage="true" />
  </nav>
  <div class="header">
    <div class="text1">
      <ul>
        <il href="#">Booking / Tiket Event</il>
      </ul>
      <div class="kakaje">
        <ul>
          <a class="text2">
            <strong><a class="text2">Tiket Event Upacara Adat Tradisi</a></strong>
          </a>
        </ul>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-toggle">
      {{ dropdownTitle }} <img src="../assets/images/shape.png" />
    </button>
    <div v-if="isOpen" class="dropdown-menu">
      <label v-for="(option, index) in options" :key="index" class="checkbox-container">
        <input type="checkbox" :value="option.value" v-model="selectedOptions" />
        {{ option.label }}
      </label>
    </div>
    <div class="kami">
      <button @click="toggleDropdown2" class="dropdown-toggle2">
        {{ dropdownTitle2 }} <img src="../assets/images/shape.png" />
      </button>
      <div v-if="isOpen2" class="dropdown-menu2">
        <label v-for="(option2, index2) in options2" :key="index2" class="checkbox-container">
          <input type="checkbox" :value="option2.value" v-model="selectedOptions2" />
          {{ option2.label }}
        </label>
      </div>
    </div>
    <div class="container">
      <div class="ni" v-for="(item, index) in events" :key="index">
        <img class="image" :src="item.image" alt="Gambar" />
        <div class="buttonaji">
          <button class="btn-small">{{ item.buttonText1 }}</button>
          <button class="btn-small">{{ item.isFree ? "Gratis" : "Bayar" }}</button>
        </div>
        <h2 class="judul-sedang">{{ item.titleBig }}</h2>
        <h1 class="judul-besar">{{ item.titleMedium }}</h1>
        <h1 class="judul-sedang" v-if="!item.isFree">{{ "Rp. " + formatRupiah(item.price) }}</h1>
        <div class="tengah">
          <button class="tambah" @click="addToCart(item)">
            Tambah <img class="photo" src="../assets/Frame.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <footerdesk class="bawah"></footerdesk>
</template>

<script setup>
import navbar from "../components/NavBar.vue";
import footerdesk from "../components/FooterComp.vue";
</script>

<script>
import { ref } from "vue";
import Carts from "../stores/carts";

export default {
  components: {
    navbar,
    footerdesk,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownTitle: {
      type: String,
      default: "Pelaksanaan",
    },
    dropdownTitle2: {
      type: String,
      default: "Jenis Event",
    },
  },
  watch: {
    selectedOptions: {
      handler(val) {
        console.log(val);
        this.fetchData();
      },
    },
    selectedOptions2: {
      handler(val) {
        console.log(val);
        this.fetchData();
      },
    },
  },
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      imageUrl: "../assets/trigger.svg",
      options: ref(),
      cart: new Carts(),
      options2: [
        { label: "Gratis", value: "1" },
        { label: "Bayar", value: "0" },
      ],
      selectedOptions: [],
      selectedOptions2: [],
      events: ref(),
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let freeOptions, iterationOptions;
      try {
        if (this.selectedOptions)
          iterationOptions = Object.values(this.selectedOptions);
        if (this.selectedOptions2)
          freeOptions = Object.values(this.selectedOptions2);
        console.log(freeOptions, iterationOptions);
        const eventResponse = await this.$axios.post(
          "http://localhost:3000/keraton/event/page",
          {
            ...(iterationOptions &&
              iterationOptions.length != 0 && {
              iterat: Object.values(this.selectedOptions),
            }),
            ...(freeOptions &&
              freeOptions.length < 2 &&
              freeOptions.length != 0 && {
              free: freeOptions[0] != 0 ? true : false,
            }),
          }
        );
        const iterationResponse = await this.$axios.get(
          "http://localhost:3000/keraton/iteration"
        );
        if (eventResponse.status != 200) throw Error("Error occured");
        if (iterationResponse.status != 200) throw Error("Error occured");
        this.events = eventResponse.data.data.map((event) => ({
          image: event.image,
          buttonText1: event.iteration.name,
          titleMedium: event.desc,
          titleBig: event.name,
          isFree: event.isFree,
          price: event.price
        }));
        this.options = iterationResponse.data.data.map((iterat) => ({
          label: iterat.name,
          value: iterat.id,
        }));
      } catch (err) {
        console.log(err);
      }
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
    addToCart(rowData) {
      try {
        const storedData = {
          id: rowData.id,
          name: rowData.titleBig,
          image: rowData.image,
          quantity: 1,
          price: rowData.price,
          type: "E"
        };
        const cartData = this.cart.addManyItem([storedData]).getItem();
        if (!cartData) throw Error("Error Occured");
        return this.cart.updateItem();
      } catch (err) {
        console.log(err);
      }
    },
    formatRupiah(price) {
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.bawah {
  transform: scale(0.9);
  margin-left: -70px;
}

.header {
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
  margin-top: 92.3px;
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
  font-family: Raleway;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  font-weight: bold;
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
  height: 90px;
  margin-top: 90px;
  position: relative;
}

.container::-webkit-scrollbar {
  display: none;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 200px 10px;
  /* width: 250px; */
  /* overflow-x: auto; */
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
  width: 308px;
  height: 66px;
  font-family: Raleway;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #5e5e5e;
}

.tambah {
  width: auto;
  height: auto;
  padding: 4px 14px;
  border-radius: 6.29px;
  gap: 4px;
  background: #fae084;
  margin-left: 220px;
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
</style>
