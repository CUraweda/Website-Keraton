<template>
  <nav>
    <navbar isWhiteText />
  </nav>

  <body class="body">
    <div class="image-container">
      <img alt="Area Keraton Image" class="image" src="../assets/images/Baluarti Keraton.png" />
      <p class="image-text">BALUARTI KERATON</p>
      <p class="text-bottom1">Keraton Kasepuhan Cirebon adalah salah satu dari empat keraton di Cirebon, Jawa Barat.</p>
      <p class="text-bottom2">Didirikan pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan Cirebon.</p>
      <p class="text-bottom3">Keraton Kasepuhan merupakan salah satu peninggalan sejarah yang penting di Cirebon</p>
      <a class="arrow-down" @click="scrollToContent"><img src="../assets/images/Frame.svg"></a>
    </div>

    <div class="Destinasi">
      <p> Destinasi wisata yang <span class="bold">wajib</span> dikunjungi</p>
    </div>
    <p class="bawah-destinasi">Menawarkan berbagai hal menarik untuk dilihat dan dipelajari, mulai dari sejarah,
      arsitektur, hingga budaya.</p>
    <div class="slider" ref="slider">
      <div v-for="(card, index) in cards" :key="index" :id="'card-' + index"
        :class="{ cardd: true, active: index === currentIndex }">
        {{ card.content }}
      </div>
    </div>

    <div class="button-container">
      <button class="button-slider" @click="prevCard">&lt;</button>
      <div class="bulet" v-for="(bullet, index) in bullets" :key="index" :class="{ active: index === currentIndex }">
      </div>
      <button class="button-slider" @click="nextCard">&gt;</button>
    </div>


    <div class="Tourist">
      <div class="top-tourist">
        <p> Top <span class="bold">Tourist</span> attraction</p>
      </div>
      <div class="arrow-tourist"><a class="arrow-down2" @click="scrollToContent2"><img
            src="../assets/images/Frame.svg"></a></div>
    </div>

    <div class="Tourist-Container">
      <div class="Tourist-content">
        <a class="Hiasan"><img src="../assets/images/Tagline.svg"></a>
        <p class="Dalem">Dalem Agung Pakungwati</p>
        <p class="Isi-Dalem">Dalem Agung Pakungwati merupakan kompleks bangunan utama<br> keraton.
          Kompleks ini terdiri dari berbagai bangunan, seperti pendopo,<br> masjid, dan museum.
          Masjid Agung Kasepuhan merupakan salah satu<br> masjid tertua di Cirebon
          dan merupakan salah satu bangunan bersejarah<br> yang penting di kota ini.</p>
        <a class="Hiasan"><img src="../assets/images/Content.svg"></a>

      </div>
      <img alt="" class="image-Tourist" src="../assets/images/image 21.png" />
    </div>

    <div class="Tourist-Container">
      <div class="Tourist-content2">
        <a class="Hiasan2"><img src="../assets/images/Tagline2.svg"></a>
        <p class="Dalem2">Masjid Agung Kasepuhan</p>
        <p class="Isi-Dalem2">Masjid Agung Kasepuhan merupakan salah satu masjid tertua di Cirebon dan merupakan salah
          satu bangunan bersejarah yang penting di kota ini.
          Masjid ini dibangun pada tahun 1480 oleh Sunan Gunung Jati, salah satu Wali Songo.</p>

      </div>
      <img alt="" class="image-Tourist2" src="../assets/images/image34.png" />
    </div>

    <div class="Tourist-Container">
      <div class="Tourist-content3">
        <a class="Hiasan"><img src="../assets/images/Tagline3.svg"></a>
        <p class="Dalem">Museum Pusaka Kasepuhan</p>
        <p class="Isi-Dalem">Museum Pusaka Keraton Kasepuhan menyimpan berbagai koleksi benda bersejarah, seperti kereta
          kencana, gamelan, dan lukisan.
          Salah satu koleksi yang paling terkenal adalah kereta kencana Singa Barong, yang merupakan kereta kencana
          Sunan Gunung Jati.</p>
        <a class="Hiasan"><img src="../assets/images/Content.svg"></a>

      </div>
      <img alt="" class="image-Tourist3" src="../assets/images/image 35.png" />
    </div>


    <div class="Lokasi-container">
      <div class="Lokasi">
        <p>Lokasi</p>
      </div>
      <div class="Lokasi-samping">
        <p>Dengan luas sekitar 13,5 hektar dan terdiri dari 2 komplek yaitu Dalem Agung Pakungwati dan kompleks Keraton
          Pakungwati.</p>
      </div>
    </div>


    <div class="Denah">
      <img src="../assets/images/Frame 80.png">
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3439357079596!2d108.5708669!3d-6.7278234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan!5e0!3m2!1sid!2sid!4v1710081749605!5m2!1sid!2sid"
      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div class="Fasilitas">
      <p class="fasilitas">Fasilitas</p>
      <p class="Fasilitas-Text">Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang kegiatan wisata dan
        budaya.</p>
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

        <div class="Kunjungan">
          <p>Kunjungan</p>
        </div>
        <div class="Kunjungan2">
          <p class="Kunjungan-Text">Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket wisata yang
            menarik.</p>
        </div>
        <a href="/#/booking">
          <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button></a>
        <a href="/#/booking">
          <div class="Paket">
            <img src="../assets/images/Frame 81.png">
            <img src="../assets/images/Frame 82.png">
            <img src="../assets/images/Frame 83.png">
            <img src="../assets/images/Frame 84.png">
          </div>
        </a>
      </div>
    </div>
  </body>
  <bawah class="bawah"></bawah>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
