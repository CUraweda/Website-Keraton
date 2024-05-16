<template>

  <nav>
    <navbar isWhiteText/>
  </nav>
  <body>

    <div class="image-container">
      <img alt="Area Keraton Image" class="image" src="../assets/images/museumPaket.png" />
      <p class="image-text">MUSEUM PUSAKA</p>
      <p class="text-bottom1">Museum Pusaka ini terletak di dalam kompleks Keraton Kasepuhan, Cirebon, Jawa Barat.</p>
      <p class="text-bottom2">Didirikan pada tahun 1981 oleh Sultan Sepuh XIV, Pangeran Raja Mochamad Jayadiningrat.</p>
      <p class="text-bottom3">Museum ini memiliki luas sekitar 1.200 meter persegi dan terdiri dari dua lantai.</p>
      <a class="arrow-down" @click="scrollToContent"><img src="../assets/images/Frame.svg"></a>
    </div>

  <div class="destinasi-container">
    <div class="Destinasi">
      <p> <span class="bold">Mengenal</span> sejarah dan budaya Cirebon</p>
    </div>
    <p class="bawah-destinasi">Museum ini menyimpan berbagai koleksi benda bersejarah, seperti kereta kencana, gamelan,
      dan lukisan.</p>
  </div>

  <div class="slider" ref="slider">
    <div
      v-for="(card, index) in cards"
      :key="index"
      :id="'card-' + index"
      :class="{ cardd: true, active: index === currentIndex }"
    >
      {{ card.content }}
    </div>
  </div>

  <div class="button-container">
    <img class="button-slider" @click="prevCard" src="../assets/svg/ArrowLeft.svg" />
    <div
      class="bulet"
      v-for="(bulet, index) in bullets"
      :key="index"
      :class="{ active: index === currentIndex }"
    ></div>
    <img class="button-slider" @click="nextCard" src="../assets/svg/ArrrowRight.svg" />
</div>


    <div class="Fasilitas">
      <p>Fasilitas</p>
      <p class="Fasilitas-Text">Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang kegiatan wisata dan
        budaya.</p>
    </div>

    <div class="Fasilitas-Images">
      <div class="card">
        <p class="card-text">Ruang Pameran</p>
      </div>
      <div class="card2">
        <p class="card-text2">Ruang Audio Visual</p>
      </div>
      <div class="Fasilitas-Images2">
        <div class="card3">
          <p class="card-text3">Ruang Kelas</p>
        </div>
        <div class="card4">
          <p class="card-text4">Tempat Penjualan Souvenir</p>
        </div>
      </div>
    </div>

    <div class="Kunjungan">
      <p>Kunjungan</p>
      <p class="Kunjungan-Text">Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket wisata yang menarik.
      </p>
      <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button>
    </div>

    <a href="/#/booking">
    <div class="Paket">
      <p class="bold2">Tiket Masuk Museum Pusaka</p>
      <div class="teks-kunjungan">
        <p>Rp. 15.000/orang</p>
      </div>
      <div class="teks-kunjungan2">
        <p>Area Museum Pusaka</p>
      </div>
      <img class="paket-images" src="../assets/images/museumPaket.png">
    </div>
  </a>
<bawah class="footer"></bawah>
  </body>
</template>

<script setup>
import navbar from '../components/NavBar.vue'
import bawah from '../components/FooterComp.vue'
</script>

<script>

const scrollToContent = () => {
  document.querySelector('.Destinasi').scrollIntoView({
    behavior: 'smooth'
  });
};

export default {
  components : {
    navbar,
    bawah
  },
  data() {
    return {
      cards: [
        { content: '' },
        { content: '' },
        { content: '' },
        { content: '' },
        { content: '' }
      ],
      currentIndex: 2
    };
  },
  computed: {
    bullets() {
      return Array(this.cards.length).fill('');
    }
  },
  methods: {
    prevCard() {
  if (this.currentIndex === 0) {
    this.currentIndex = this.cards.length - 1;
  } else {
    this.currentIndex--;
  }
},
nextCard() {
  if (this.currentIndex === this.cards.length - 1) {
    this.currentIndex = 0;
  } else {
    this.currentIndex++;
  }
},
    centerActiveCard() {
      const sliderWidth = this.$refs.slider.offsetWidth;
      const cardWidth = 250;
      const offset = (sliderWidth - cardWidth) / 2;
      const cardContainer = document.querySelector('.slider');
      const activeCard = document.querySelector('.cardd.active');

      if (activeCard && cardContainer) {
        const index = this.currentIndex;
        const newPosition = -index * cardWidth + offset;
        cardContainer.style.transform = translateX`(${newPosition}px)`;
      }
    }
  },
  watch: {
  currentIndex() {
    this.centerActiveCard();
  }
}
};


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
</style>

<style scoped>
nav {
  position: relative;
  z-index: 1000;
  width: 100%;
  max-width: 1280px;
  margin-left: -50px;
}

body {
  width: fit-content;
overflow-x: hidden;  
  
}

* {
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
}

