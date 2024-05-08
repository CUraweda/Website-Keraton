<template>

  <body>
    <nav>
    <navbar isWhiteText/>
  </nav>


    <div class="image-container">
      <img alt="Area Keraton Image" class="image" src="../assets/images/agung.png" />
      <p class="image-text"> DALEM AGUNG PANGKUWATI</p>
      <p class="text-bottom1">Salah satu destinasi wisata yang wajib dikunjungi jika Anda berkunjung ke Cirebon.</p>
      <p class="text-bottom2">Dibangun pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan Cirebon.</p>
      <p class="text-bottom3">Memiliki koleksi benda bersejarah, seperti kereta kencana, gamelan, dan lukisan.</p>
    </div>
    <a class="arrow-down" @click="scrollToContent"><img src="../assets/images/Frame.svg"></a>

    <div class="Destinasi">
      <p> <span class="bold">Mengapresiasi</span> nilai seni Cirebon </p>
    </div>
    <p class="bawah-destinasi">Dalem Agung Pakungwati merupakan kompleks bangunan utama di Keraton Kasepuhan, Cirebon, Jawa Barat. </p>

    <div class="slider" ref="slider">
  <div
    v-for="(card, index) in cards"
    :key="index"
    :id="'card-' + index"
    :class="{ cardd: true, active: index === currentIndex || index === (currentIndex + 0) % cards.length }"
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
        <div class="card-text">Panggung<br>Sanggabuwana</div>
    </div>

      <div class="card2">
        <p class="card-text2">Pendopo Agung<br>Pakungwati</p>
      </div>
      <div class="Fasilitas-Images2">
        <div class="card3">
          <p class="card-text3">Masjid Agung<br>
Kasepuhan</p>
        </div>
        <div class="card4">
          <p class="card-text4">Museum Pusaka<br>Keraton Kasepuhan</p>
        </div>
      </div>
    </div>

    <div class="Kunjungan">
      <p>Kunjungan</p>
      <p class="Kunjungan-Text">Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket wisata yang menarik.
      </p>
      <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button>
    </div>

    <div class="Paket">
      <p class="bold2">Tiket Masuk Museum Pusaka</p>
      <div class="teks-kunjungan">
        <p>Rp. 15.000/orang</p>
      </div>
      <div class="teks-kunjungan2">
        <p>Area Museum Pusaka</p>
      </div>

      <img class="paket-images" src="../assets/images/sat1.png">
    </div>
    <div class="footer">

      <div class="logo">
        <img src="../assets/images/logo_keraton.png" alt="">
        <p>KERATON <br>KASEPUHAN <br>CIREBON</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-1">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Sejarah</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Objek Wisata</a></li>
          </ul>
        </div>
        <div class="footer-col-2">
          <h3>Socials</h3>
          <ul>
            <li><a href="#">Whatsapp</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Threads</a></li>
          </ul>
        </div>
        <div class="footer-col-3">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col-4">
          <h3>Subscribes your email for updates!</h3>
          <button class="button">Enter your email</button>


        </div>
      </div>
      <div class="adress">
        Jalan Kasepuhan 43
        Cirebon, Jawa Barat
        45114
      </div>
      <div class="lower">
        <div class="inlower">
          @2024 Keraton Kasepuhan Cirebon
        </div>
        <div class="susun">
          <p>In collaboration</p>

          <div class="collab">
            <img src="../assets/images/logo_keraton.png" alt="" class="foto1">
            <img src="../assets/images/1 931.png" alt="" class="foto2">
            <img src="../assets/images/telkom.png" alt="" class="foto3">
            <img src="../assets/images/bjb.png" alt="" class="foto4">

          </div>
        </div>
      </div>
    </div>
    


  </body>
</template>

<script setup>
import navbar from '../components/NavBar.vue'

</script>

<script>

const scrollToContent = () => {
  document.querySelector('.slider').scrollIntoView({
    behavior: 'smooth'
  });
};



export default {
    
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
},


};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
</style>

<style scoped>
nav {
  position: relative;
  width: 95%;
  margin-left: 0px;
  color: white;
}

body {
  width: 1280px;
  overflow-y: 1024px;
}

* {
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
}

.Paket {
  /* Frame 81 */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px;
  gap: 199px;

  position: absolute;
  width: 1285px;
  height: 220px;
  left: 115px;
  top: 3700px;
  margin-top: 86px;

  border-bottom: 1px solid #D0D5DD;
}

.bold2 {
  width: 1050px;
  height: 120px;
  margin-top: -20px;
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
  top: 42px;
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
  top: 120px;
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
  width: 1095px;
  max-width: 1085px;
  height: 207px;
  left: 109px;
  top: 3715px;
  object-fit: cover;
}

.image-container {
  margin-top: 0px;
  position: absolute;
  width: 1280px;
  height: 859px;
  z-index: -1;
}

.image {
  width: 1481px;
  height: 792px;
  object-fit: cover;
  filter: brightness(60%);
}




.Fasilitas {
  position: absolute;
  width: 442px;
  height: 72px;
  top: 1600px;
  left: 100px;
  font-family: Raleway;
  font-size: 64px;
  font-weight: 400;
  line-height: 400px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;


}

.Fasilitas-Text {
  width: 542px;
  height: 72px;
  margin-top: -220px;
  margin-left: 750px;
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
  font: raleway;
  width: 690px;
  height: 649px;
  top: 1773px;
  margin-left: 50px;
  border-radius: 30px;
  margin-top: 325px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/rec1.png);


}

.card2 {
  width: 690px;
  height: 649px;
  top: 1773px;
  left: 785px;
  margin-top: 110px;
  margin-left: -25px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/rec2.png);
  position: absolute;
}

