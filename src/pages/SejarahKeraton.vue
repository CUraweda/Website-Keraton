<template>
  <nav>
  <navbar isWhiteText :isCheckoutPage="true"/>
</nav>
  <section id="hero">
    <div class="text">
      <h5 style="color: #FAE084;">Warisan Leluhur Cirebon</h5>
      <h2 style="padding: 0 10rem;">Mengenal Lebih Dekat dengan Sejarah Keraton</h2>
    </div>
  </section>
  <section id="row">
    <div class="sejarah-reverse">
      <img src="../assets/images/macanalikasepuhan.png" alt="">
      <p style="font-size: 30px;"> Kota Cirebon merupakan kota yang memiliki nilai historis yang sangat kental terutama pada masa
          kerajaan dan penyebaran agama Islam di Pulau Jawa.

          <br><br>Salah satu peninggalan pada masa
          kerajaan tersebut adalah sebuah bangunan yang hingga kini masih berdiri dengan kokoh di kota
          ini yaitu Rumah Adat Kasepuhan Cirebon.
      </p>
    </div>
    <div class="sejarah">
      <img src="../assets/images/pendopo.png" alt="">
      <div class="time">
        <p style="font-size: 30px;">Pada abad XV (-+ 1430)
          <br><br>Pangeran Cakrabuwana Putra mahkota Kerajaan Pajajaran membangun Keraton yang kemudian
            diserahkan kepada putrinya, Ratu Ayu Pakungwati. Maka Keratonnya dinamai Keraton Pakungwati
            (hingga sekarang dikenal dengan sebutan Dalem Agung Pakungwati)
        </p>
        <img src="../assets/images/timeline.png" alt="">
      </div>
    </div>
    <div class="sejarah-reverse">
      <img src="../assets/images/k1.png" alt="">
      <div class="time">
        <img src="../assets/images/timeline.png" alt="">
        <p style="font-size: 30px;">Pada abad XVI
          <br><br>Sunan Gunung Jati wafat. Kemudian Pangeran Emas Mochammad Arifin, cicit dari Sunan
            Gunung Jati,
            bertahta menggantikannya. Kemudian pada tahun Candra Sangkala Tunggal Tata Gunaning Wong atau
            1451 Saka yaitu tahun 1529 Masehi beliau mendirikan Keraton baru sebelah barat daya Dalem Agung
            Pakungwati.
        </p>
      </div>
    </div>
    <div class="sejarah">
      <img src="../assets/images/m1.png" alt="">
      <div class="time">
        <p style="font-size: 30px;">Pada -+ 1549 M
          <br><br>Masjid Agung Sang Cipta Rasa kebakaran. Ratu Ayu Pakungwati yang sudah tua itu turut memadamkan api.
            Api dapat dipadamkan, namun Ratu Ayu Pakungwati kemudian wafat. Semenjak itu, nama atau sebutan Pakungwati
            dimuliakan dan diabadikan oleh nasab Sunan Gunung Jati.
        </p>
        <img src="../assets/images/timeline.png" alt="">
      </div>
    </div>
    <div class="sejarah-reverse">
      <img src="../assets/images/n1.png" alt="">
      <div class="time">
        <img src="../assets/images/timeline.png" alt="">
        <p style="font-size: 30px;">Pada -+ 1679 M
          <br><br>Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin). Maka semenjak itu, Keraton Pakungwati
            disebut
            Keraton Kasepuhan hingga sekarang dan sultannya bergelar Sultan Sepuh. Kasepuhan artinya tempat sepuh atau
            tua. Lokasi bangunan Keraton Kasepuhan membujur dari utara ke Selatan atau menghadap ke utara, karena keraton-keraton di Jawa semuanya
            menghadap ke utara, artinya menghadap magnet dunia, artinya falsafahnya sang raja mengharapkan kekuatan.
        </p>
      </div>
    </div>
  </section>
  <bawah class="bawah"></bawah>
</template>

<script setup>
import navbar from "../components/NavBar.vue"
import bawah from "../components/FooterComp.vue"
</script>

<script>
export default {
  components: {
    navbar,
    bawah
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
.bawah{
  transform: scale(0.9);
  margin-left: -70px;
  margin-top: 50px;
}


* {
  font-family: "Raleway", sans-serif;
}
#hero {
  min-height: 90vh;
  background-image: url(../assets/images/sejarah.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
}
.text {
  text-align: center;
  color: white;
}
.sejarah-reverse {
  padding: 3.5rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  align-items: center;
}
.sejarah {
  padding: 3.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  text-align: right;
}
img {
  border-radius: 10px;
}
.time {
  display:flex;
  gap: 1rem;
}
</style>