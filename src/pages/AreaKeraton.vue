<template>
  <nav>
    <navbar isWhiteText/>
  </nav>
  <body>
    <div class="image-container">
      <img alt="Area Keraton Image" class="image" src="../assets/images/image20.png" />
      <p class="image-text">BALUARTI KERATON</p>
      <p class="text-bottom1">Keraton Kasepuhan Cirebon adalah salah satu dari empat keraton di Cirebon, Jawa Barat.</p>
      <p class="text-bottom2">Didirikan pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan Cirebon.</p>
      <p class="text-bottom3">Keraton Kasepuhan merupakan salah satu peninggalan sejarah yang penting di Cirebon</p>
      <a class="arrow-down" @click="scrollToContent"><img src="../assets/images/Frame.svg"></a>
    </div>
<div class="destinasi-container">
    <div class="Destinasi">
     <p> Destinasi wisata yang <span class="bold">wajib</span> dikunjungi</p> 
    </div>
    <p class="bawah-destinasi">Menawarkan berbagai hal menarik untuk dilihat dan dipelajari, mulai dari sejarah, arsitektur, hingga budaya.</p>
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

  <div class="Tourist">
     <p> Top <span class="bold">Tourist</span> attraction</p> 
     <a class="arrow-down2" @click="scrollToContent2"><img src="../assets/images/Frame.svg"></a>
    </div>

    <div class="Tourist-Container">
  <div class="Tourist-content">
    <a class="Hiasan" ><img src="../assets/images/Tagline.svg"></a>
    <p class="Dalem">Dalem Agung Pakungwati</p>
    <p class="Isi-Dalem">Dalem Agung Pakungwati merupakan kompleks bangunan utama<br> keraton.
      Kompleks ini terdiri dari berbagai bangunan, seperti pendopo,<br> masjid, dan museum.
      Masjid Agung Kasepuhan merupakan salah satu<br> masjid tertua di Cirebon
      dan merupakan salah satu bangunan bersejarah<br> yang penting di kota ini.</p>
      <a class="Hiasan" ><img src="../assets/images/Content.svg"></a>

    </div>
  <img alt="" class="image-Tourist" src="../assets/images/image 21.png" />
</div>

<div class="Tourist-Container">
  <div class="Tourist-content2">
    <a class="Hiasan2" ><img src="../assets/images/Tagline2.svg"></a>
    <p class="Dalem2">Masjid Agung Kasepuhan</p>
    <p class="Isi-Dalem2">Masjid Agung Kasepuhan merupakan salah satu masjid tertua di Cirebon dan merupakan salah satu bangunan bersejarah yang penting di kota ini. 
      Masjid ini dibangun pada tahun 1480 oleh Sunan Gunung Jati, salah satu Wali Songo.</p>
      <a class="Hiasan2" ><img src="../assets/images/Content.svg"></a>

    </div>
  <img alt="" class="image-Tourist2" src="../assets/images/image34.png" />
</div>
 
<div class="Tourist-Container">
  <div class="Tourist-content3">
    <a class="Hiasan" ><img src="../assets/images/Tagline3.svg"></a>
    <p class="Dalem">Museum Pusaka Kasepuhan</p>
    <p class="Isi-Dalem">Museum Pusaka Keraton Kasepuhan menyimpan berbagai koleksi benda bersejarah, seperti kereta kencana, gamelan, dan lukisan. 
      Salah satu koleksi yang paling terkenal adalah kereta kencana Singa Barong, yang merupakan kereta kencana Sunan Gunung Jati.</p>
      <a class="Hiasan" ><img src="../assets/images/Content.svg"></a>

  </div>
  <img alt="" class="image-Tourist3" src="../assets/images/image 35.png" />
</div>

<div class="Lokasi-container">
  <div class="Lokasi">
    <p>Lokasi</p>
  </div>
  <div class="Lokasi-samping">
    <p>Dengan luas sekitar 13,5 hektar dan terdiri dari 2 komplek yaitu Dalem Agung Pakungwati dan kompleks Keraton Pakungwati.</p>


    <div class="Denah">
      <img src="../assets/images/Frame 80.png">
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3439357079596!2d108.5708669!3d-6.7278234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan!5e0!3m2!1sid!2sid!4v1710081749605!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

<div class="Fasilitas">
  <p>Fasilitas</p>
  <p class="Fasilitas-Text">Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang kegiatan wisata dan budaya.</p>
</div>

<div class="Fasilitas-Images">
  <div class="card">
    <p class="card-text">Area Parkir</p>
    </div>
    <div class="card2">
      <p class="card-text2">Tempat Ibadah</p>
  </div>
  <div class="Fasilitas-Images2">
  <div class="card3">
    <p class="card-text3">Toilet</p>
    </div>
    <div class="card4">
      <p class="card-text4">Tempat Penjualan Souvenir</p>
  </div>
