<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <div>
    <div>
      <nav>
        <navbar :isAdmin="false" />
      </nav>
      <div>
        <q-img
          src="../assets/images/sejarah.jpg"
          alt="sejarah"
          class="col-grow"
        ></q-img>
        <div class="upper">
          {{ uppertext }}
        </div>
        <div class="upper-2">
          {{ uppertext2 }}
        </div>
      </div>
      <div class="info">
        <div class="info1">
          <p>
            Kota Cirebon merupakan kota yang memiliki nilai historis yang sangat
            kental terutama pada masa kerajaan dan penyebaran agama Islam di
            Pulau Jawa.

            <br /><br />Salah satu peninggalan pada masa kerajaan tersebut
            adalah sebuah bangunan yang hingga kini masih berdiri dengan kokoh
            di kota ini yaitu Rumah Adat Kasepuhan Cirebon.
          </p>
          <img src="../assets/images/macanalikasepuhan.png" alt="" />
        </div>
        <div class="info2">
          <img src="../assets/images/pendopo.png" class="img-keraton2" alt="" />
          <div class="info2-text">
            <div>
              <p class="between">Pada abad XV (-+ 1430)</p>
              <p>
                Pangeran Cakrabuwana Putra mahkota Kerajaan Pajajaran membangun
                Keraton yang kemudian diserahkan kepada putrinya, Ratu Ayu
                Pakungwati. Maka Keratonnya dinamai Keraton Pakungwati (hingga
                sekarang dikenal dengan sebutan Dalem Agung Pakungwati)
              </p>
            </div>
            <img src="../assets/images/timeline.png" alt="" class="time" />
          </div>
        </div>

        <div class="info3">
          <img src="../assets/images/timeline1.png" alt="" class="time1" />
          <div class="info3-text">
            <div>
              <p class="between2">Pada abad XVI</p>
              <p>
                Sunan Gunung Jati wafat. Kemudian Pangeran Emas Mochammad
                Arifin, cicit dari Sunan Gunung Jati, bertahta menggantikannya.
                Kemudian pada tahun Candra Sangkala Tunggal Tata Gunaning Wong
                atau 1451 Saka yaitu tahun 1529 Masehi beliau mendirikan Keraton
                baru sebelah barat daya Dalem Agung Pakungwati. Dan beliaupun
                bergelar Panembahan Pakungwati I.
              </p>
            </div>
          </div>
          <img src="../assets/images/k1.png" alt="" class="img-keraton3" />
        </div>
        <div class="info4">
          <img src="../assets/images/m1.png" alt="" class="img-keraton4" />
          <div class="info4-text">
            <div>
              <p class="between4">Pada -+ 1549 M</p>
              <p>
                Masjid Agung Sang Cipta Rasa kebakaran. Ratu Ayu Pakungwati yang
                sudah tua itu turut memadamkan api. Api dapat dipadamkan, namun
                Ratu Ayu Pakungwati kemudian wafat. Semenjak itu, nama atau
                sebutan Pakungwati dimuliakan dan diabadikan oleh nasab Sunan
                Gunung Jati.
              </p>
            </div>
          </div>
          <img src="../assets/images/timeline2.png" alt="" class="time" />
        </div>
        <div class="info5">
          <img src="../assets/images/timeline3.png" alt="" class="time5" />
          <div class="info5-text">
            <div>
              <p class="between5">Pada -+ 1679 M</p>
              <p>
                Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin).
                Maka semenjak itu, Keraton Pakungwati disebut Keraton Kasepuhan
                hingga sekarang dan sultannya bergelar Sultan Sepuh. Kasepuhan
                artinya tempat sepuh atau tua. Jadi, antara Kasepuhan dan
                Kanoman itu awalnya yang tua dan yang muda (kakak beradik).
                Lokasi bangunan Keraton Kasepuhan membujur dari utara ke Selatan
                atau menghadap ke utara, karena keraton-keraton di Jawa semuanya
                menghadap ke utara, artinya menghadap magnet dunia, artinya
                falsafahnya sang raja mengharapkan kekuatan.
              </p>
            </div>
          </div>
          <img src="../assets/images/n1.png" alt="" class="img-keraton5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/NavbarNew.vue";