.card3 {
  width: 690px;
  height: 649px;
  top: 1850px;
  margin-left: 50px;
  margin-top: 690px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  position: absolute;
}

.card3 {
  background-image: url(../assets/images/rec3.png);

}

.card4 {
  width: 690px;
  height: 649px;
  top: 1850px;
  left: 780px;
  margin-top: 690px;
  margin-left: -20px;
  border-radius: 30px;
  filter: opacity(70%);
  background-image: url(../assets/images/rec4.png);
  background-size: cover;
  position: absolute;
  
}

.card-text {
  width: 600px;
  height: 48px;
  top: 662px;
  margin-left: 62px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  padding-top: 489px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}



.card-text2 {
  width: 600px;
  height: 48px;
  top: 662px;
  margin-left: 62px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  padding-top: 489px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.card-text3 {
  width: 600px;
  height: 48px;
  top: 662px;
  margin-left: 62px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  padding-top: 489px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.card-text4 {
  width: 600px;
  height: 0px;
  top: 662px;
  margin-left: 62px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  padding-top: 489px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
}

.Kunjungan {
  position: absolute;
  width: 542px;
  height: 72px;
  top: 3400px;
  left: 100px;
  margin-left: 0px;
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
  margin-left: 760px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: right;
}

.image-text {
  font-family: Raleway;
  position: absolute;
  width: 983px;
  height: 72px;
  top: 370px;
  left: 275px;
  color: white;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;

}
.image-text p{
  text-align: center;
}
.text-bottom1 {
  position: absolute;
  width: 362px;
  height: 18px;
  top: 600px;
  left: 120px;
  font-size: 16px;
  line-height: 24px;
  color: white;
}

.text-bottom2 {
  position: absolute;
  width: 360px;
  height: 48px;
  top: 600px;
  left: 565px;
  font-size: 16px;
  line-height: 24px;
  color: white;

}

.text-bottom3 {
  position: absolute;
  width: 362px;
  height: 48px;
  top: 600px;
  left: 999px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.arrow-down {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 740px;
  left: 700px;
  cursor: pointer;
}


.Destinasi {
  font-family: Raleway;
  margin-top: 850px;
  width: 1104px;
  height: 64px;
  top: 922px;
  left: 88px;
  margin-left:200px;
  color: #000000;
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  text-align: center;
}

.bold {
  font-family: Raleway;
  font-weight: bold;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  text-align: center;
  
}

.bawah-destinasi {
  width: 886px;
  height: 68px;
  top: 1014px;
  left: 197px;
  margin-left: 305px;
  margin-top: 40px;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
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

.footer {
  width: 1280px;
  height: 650px;
  margin-top: 1900px;
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
  padding-top: 600px;
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
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #123B32;
  color: #FFFFFF;
  text-align: left;
  padding-left: 22px;
  font-size: 20px;
  font-weight: 800;
  margin-top: 250px;
  margin-left: 1000px;
  line-height: 28px;
  font-family: Raleway;
  position: absolute;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1480px;
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
  background-image: url(../assets/images/img1.png); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}


#card-1 {
  background-image: url(../assets/images/img2.png); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}


#card-2 {
  background-image: url(../assets/images/img3.png);
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}


#card-3 {
  background-image: url(../assets/images/img4.png); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}


#card-4 {
  background-image: url(../assets/images/img5.png);
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
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

.button-slider {
  width:30px;
  height: 35px;
  background: transparent;
  color: #212121;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease;
}
.button-slider1 {
  width:30px;
  height: 35px;
  background: transparent;
  color: #212121;
  font-weight: bold;
  border: 3px solid #212121;
  border-radius: 50%;
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
.button-slider1.active {
  background-color: rgb(0, 0, 0);
}

@media screen and (max-width: 1920px) {
  body {
    width: auto; /* Lebar auto untuk kecilin layout pada perangkat mobile */
  }

  nav {
    width: 100%; /* Buat navbar penuh lebar pada layar kecil */
  }
}

@media screen and (max-width: 920px) {
  .image-text {
    font-family: 'Raleway', sans-serif;  /* Memastikan penggunaan font Raleway dengan fallback ke sans-serif */
    position: absolute;
    width: 52%; /* Mengubah lebar dari px ke persentase untuk responsivitas */
    top: 40%; /* Mengubah posisi atas dari px ke persentase */
    left: 12%; /* Mengubah posisi kiri dari px ke persentase */
    color: white;
    font-size: calc(1.5vw + 24px); /* Ukuran font dinamis berdasarkan lebar viewport */
    font-weight: 700;
    line-height: 1.1; /* Menyesuaikan line-height sebagai multiplier dari ukuran font */
    letter-spacing: normal; /* Menggunakan 'normal' sebagai pengaturan standar untuk letter-spacing */
    text-align: center;
  }
}
@media screen and (max-width: 920px) {
  .image {
    font-family: 'Raleway', sans-serif;  /* Memastikan penggunaan font Raleway dengan fallback ke sans-serif */
    position: absolute;
    width: 72%; /* Mengubah lebar dari px ke persentase untuk responsivitas */
    top: 0%; /* Mengubah posisi atas dari px ke persentase */
    left: 0%; /* Mengubah posisi kiri dari px ke persentase */
    color: white;
    font-size: calc(1.5vw + 24px); /* Ukuran font dinamis berdasarkan lebar viewport */
    letter-spacing: normal; /* Menggunakan 'normal' sebagai pengaturan standar untuk letter-spacing */
    text-align: center;
  }
}



</style>