<template>
  <nav>
    <NavBar border is-checkout-page="true" />
    <NavBar border is-checkout-page="true" />
    <div class="cover">
      <img src="../assets/images/SilsilahSejarah.png" />
      <p class="top-title">Warisan Leluhur Cirebon</p>
      <p class="title">Mengenal Lebih Dekat dengan Silsilah Kesultanan</p>
    </div>
  </nav>

  <div class="seluruh">
    <div class="line-container">
      <div class="line"></div>
    </div>
    <div v-for="sultan in sultans" :key="sultan.name" class="row">
      <div class="side">
        <div class="line-content-container">
          <div class="content">
            <h3 class="sultan-title">{{ sultan.name }}</h3>
            <p class="description">{{ sultan.description }}</p>
            <div class="image-container">
              <img class="circle" src="../assets/images/buled.jpeg" />
              <span class="gold-text">{{ sultan.year }}</span>
            </div>
            <p class="details">{{ sultan.details }}</p>
            <div>
              <img v-for="(image, index) in sultan.images" :key="index" :src="image" class="additional-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComp/>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import sultanXImage from '../assets/images/sultan sepuh xi.png';
import sultanXIImage from '../assets/images/sultan sepuh xii.jpg';
import sultanXIIImage from '../assets/images/sultan sepuh xiii.jpg';
import sultanXIVmage from '../assets/images/sultan sepuh xiv.jpg';
import sultanXIVmage2 from '../assets/images/sultan sepuh xiv 2.jpg';
import sultanXVmage from '../assets/images/sultan sepuh xv.jpg';
import sultanXVmage2 from '../assets/images/sultan sepuh xv 2.jpg';