export default {
  data() {
    return {
      uppertext: "Warisan Leluhur Cirebon",
      uppertext2: "Mengenal Lebih Dekat dengan Sejarah Keraton",
    };
  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
.button {
  width: 431px;
  height: 58px;
  border-radius: 10px;
  background-color: #123b32;
  color: #ffffff;
  text-align: left;
  padding-left: 22px;
  font-size: 20px;
  font-weight: 800;
  margin-top: 22px;
  line-height: 28px;
  font-family: "Raleway";
  border: none;
}

.textAll {
  font-family: Raleway;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #212121;
}

.upper {
  position: absolute;
  margin-top: -30vw;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  color: #daa520;
  font-size: 1.5rem;
  white-space: nowrap;
  font-family: "Raleway";
}

.upper-2 {
  position: absolute;
  margin-top: -23.5vw;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  width: 60vw;
  font-size: 3.5rem;
  text-align: center;
  font-family: "Raleway";
}

.info {
  padding-top: 10%;
  margin: 0 auto;
  width: 80%;
  font-family: "Raleway";
}

.info1 {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "Raleway";
}

.info1 p {
  font-size: 2vw;
  margin-right: 4%;
  font-weight: 400;
  color: #212121;
  width: 50%;
  font-family: "Raleway";
}

.info1 img {
  border-radius: 10px;
  width: 50%;
}

.info2,
.info3,
.info4,
.info5 {
  justify-content: center;
  display: flex;
  align-items: center;
  padding-top: 9vw;
  width: 100%;
  margin: 0 auto;
  font-family: "Raleway";
}

.info2 p,
.info3 p,
.info4 p,
.info5 p {
  font-weight: 400;
  color: #212121;
  font-family: "Raleway";
}

.info2 p,
.info4-text p {
  text-align: right;
  margin-left: 4vw;
  font-family: "Raleway";
}

.info3 p,
.info5 p {
  text-align: left;
  margin-right: 4vw;
  font-family: "Raleway";
}

.between,
.between4 {
  white-space: nowrap;
  margin-right: 2vw;
  padding-bottom: 1vw;
  font-family: "Raleway";
}

.between2,
.between5 {
  margin-top: -0.4vw;
  padding-left: 1.5vw;
}

.info2-text,
.info3-text,
.info4-text,
.info5-text {
  display: flex;
  width: 60%;
  font-size: 2vw;
}

.img-keraton2,
.img-keraton3,
.img-keraton4,
.img-keraton5 {
  border-radius: 10px;
  width: 45%;
  align-self: center;
}

.time {
  height: 30vw;
  align-self: baseline;
}

.time5 {
  height: 53vw;
  align-self: baseline;
}

.time1 {
  height: 34vw;
  align-self: baseline;
}

.logo {
  font-size: 1.6vw;
  font-weight: 400;
  display: flex;
  margin-left: 1vw;
}

.logo img {
  height: 7vw;
  margin-right: 1vw;
}

li a {
  font-size: 1.4vw;
}

li {
  margin-bottom: 0.6vw !important;
}

ul {
  margin-top: 1vw;
  line-height: 2vw;
}

h4 {
  font-size: 2.3vw;
  line-height: 2.8vw;
}

.footer-col {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20vw;
  margin-top: 4vw;
}

.footer-col-1 {
  width: 16vw;
  padding: 1.5vw;
  box-sizing: border-box;
}

.footer-col-2,
.footer-col-3 {
  width: 12vw;
  padding: 1.5vw;
  box-sizing: border-box;
}

.footer-col-4 {
  margin-left: 6vw;
  padding: 1.5vw;
  box-sizing: border-box;
  width: 40vw;
}

.footer-col h3 {
  margin-bottom: 20px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  text-decoration: none;
  color: #333;
}

.button {
  margin-top: 2vw;
  height: 5vw;
  width: 100%;
  padding-left: 1vw;
  background-color: #123b32;
  color: #fff;
  text-align: left;
  border: none;
  cursor: pointer;
  font-size: 1.5vw;
  border-radius: 1vw;
}

.footer {
  width: 90%;
  margin: 0 auto;
  padding-top: 10vw;
}

.adress {
  width: 18vw;
  font-size: 1.6vw;
  font-weight: 400;
  padding: 1.5vw;
}

.susun p {
  font-size: 1.5vw;
}
.lower {
  display: flex;
  width: 100%;
  padding-bottom: 4vw;
}
.inlower {
  width: 50vw;
}
.inlower p {
  margin-top: 10vw;
  font-size: 1.3vw;
  padding-left: 1.5vw;
}
.susun {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  float: right;
  width: fit-content;
  padding-right: 4vw;
}

.foto1,
.foto2,
.foto3 {
  height: 5vw;
  width: 5vw;
}

.foto4 {
  height: 7vw;
  width: 7vw;
  margin-top: -1vw;
}
.collab {
  display: flex;
  flex-direction: row;
  gap: 4vw;
  width: 40vw;
  justify-content: center;
}

@media screen and (max-width: 1200px) {
  .upper {
    position: absolute;
    margin-top: -38vw;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    color: #daa520;
    font-size: 1rem;
    white-space: nowrap;
    font-family: "Raleway";
  }

  .upper-2 {
    position: absolute;
    margin-top: -23.5vw;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    width: 60vw;
    font-size: 1.5rem;
    text-align: center;
    font-family: "Raleway";
  }
}
</style>