</style>

<style scoped>
.fasilitas {
  margin-left: 150px;
}

.top-tourist {
  padding-top: 85px;
}

nav {
  position: relative;
  z-index: 1000;
  width: 100%;
  max-width: 1280px;
  margin-left: -50px;
}

body {
  width: max-content;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;

  margin-top: -105px;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
}

.Paket {
  transform: scale(1.2);
  position: absolute;
  width: 100px;
  height: 500px;
  top: 7661px;
  margin-left: 130px;
  padding: 0px, 0px, 10px, 0px;
  border: 0px, 0px, 1px, 0px;
  gap: 109px;

}

.image-container {
  position: relative;
  width: auto;
  height: auto;
}

.image {
  width: 1470px;
  height: auto;
  object-fit: cover;
  filter: brightness(60%);
}

.Tourist-Container {
  display: flex;
  background-color: #212121;
  width: 1470px;
  height: 700px;

}

.Tourist-content {
  margin-top: 300px;
  flex: 1;
  height: 600px;
  margin-left: 150px;
}

.Tourist-content2 {
  margin-top: 300px;
  flex: 1;
  height: 700px;
  margin-left: -70px;

}

.Tourist-content3 {
  margin-top: 200px;
  flex: 1;
  height: 700px;
  margin-left: 150px;
}

.image-Tourist {
  width: 40%;
  height: 77%;
  margin-right: 120px;
  margin-top: 20px;
}

.image-Tourist2 {
  width: 40%;
  margin-left: 90px;
  margin-top: -80px;
}

.image-Tourist3 {
  width: 40%;
  margin-right: 120px;
  margin-top: -150px;
}

.Lokasi-container {
  display: flex;
  flex-direction: row;
  margin-top: 243px;
}

.Lokasi {
  width: 542px;
  height: 72px;
  margin-left: 120px;
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
  margin-left: 140px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0em;
  text-align: right;
}

.Denah {
  margin-left: 54px;
  position: absolute;
  width: 693.7px;
  height: 781.85px;
  top: 4454px;
  left: 20px;
  border-radius: 9.2px;
  margin-top: 200px;
}

iframe {
  width: 645px;
  height: 781.85px;
  top: 4454px;
  left: 20px;
  border-radius: 9.2px;
  margin-top: 200px;
  margin-left: 740px;
  position: absolute;
}

.Fasilitas {
  position: absolute;
  width: 542px;
  height: 72px;
  top: 5650px;
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
  margin-bottom: 9px;
}

.Fasilitas-Images2 {
  gap: 20px;
}


.card {
  width: 600px;
  height: 649px;
  top: 4153px;
  left: 0;
  margin-left: 130px;
  margin-top: 1800px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  position: absolute;
  background-image: url(../assets/images/Rectangle57.png);

}

.card2 {
  width: 600px;
  height: 649px;
  top: 4153px;
  left: 685px;
  margin-top: 1800px;
  margin-left: 70px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/image34.png);
  position: absolute;
}

.card3 {
  width: 600px;
  height: 649px;
  top: 4850px;
  left: 0;
  margin-left: 130px;
  margin-top: 1775px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  position: absolute;
}

.card3 {
  background-image: url(../assets/images/Rectangle59.png);

}