.Paket {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 10px ;
  gap: 109px;
  position: absolute;
  width: 1080px;
  height: 207px;
  left: 15%;
  top: 3700px;
  margin-top: 86px;
  border-bottom: 1px solid #D0D5DD;
}

.bold2 {
  width: 900px;
  height: 120px;
  top: 32px;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.teks-kunjungan {
  width: 600px;
  height: 200px;
  top: 32px;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0em;
  color: #5e5e5e;
  text-align: left;
  position: absolute;
}

.teks-kunjungan2 {
  width: 600px;
  height: 20px;
  top: 130px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0em;
  text-align: left;
  color: #5e5e5e;
  position: absolute;
}


.paket-images {
  width: 100%;
  height: 207px;
  left: 100px;
  top: 3715px;
  object-fit: cover;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto; 
}

.image {
  width: 100vw; 
  height: 120vh; 
  object-fit: cover; 
  filter: brightness(60%);
}

.image-text {
  font-family: Raleway;
  position: absolute;
  min-width: 100vw;
  height: 72px;
  top: 40%;
  transform: translateY(-50%);
  color: white;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;

  }

  .text-bottom1 {
  position: absolute;
  width: 362px;
  height: 18px;
  font-size: 16px;
  line-height: 24px;
  color: white;
  left: 5%;
  transform: translateX(-50%);
  top: 60%; 
  transform: translateY(-50%);
}

.text-bottom2 {
  position: absolute;
  width: 362px;
  height: 18px;
  font-size: 16px;
  line-height: 24px;
  color: white;
  left: 37%;
  top: 60%;
  transform: translateX(-50%);
  transform: translateY(-50%);
}

.text-bottom3 {
  position: absolute;
  width: 362px;
  height: 18px;
  font-size: 16px;
  line-height: 24px;
  color: white;
  left: 70%;
  transform: translateX(-50%);
  top: 60%;
  transform: translateY(-50%);
}

.arrow-down {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 50vw;
  left: 50vw;
  cursor: pointer;
}

.Fasilitas{
    width: 542px;
    height: 72px;
    top: 1500px;
    left: 150px;
    margin-left: 10%;
    font-family: Raleway;
    font-size: 64px;
    font-weight: 400;
    line-height: 400px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
}

.Fasilitas-Text{
  width: 542px;
    height: 72px;
    margin-top: -220px;
    margin-left: 130%;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
}

.Fasilitas-Images {
  gap: 20px;
}

.Fasilitas-Images2 {
  gap: 20px;

}


.card {
  width: 600px;
  height: 649px;
  top: 1773px;
  left: 30px; /* Menggeser ke kanan sedikit */
  margin-top: 200px;
  margin-left: 10%;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/image33.png);
}

.card2 {
  width: 600px;
  height: 649px;
  top: 1773px;
  left: 660px;
  margin-top: -650px;
  margin-left: 52%;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/card2.png);
}


.card3 {
  width: 600px;
  height: 649px;
  top: 1773px;
  left: 30px; /* Menggeser ke kanan sedikit */
  margin-top: 10px;
  margin-left: 10%;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
}

.card3 {
  background-image: url(../assets/images/card3.png);

}

.card4 {
  width: 600px;
  height: 649px;
  top: 1773px;
  left: 660px;/* Menggeser ke kiri sedikit */
  margin-top: -1100px;
  margin-left: 52%;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/card4Museum.png);
}