export default {
  components: {
    NavBar, FooterComp
  },
  data() {
    return {
      sultans: [
        {
          name: "Sultan Sepuh I",
          description: "Sultan Sepuh I, yang bernama asli Pangeran Raja Adipati Syamsuddin Martawijaya, dinobatkan sebagai sultan pada tahun 1662 M.",
          year: "1662 M",
          details: "Beliau adalah putra dari Pangeran Aria Wirasaba, putra dari Pangeran Cakrabuana. Sultan Sepuh I merupakan sultan pertama yang memerintah Kesultanan Kasepuhan. Beliau memerintah selama 35 tahun dan wafat pada tahun 1697.",
          images: []
        },
        {
          name: "Sultan Sepuh II",
          description: "Sultan Sepuh II memerintah selama 23 tahun dan wafat pada tahun 1720.",
          year: "1697 M",
          details: "Sultan Sepuh II, yang bernama asli Pangeran Raja Adipati Muhammad Arifin, dinobatkan sebagai sultan pada tahun 1697. Beliau adalah putra dari Sultan Sepuh I.",
          images: []
        },
        {
          name: "Sultan Sepuh III",
          description: "Sultan Sepuh III memerintah selama 30 tahun dan wafat pada tahun 1750.",
          year: "1720 M",
          details: "Sultan Sepuh III, yang bernama asli Pangeran Raja Adipati Abdul Jalil, dinobatkan sebagai sultan pada tahun 1720. Beliau adalah putra dari Sultan Sepuh II.",
          images: []
        },
        {
          name: "Sultan Sepuh IV",
          description: "Sultan Sepuh IV memerintah selama 30 tahun dan wafat pada tahun 1780.",
          year: "1750 M",
          details: "Sultan Sepuh IV, yang bernama asli Pangeran Raja Adipati Abdul Gani, dinobatkan sebagai sultan pada tahun 1750. Beliau adalah putra dari Sultan Sepuh III.",
          images: []
        },
        {
          name: "Sultan Sepuh V",
          description: "Sultan Sepuh V memerintah selama 25 tahun dan wafat pada tahun 1805.",
          year: "1778 M",
          details: "Sultan Sepuh V, yang bernama asli Pangeran Raja Adipati Suryanegara, dinobatkan sebagai sultan pada tahun 1780. Beliau adalah putra dari Sultan Sepuh IV.",
          images: []
        },
        {
          name: "Sultan Sepuh VI",
          description: "Sultan Sepuh VI memerintah selama 20 tahun dan wafat pada tahun 1825.",
          year: "1784 M",
          details: "Sultan Sepuh VI, yang bernama asli Pangeran Raja Adipati Arifudin, dinobatkan sebagai sultan pada tahun 1805. Beliau adalah putra dari Sultan Sepuh V.",
          images: []
        },
        {
          name: "Sultan Sepuh VII",
          description: "Sultan Sepuh VII memerintah selama 15 tahun dan wafat pada tahun 1840.",
          year: "1790 M",
          details: "Sultan Sepuh VII, yang bernama asli Pangeran Raja Adipati Syafiuddin, dinobatkan sebagai sultan pada tahun 1825. Beliau adalah putra dari Sultan Sepuh VI.",
          images: []
        },
        {
          name: "Sultan Sepuh VIII",
          description: "Sultan Sepuh VIII memerintah selama 20 tahun dan wafat pada tahun 1860.",
          year: "1816 M",
          details: "Sultan Sepuh VIII, yang bernama asli Pangeran Raja Adipati Zainuddin, dinobatkan sebagai sultan pada tahun 1840. Beliau adalah putra dari Sultan Sepuh VII.",
          images: []
        },
        {
          name: "Sultan Sepuh IX",
          description: "Sultan Sepuh IX memerintah selama 25 tahun dan wafat pada tahun 1885.",
          year: "1845 M",
          details: "Sultan Sepuh IX, yang bernama asli Pangeran Raja Adipati Abdul Fattah, dinobatkan sebagai sultan pada tahun 1860. Beliau adalah putra dari Sultan Sepuh VIII.",
          images: []
        },
        {
          name: "Sultan Sepuh X",
          description: "Sultan Sepuh X memerintah selama 30 tahun dan wafat pada tahun 1915.",
          year: "1890 M",
          details: "Sultan Sepuh X, yang bernama asli Pangeran Raja Adipati Sulaiman, dinobatkan sebagai sultan pada tahun 1885. Beliau adalah putra dari Sultan Sepuh IX.",
          images: []
        },
        {
          name: "Sultan Sepuh XI",
          description: "Sultan Sepuh XI memerintah selama 25 tahun dan wafat pada tahun 1940.",
          year: "1899 M",
          details: "Sultan Sepuh XI, yang bernama asli Pangeran Raja Adipati Abdul Karim, dinobatkan sebagai sultan pada tahun 1915. Beliau adalah putra dari Sultan Sepuh X.",
          images: [sultanXImage]
        },
        {
          name: "Sultan Sepuh XII",
          description: "Sultan Sepuh XII memerintah selama 30 tahun dan wafat pada tahun 1970.",
          year: "1942 M",
          details: "Sultan Sepuh XII, yang bernama asli Pangeran Raja Adipati Muhammad Djalaluddin, dinobatkan sebagai sultan pada tahun 1940. Beliau adalah putra dari Sultan Sepuh XI.",
          images: [sultanXIImage]
        },
        {
          name: "Sultan Sepuh XIII",
          description: "Sultan Sepuh XIII memerintah selama 25 tahun dan wafat pada tahun 1995.",
          year: "1969 M",
          details: "Sultan Sepuh XIII, yang bernama asli Pangeran Raja Adipati Abdul Rahman, dinobatkan sebagai sultan pada tahun 1970. Beliau adalah putra dari Sultan Sepuh XII.",
          images: [sultanXIIImage]
        },
        {
          name: "Sultan Sepuh XIV",
          description: "Sultan Sepuh XIV memerintah selama 20 tahun dan wafat pada tahun 2015.",
          year: "2010 M",
          details: "Sultan Sepuh XIV, yang bernama asli Pangeran Raja Adipati Muhammad Abdullah, dinobatkan sebagai sultan pada tahun 1995. Beliau adalah putra dari Sultan Sepuh XIII.",
          images: [sultanXIVmage,sultanXIVmage2]
        },
        {
          name: "Sultan Sepuh XV",
          description: "Sultan Sepuh XV memerintah dari tahun 2015 hingga sekarang.",
          year: "2020 M",
          details: "Sultan Sepuh XV, yang bernama asli Pangeran Raja Adipati Luqman Zulkaedin, dinobatkan sebagai sultan pada tahun 2015. Beliau adalah putra dari Sultan Sepuh XIV.",
          images: [sultanXVmage,sultanXVmage2]
        }
      ]
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.footer{
  width: 100%;
  height: 100%;
}

.top-title {
  position: absolute;
  margin-top: -30vw;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  color: #FAE084;
  font-size: 2vw;
  white-space: nowrap;
  font-family: 'Raleway';
}

.title {
  position: absolute;
  margin-top: -24vw;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF6E0;
  font-size: 3.5vw;
  font-weight: 400;
  width: 45vw;
  text-align: center;
  font-family: 'Raleway';
}

.cover img {
  width: 100%;
  height: auto;
  margin-top: 90px;
  object-fit: cover;
}

.seluruh {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.line-container {
  position: absolute;
  top: 0;
  bottom: 0;
  margin-left: -81.8vw;
  transform: translateX(-50%);
  width: 0.3%;
  height: 99%;
  background-color: #DAA520;
  z-index: -1;
  margin-top: 6.5vh;
}

.line-content-container {
  display: flex;
  position: relative;
}

.row {
  display: flex;
  width: 80vw;
  margin-left: -11vw;
  margin-top: 8vw;
  justify-content: center;
}

.side {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 6.6vw; /* Adjust to position the content on the right side of the line */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  font-family: 'Raleway';
}

.sultan-title {
  font-size: 3.1vw;
  font-weight: bold;
  margin-bottom: 1.5%;
}

.description {
  color: #000;
  font-family: "Inter";
  font-size: 1vw;
  line-height: 3vh;
  text-align: left;
}

.image-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  position: relative;
}

.circle {
  width: 2.5vw;
  height: auto;
  position: absolute;
  margin-left: -66%; /* Adjust to place the circle on top of the line */
  z-index: 1;
  background-color: white; /* White background */
  border: 0.7vw solid white; /* Thick white border */
  border-radius: none; /* Makes it round */
}

.gold-text {
  color: #DAA520;
  font-size: 1.5vw;
  font-weight: bold;
  /* Adjust to position the text next to the circle */
}

.details {
  margin-top: 1.5vh;
  font-family: "Inter";
  font-size: 1.1vw;
  line-height: 1.5vw;
  color: #000;
  text-align: left;
}

.additional-image {
  width: 32vw;
  margin-left: -4vw;
  border: 2vw solid white;
  height: auto;
}
</style>