.card4 {
  width: 600px;
  height: 649px;
  top: 4850px;
  left: 685px;
  margin-left: 70px;
  margin-top: 1775px;
  border-radius: 30px;
  filter: opacity(70%);
  background-image: url(../assets/images/Rectangle60.png);
  background-size: cover;
  position: absolute;
}

.card-text {
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

.card-text2 {
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

.card-text3 {
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

.card-text4 {
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

.Kunjungan {
  position: absolute;
  width: 542px;
  height: 72px;
  top: 7300px;
  left: 250px;
  margin-left: -135px;
  font-family: Raleway;
  font-size: 64px;
  font-weight: 400;
  line-height: 400px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}

.Kunjungan2 {
  position: absolute;
  top: 5480px;
  left: 160px;
}


.Kunjungan-Text {
  width: 542px;
  height: 72px;
  margin-top: 2000px;
  margin-left: 720px;
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
  width: auto;
  height: 72px;
  left: px;
  top: 450px;
  color: white;
  font-size: 4.9vw;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;

}

.text-bottom1 {
  position: absolute;
  width: 370px;
  height: 18px;
  top: 800px;
  left: 90px;
  font-size: 16px;
  line-height: 24px;
  color: white;
}

.text-bottom2 {
  position: absolute;
  width: 360px;
  height: 48px;
  top: 800px;
  left: 560px;
  font-size: 16px;
  line-height: 24px;
  color: white;

}

.text-bottom3 {
  position: absolute;
  width: 370px;
  height: 48px;
  top: 800px;
  left: 990px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.arrow-down {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 920px;
  left: 700px;
  cursor: pointer;
}

.arrow-down2 {
  width: 32px;
  height: 32px;
  top: 801px;
  left: 624px;
  cursor: pointer;
}

.Destinasi {
  font-family: Raleway;
  margin-top: 70px;
  width: 1104px;
  height: 64px;
  top: 922px;
  left: 88px;
  margin-left: 160px;
  color: #000000;
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  text-align: center;
}

.Tourist {
  font-family: Raleway;
  margin-top: 200px;
  color: #ffffff;
  width: 1470px;
  height: 1844px;
  top: 2168px;
  background: linear-gradient(to bottom, #21212100, #2121215d, #212121ab, #212121);
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

.bawah-destinasi {
  width: 886px;
  height: 68px;
  top: 1014px;
  left: 197px;
  margin-left: 263px;
  margin-top: 40px;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
}

.bawah {
  margin-top: 4200px;

}

.Dalem {
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

.Hiasan2 {
  width: 370px;
  height: 150px;
  top: 2824.67px;
  left: 740px;
  margin-left: 200px;

}

.Hiasan {
  width: 370px;
  height: 150px;
  top: 2824.67px;
  left: 740px;
  margin-left: 20px;

}

.Dalem2 {
  text-align: left;
  width: 300px;
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

.Isi-Dalem {
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

.Isi-Dalem2 {
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

.slider {
  display: flex;
  margin-left: 160px;
  align-items: center;
  width: 1260px;
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
  background: url(../assets/images/image23.png);
  background-size: cover;

}

#card-1 {
  background: url(../assets/images/image24.png);
  background-size: cover;
}

#card-2 {
  background: url(../assets/images/image25.png);
  background-size: cover;

}

#card-3 {
  background: url(../assets/images/image22.png);
  background-size: cover;

}

#card-4 {
  background: url(../assets/images/slider5.png);
  background-size: cover;

}

.cardd.active {
  width: 255px;
  height: 414px;
  z-index: 9999;
}

.button-container {
  margin-top: 30px;
  left: 600px;
  margin-left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.button-slider {
  width: 32px;
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
  top: 906%;
  left: 235px;
  position: absolute;
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
  margin-top: 390px;
  margin-left: 888px;
  line-height: 28px;
  font-family: Raleway;
  position: absolute;
}
@media screen and (min-width: 1495px) {
  .button-Kunjungan{
    margin-top: -3165px;
  }
  .bawah{
    margin-left: 2px;
  }
  .Denah{
    margin-left: 70px;
  }
  .Tourist{
    width: 1495px;
  }
  .Tourist-Container{
    width: 1495px;
  }
  .slider{
    margin-left: 180px;
  }
  .image{
    width: 1495px;
  }
  .Destinasi{
    margin-left: 190px;
  }
  .bawah-destinasi{
    margin-left: 300px;
  }
  .card{
    margin-left: 100px;
    transform: scale(1.1)
  }
  .card2{
    margin-left: 110px;
    transform: scale(1.1)
  }
  .card3{
    margin-left: 100px;
    margin-top: 1850px;
    transform: scale(1.1)
  }
  .card4{
    margin-left: 110px;
    margin-top: 1850px;
    transform: scale(1.1)
  }
  
  .fasilitas{
    font-size: 70px;
    margin-left: 90px;
    margin-top: -50px;
  }

  .Fasilitas-Text{
    font-size: 22px;
  }
}

@media screen and (max-width: 1440px) {
  .Kunjungan{
    margin-top: -15px;
    margin-left: -165px; 
  }
  .Kunjungan-Text {
    margin-top: 1980px;
    margin-left: 688px;
  }

  .Paket {
    margin-left: 100px;
  }

  body {
    overflow-x: hidden;
  }

  .button-Kunjungan {
    top: 614%;
    margin-left: 859px;
  }
}

@media screen and (max-width: 1024px) {
  body {
    width: auto;
  }

  .button-Kunjungan {

    margin-left: 460px;
    transform: scale(0.8);
    top: 661%;
  }

  .card {
    transform: scale(0.8);
    margin-top: 1040px;
    margin-left: -30px;
  }

  .card2 {
    transform: scale(0.8);
    margin-top: 1040px;
    margin-left: -225px;
  }

  .card3 {
    transform: scale(0.8);
    margin-top: 870px;
    margin-left: -30px;
  }

  .card4 {
    transform: scale(0.8);
    margin-top: 870px;
    margin-left: -225px;
  }

  .Fasilitas {
    transform: scale(0.8);
    margin-top: -640px;
    margin-left: -260px;
  }

  .Lokasi-samping {
    transform: scale(0.8);
    margin-left: -120px;
  }

  .Lokasi {
    margin-left: 40px;
    transform: scale(0.8);
  }

  iframe {
    top: 430%;
    margin-left: 400px;
    transform: scale(0.7);
  }

  .Denah {
    top: 430%;
    margin-left: 20px;
    width: 10%;
    transform: scale(0.7);
  }

  .Tourist {
    width: 1024px;
  }

  .button-container {
    margin-right: 5px;
  }

  .slider {
    margin-left: 275px;
    width: 85%;
  }

  .Destinasi {
    margin-left: -40px;
    font-size: 47px;
  }

  .bold {
    font-size: 47px;
  }

  .bawah-destinasi {
    margin-top: 20px;
    width: 720px;
    margin-left: 148px;
    font-size: 20px;
  }

  .image {
    width: 1024px;
  }

  .image-text {
    top: 300px;
    margin-left: 20px;
  }

  .text-bottom1 {
    width: 310px;
    top: 530px;
    left: 30px;
    font-size: 13px;
  }

  .text-bottom2 {
    width: 310px;
    top: 530px;
    left: 390px;
    font-size: 13px;
  }

  .text-bottom3 {
    width: 310px;
    top: 530px;
    left: 710px;
    font-size: 13px;
  }

  .arrow-down {
    top: 630px;
    left: 510px;
  }

  .Tourist-Container {
    width: 1024px;
  }

  .Tourist-content {
    margin-left: 50px;
    font-size: px;
  }

  .image-Tourist {
    width: 420px;
    height: 380px;
    margin-left: 80px;
  }

  .Tourist-content2 {
    margin-left: -170px;
    font-size: px;
  }

  .image-Tourist2 {
    width: 420px;
    height: 380px;
    margin-left: 45px;
  }

  .Tourist-content3 {
    margin-left: 50px;
    font-size: px;
  }

  .image-Tourist3 {
    width: 420px;
    height: 380px;
    margin-left: 80px;
  }


  .Kunjungan {
    transform: scale(0.7);
    top: 6350px;
    left: 180px;
  }

  .Kunjungan-Text {
    transform: scale(0.8);
    margin-top: 115%;
    margin-left: 318px;
    font-size: 20px;
  }

  .Paket {
    margin-top: -1111px;
    margin-left: 100px;
    left: -1%;
    transform: scale(0.8);
  }

  .bawah {
    margin-top: 3100px;
    margin-left: -120px;
    transform: scale(0.7);
  }
}

@media screen and (max-width: 768px) {

  body {
    height: 2900px;
  }

  .button-Kunjungan {
    transform: scale(0.75);
    height: 40px;
    left: 275px;
    top: 4340px;
  }

  .card {
    transform: scale(0.57);
    margin-top: -890px;
    margin-left: -90px;
  }

  .card2 {
    transform: scale(0.57);
    margin-top: -890px;
    margin-left: -425px;
  }

  .card3 {
    transform: scale(0.57);
    margin-top: -1200px;
    margin-left: -90px;
  }

  .card4 {
    transform: scale(0.57);
    margin-top: -1200px;
    margin-left: -425px;
  }

  .Fasilitas {
    transform: scale(0.7);
    margin-top: -2460px;
    margin-left: -260px;
  }

  .Fasilitas-Text {
    margin-left: 520px;
  }

  .Lokasi-samping {
    transform: scale(0.7);
    margin-left: -160px;
    margin-top: -140px;
  }

  .Lokasi {
    margin-top: -140px;
    margin-left: -10px;
    transform: scale(0.7);
  }

  iframe {

    top: 350%;
    margin-left: 230px;
    transform: scale(0.55);
  }

  .Denah {
    top: 350%;
    margin-left: -20px;
    width: 10%;
    transform: scale(0.55);
  }

  .Tourist {
    width: 768px;
  }

  .button-container {
    transform: scale(0.8);
    margin-left: 290px;
    width: 200px;
  }

  .slider {
    margin-left: 321px;
    width: 90%;
  }

  .Destinasi {
    margin-left: -160px;
    font-size: 47px;
    transform: scale(0.7);
  }

  .bold {
    font-size: 47px;
  }

  .bawah-destinasi {
    margin-top: 20px;
    width: 720px;
    margin-left: 38px;
    transform: scale(0.8);
    font-size: 20px;
  }

  .image {
    width: 768px;
  }

  .image-text {
    top: 240px;
    transform: scale(0.8);
    margin-left: 0px;
  }

  .text-bottom1 {
    width: 310px;
    transform: scale(0.7);
    top: 413px;
    left: -9px;
    font-size: 13px;
  }

  .text-bottom2 {
    width: 310px;
    transform: scale(0.7);
    top: 410px;
    left: 250px;
    font-size: 13px;
  }

  .text-bottom3 {
    width: 310px;
    transform: scale(0.7);
    top: 410px;
    left: 480px;
    font-size: 13px;
  }

  .arrow-down {
    transform: scale(0.8);
    top: 470px;
    left: 385px;
  }

  .Tourist-Container {
    width: 768px;
    height: 390px;
  }

  .Tourist-content {
    margin-left: -10px;
    margin-top: 190px;
    transform: scale(0.75);
    font-size: 20px;
  }

  .image-Tourist {
    width: 420px;
    height: 380px;
    margin-left: -60px;
    margin-top: -30px;
    transform: scale(0.8);
  }

  .Tourist-content2 {
    margin-left: -250px;
    margin-top: 170px;
    transform: scale(0.75);
    font-size: 20px;
  }

  .image-Tourist2 {
    width: 420px;
    height: 380px;
    margin-left: -9px;
    margin-top: -110px;
    transform: scale(0.8);
  }

  .Tourist-content3 {
    margin-left: -10px;
    margin-top: 80px;
    transform: scale(0.75);
    font-size: 20px;
  }

  .image-Tourist3 {
    width: 420px;
    height: 380px;
    margin-left: -60px;
    margin-top: -220px;
    transform: scale(0.8);
  }

  .button-Kunjungan {
    margin-top: -60px;
    margin-left: 200px;
  }

  .Kunjungan {
    transform: scale(0.75);
    top: 4090px;
    left: 150px;
    font-size: 55px;
  }

  .Kunjungan-Text {
    transform: scale(0.8);
    margin-top: -1250px;
    margin-left: 90px;
    font-size: 20px;
  }

  .Paket {
    margin-top: -3400px;
    margin-left: 60px;
    transform: scale(0.62);
  }

  .bawah {
    width: 120%;
    margin-top: 1990px;
    margin-left: -200px;
    transform: scale(0.58);
  }
}
</style>

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

const scrollToContent2 = () => {
  document.querySelector('.Tourist').scrollIntoView({
    behavior: 'smooth'
  });
}

export default {
  component: {
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
  },
  mounted() {
    this.centerActiveCard();
    setInterval(this.nextCard, 100000000); // Auto slide every 3 seconds
  }
};
</script>