.card-text {
  width: 1000px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 1000px;
  margin-left: -170px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.card-text2 {
  width: 500px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 1000px;
  margin-left: 60px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.card-text3 {
  width: 1000px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 1000px;
  margin-left: -170px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.card-text4 {
  padding-top: 460px;
  width: 500px;
  height: 18px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin-top: 450px;
  margin-left: 60px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.Kunjungan {
  width: 542px;
  height: 72px;
  top: 3400px;
  margin-left: 14%;
  font-family: Raleway;
  font-size: 64px;
  font-weight: 400;
  line-height: 400px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;


}

.Kunjungan-Text {
  width: 542px;
  height: 72px;
  margin-top: -220px;
  margin-left: 550px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: right;
}

.destinasi-container {
  position: relative;
  width: 100%; 
  height: 100%;
}

.Destinasi {
  font-family: Raleway;
  margin-top: 200px; 
  width: 100%;
  height: 64px;
  top: 40%; /* Posisi vertikal di tengah */
  transform: translateY(-150%); /* Menggeser elemen ke tengah vertikal */
  color: #000000;
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  text-align: center;
}

.bawah-destinasi {
  width: 886px;
  height: 68px;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 50%; /* Posisi horizontal di tengah */
  top: 70%; /* Posisi vertikal di tengah */
  transform: translate(-50%, -50%); /* Menggeser elemen ke tengah horizontal dan vertikal */
}


.bold {
  font-family: Raleway;
  font-weight: bold;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  text-align: center;
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

.button {
  width: 431px;
  height: 58px;
  border-radius: 10px;
  border: none;
  background-color: #123B32;
  color: #FFFFFF;
  text-align: left;
  padding-left: 22px;
  font-size: 20px;
  font-weight: 800;
  margin-top: 22px;
  line-height: 28px;
  font-family: Raleway;
}

.button-Kunjungan {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: #123B32;
  color: #FFFFFF;
  text-align: left;
  font-size: 20px;
  font-weight: 800;
  margin-left: 800px;
  font-family: Raleway;
  line-height: 22px;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cardd {
  width: 211.86px;
position: relative;
height: 341.65px;
backdrop-filter: blur(20px);
background-color: #ccc;
margin: 5px;
margin-top: 50px;
border: none;   
justify-content: center;
padding-top: 50px;
text-align: center;
align-items: center;
box-sizing: border-box;
cursor: pointer;
border-radius: 20px;
transition: all 0.3s ease-in-out;
background-size: cover;
right: 100px;
}

#card-0 {
  background: url(../assets/images/sliderM1.png);
  background-size: cover;

}

#card-1 {
  background: url(../assets/images/sliderM2.png);
  background-size: cover;
}

#card-2 {
  background: url(../assets/images/sliderM3.png);
  background-size: cover;

}

#card-3 {
  background: url(../assets/images/sliderM4.png);
  background-size: cover;

}

#card-4 {
  background: url(../assets/images/sliderM5.png);
  background-size: cover;

}

.cardd.active{
  width: 255.72px;
  height: 414px;
}

.button-container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.button-slider{
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
}

.bulet {
  width: 6px;
  height: 2px;
  border-radius: 20%;
  background-color: #ccc;
}

.bulet.active {
  background-color: rgb(0, 0, 0);
}

.button-slider.active {
  background-color: rgb(0, 0, 0);
}

.footer{
  margin-top: 700px;
  margin-left: 5%;
}
@media screen and (max-width: 1441px){
  .arrow-down{
  margin-top: 100px;
}

.Paket{
  margin-top: 200px;
  margin-bottom: -100px;
}
}

@media screen and (max-width: 1024px){
.footer{
transform: scale(0.8);
margin-left: -140px;
}

.Paket{
  margin-left: -140px;
  transform: translate(0.5);
  margin-top: -250px;
}

.teks-kunjungan,
.teks-kunjungan2,
.bold2{
  margin-left: 30px;
}

img.paket-images{
  transform: scale(0.6);
  margin-left: -100px;
}

.Kunjungan{
  transform: scale(0.8);
  margin-left: 5px;
  margin-top: 120px
}

.card,
.card3{
  transform: scale(0.73);
  margin-left: 0px;
}

.card2,
.card4{
  transform: scale(0.73);
  margin-left: 447px;
  margin-bottom: -180px;
}

.Fasilitas{
  transform: scale(0.8);
  margin-left: 15px;
}

.Fasilitas-Text{
  margin-left: 550px
}

.slider{
  transform: scale(0.8);
  margin-left: -45px;
}

.destinasi-container{
  transform: scale(0.8);
  margin-left: -40px;
}

.button-container{
  margin-left: -100px;
}

.image-text{
  margin-left: -60px;
}

.text-bottom3{
  transform: scale(0.8);
  margin-left: -90px;
}
.text-bottom2{
  transform: scale(0.8);
  margin-left: -50px;
}

.text-bottom1{
  transform: scale(0.8);
  margin-left: -40px;
}
.arrow-down{
  margin-top: 100px;
}
}

@media screen and (max-width: 769px){
.footer{
transform: scale(0.55);
margin-left: -235px;
margin-bottom: -100px;
}

.Paket{
  margin-left: -235px;
  transform: translate(0.5);
  transform: scale(0.7);
  margin-top: -800px;
}

.teks-kunjungan,
.teks-kunjungan2,
.bold2{
  margin-left: 30px;
}

img.paket-images{
  transform: scale(0.6);
  margin-left: -100px;
}

.Kunjungan{
  transform: scale(0.6);
  margin-left: -60px;
  margin-top: 200px;
  margin-bottom: -300px;
}

.card,
.card3{
  transform: scale(0.6);
  margin-left: -100px;
}

.card2,
.card4{
  transform: scale(0.6);
  margin-left: 275px;
  margin-bottom: -265px;
}

.Fasilitas{
  transform: scale(0.65);
  margin-left: -50px;
  margin-bottom: -170px;
}

.Fasilitas-Text{
  margin-left: 500px
}

.slider{
  transform: scale(0.65);
  margin-left: -125px;
}

.destinasi-container{
  transform: scale(0.65);
  margin-left: -125px;
}

.button-container{
  margin-left: -250px;
  margin-top: -30px
}

.image-text{
  transform: scale(1);
  margin-left: -260px;
}

.text-bottom3{
  transform: scale(0.7);
  margin-left: -210px;
  width: 300px;
}
.text-bottom2{
  transform: scale(0.7);
  margin-left: -120px;
  width: 300px;
}

.text-bottom1{
  transform: scale(0.7);
  margin-left: -60px;
  width: 300px;
}
.arrow-down{
  margin-top: 225px;
}
}

</style>