</div>
</div>

<div class="Kunjungan">
  <p>Kunjungan</p>
  <p class="Kunjungan-Text">Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket wisata yang menarik.</p>
  <a href="/#/booking">
  <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button></a>
</div>
<a href="/#/booking">
<div class="Paket">
  <img src="../assets/images/Frame 81.png">
  <img src="../assets/images/Frame 82.png">
  <img src="../assets/images/Frame 83.png">
  <img src="../assets/images/Frame 84.png">
</div>
</a>
  </body>
  <bawah class="bawah"></bawah>
</template>

<script setup>
import navbar from '../components/NavBar.vue'
import bawah from '../components/FooterComp.vue'

</script>


<script>


const scrollToContent = () => {
    document.querySelector('.Destinasi').scrollIntoView({ 
      behavior: 'smooth' 
    });    };

    const scrollToContent2 = () => {
    document.querySelector('.Tourist').scrollIntoView({ 
      behavior: 'smooth' 
  });}

  export default {
    component:{
      bawah,
      navbar
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
        cardContainer.style.transform = `translateX(${newPosition}px)`;
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
  z-index: 1000;
  width: 100%;
  max-width: 1280px;
  margin-left: -50px;

}

 body {
  width: fit-content;
    margin-top: -105px;
    overflow-x: hidden;
  }
*{
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
}

.Paket{
  position: absolute;
  width: 1,085px;
  height: 207px;
  top: 6361px;
  left: 100px;
  padding: 0px, 0px, 10px, 0px;
  border: 0px, 0px, 1px, 0px;
  gap: 109px;

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
  top: 50%;
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
  top: 70%; 
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
  top: 70%;
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
  top: 70%;
  transform: translateY(-50%);
  }
  .arrow-down {
    position: absolute;
  width: 362px;
  height: 18px;
  font-size: 16px;
  line-height: 24px;
  left: 50%;
  transform: translateX(-50%);
  top: 90%; 
  transform: translateY(-50%);
    cursor: pointer; 
  }


.Tourist-Container {
    display: flex;
    background-color: #212121;
    width: 100%;
    height: 700px;
}

.Tourist-content {
    flex: 1;
    height: 600px;
    margin-left: 50px;
}

.Tourist-content2 {
    flex: 1;
    height: 700px;
    margin-left: -70px;
}

.Tourist-content3 {
    flex: 1;
    height: 700px;
    margin-left: 50px;
}

.image-Tourist {
    max-width: 40%; 
    margin-right: 100px; 
    margin-top: -180px;
}

.image-Tourist2 {
    max-width: 50%; 
    margin-left: 50px; 
    margin-top: -250px;
}

.image-Tourist3 {
    max-width: 50%; 
    margin-right: 100px; 
    margin-top: -250px;
}
.Lokasi-container {
  display: flex;
  justify-content: center; /* Memastikan konten berada di tengah secara horizontal */
  position: relative;
  margin-top: 243px;
}

.Lokasi {
  width: 542px;
  height: 72px; 
  margin-left: 50px;
  font-family: Raleway;
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}

.Lokasi-samping {
  width: 562px; 
  height: 112px; 
  margin-left: 50px; 
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0em;
  text-align: right;
}

.Denah {
  position: absolute;
  width: 550px;
  height: 781.85px;
  top: 50%; /* Pusat vertikal */
  left: 25%; /* Pusat horizontal */
  transform: translate(-50%, 10%); /* Geser ke tengah */
}

iframe {
  position: absolute;
  width: 550px;
  height: 781.85px;
  top: 50%; /* Pusat vertikal */
  left: 75%; /* Pusat horizontal */
  transform: translate(-50%, 10%); /* Geser ke tengah */
}




.Fasilitas{
    position: absolute;
    width: 542px;
    height: 72px;
    top: 4500px;
    left: 150px;
    margin-left: -120px;
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
      margin-left: 650px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
}
.Fasilitas-Images{
  gap: 20px;
  margin-bottom: 9px;
}
.Fasilitas-Images2{
  gap: 20px;
}


.card{
  width: 600px;
height: 649px;
top: 3153px;
left: 0;
margin-left: 30px;
margin-top: 1600px;
border-radius: 30px;
filter: opacity(70%);
background-size: cover;
position: absolute;
background-image: url(../assets/images/Rectangle57.png);

}

.card2{
  width: 600px;
height: 649px;
top: 3153px;
left: 685px;
margin-top: 1600px;
margin-left: -40px;
border-radius: 30px;
filter: opacity(70%);
background-size: cover;
background-image: url(../assets/images/image34.png);
position: absolute;
}
.card3{
  width: 600px;
height: 649px;
top: 3850px;
left: 0;
margin-left: 30px;
margin-top: 1565px;
border-radius: 30px;
filter: opacity(70%);
background-size: cover;
position: absolute;
background-image: url(../assets/images/Rectangle59.png);

}

.card4{
  width: 600px;
height: 649px;
top: 3850px;
left: 685px;
margin-left: -40px;
margin-top: 1560px;
border-radius: 30px;
filter: opacity(70%);
background-image: url(../assets/images/Rectangle60.png);
background-size: cover;
position: absolute;
}
.card-text{
  width: 210px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 1000px;
  margin-left: 220px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  }
  .card-text2{
  width: 500px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 1000px;
  margin-left: 45px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  }
  .card-text3{
  width: 210px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 1000px;
  margin-left: 220px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  }
  .card-text4{
  padding-top: 300px;
  width: 500px;
  height: 48px;
  top: 662px;
  left: 242px;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin-top: 450px;
  margin-left: 45px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  }

  .Kunjungan{
    position: absolute;
    width: 542px;
    height: 72px;
    top: 6000px;
    left: 100px;
    margin-left: -30px;
    font-family: Raleway;
    font-size: 64px;
    font-weight: 400;
    line-height: 400px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;


}
.Kunjungan-Text{
  width: 542px;
    height: 72px;
    margin-top: -220px;
      margin-left: 600px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
}

  .arrow-down2 {
    width: 32px;
    height: 32px;
    top: 801px;
    left: 624px;
    cursor: pointer; 
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

  .Tourist {
    font-family: Raleway;
    margin-top: 200px; 
    color: #ffffff;
    width: 100%;
    height: 1844px;
    top: 2168px;
    background: linear-gradient(to bottom,#21212100,#2121215d,#212121ab, #212121);
    height: 250px;    
    font-size: 56px;
    font-weight: 400;
    line-height: 84px;
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


.Dalem{
    width: 370px;
    height: 150px;
    top: 2221px;
    left: 158px;
    margin-left: 20px;
    font-family: Raleway;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
}
.Hiasan2{
  width: 370px;
    height: 150px;
    top: 2824.67px;
    left: 740px;
    margin-left: 200px;
    
}
.Hiasan{
  width: 370px;
    height: 150px;
    top: 2824.67px;
    left: 740px;
    margin-left: 20px;
    
}
.Dalem2{
    width: 500px;
    height: 150px;
    top: 2824.67px;
    left: 740px;
    margin-left: 200px;
    font-family: Raleway;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
}
.Isi-Dalem{
    width: 421.33px;
    height: 120px;
    top: 2393px;
    left: 158px;
    margin-left: 20px;
    font-family: Raleway;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
}
.Isi-Dalem2{
    width: 421.33px;
    height: 100px;
    top: 2996.67px;
    left: 689px;
    margin-left: 200px;
    font-family: Raleway;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;

}
.Tourist-Container {
    align-items: center; 
}

.image-Tourist2 {
    order: -1; 
    margin-right: 20px; 
}

.foto1 {
 width:68px;
 height: 71px;
}
.foto2 {
 width:69px;
 height: 74px;
}
.foto3 {
 width:53px;
 height: 71px;
}
.foto4 {
 width : 100px;
 height: 49px;
}
  
a {
 text-decoration: none;
 color: #212121;
}
ul {
 list-style-type: none;
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

.button {
 width:431px;
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
 font-family: "Raleway";
}
.button-Kunjungan {
 width:300px;
 height: 40px;
 border-radius: 10px;
 background-color: #123B32;
 color: #ffffff;
 text-align: left;
 padding-left: 22px;
 font-size: 20px;
 font-weight: 800;
 margin-top: 250px;
 margin-left: 800px;
 line-height: 28px;
 font-family: Raleway;
 position: absolute;
 border: none;
 cursor: pointer;
}

.slider{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
  

.cardd{
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

#card-0{
background: url(../assets/images/image23.png);
background-size:cover;

}

#card-1{
background: url(../assets/images/image24.png);
background-size:cover;
}#card-2{
background: url(../assets/images/image25.png);
background-size:cover;

}#card-3{
background: url(../assets/images/image22.png);
background-size:cover;

}#card-4{
background: url(../assets/images/slider5.png);
background-size:cover;

}

.cardd.active{
  width: 255.72px;
  height: 414px;
}

.button-container{
  margin-top: 30px;
  left: 600px;
  margin-left: -10px;
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
.bulet{
  width: 6px;
  height: 2px;
  border-radius: 20%;
  background-color: #ccc;
}
.bulet.active{
  background-color: rgb(0, 0, 0);
}
.button-slider.active{
  background-color: rgb(0, 0, 0);
}

.bawah{
  transform: scale(0.9);
  margin-left: -70px;
  margin-top: 3100px;
}
</style>