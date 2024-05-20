<template>
  <navbar isWhiteText />
  <section
    id="hero"
    :style="{
      'min-height': '100vh',
      'background': `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${sectionimg})`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center',
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
    }"
  >
    <div class="texthero">

      <h5 style="color: #fae084">{{ sectionName }}</h5>
      <h2 style="padding: 0 10rem">
        {{ sectionData?.xs1?.data }}
      </h2>
      <a :href="sectionData?.xl1?.data" v-mod class="btn1">
        <img class="btn1" src="../assets/images/btn1.png" />
      </a>
    </div>
  </section>

  <section
    class="sec-home"
    id="section2"
     :style="{
    'background-image': `linear-gradient(transparent, #fff9a0, #ffe96e),url(${sectionimg1})`,
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
  }"
  >
    <div class="container">
      <div class="hero">
        <p class="aboutText">{{ sectionName1 }}</p>
        <h2 class="ksc2Text">{{ sectionData1?.xs1?.data }}</h2>
        <p class="sej1Text" style="margin-top: 50px">
          {{ sectionData1?.xs2?.data }}
        </p>
      </div>
    </div>
  </section>

  <section class="sec-home" 
  id="section3"
  :style="{
    'background': `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(../assets/images/Frame.png);`,
  'background-size': 'cover;',
}"
  >
    <div class="container">
      <div class="text">
        <a :href="sectionData2?.xl1.data">
          <img src="../assets/images/Frame.png" />
        </a>
      </div>
    </div>
  </section>

  <section class="sec-home" id="section4"
  :style="{
    'background-image': `url(${sectionimg3})`,
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
  }"
  >
    <div class="container">
      <div class="text">
        <p class="sej2Text">{{ sectionName3 }}</p>
        <h2 class="ksc4Text">{{ sectionData3?.xs1.data }}</h2>
      </div>

      <div class="card1">
        <a href="https://your-link-here.com">
          <img :src="sectionData3?.xi1.data" alt="sejarah1" />
        </a>
      </div>

      <div class="card2">
        <a href="https://your-link-here.com">
          <img :src="sectionData3?.xi2.data" alt="sejarah2" />
        </a>
      </div>

      <div class="card3">
        <a href="https://your-link-here.com">
          <img :src="sectionData3?.xi3.data" alt="sejarah3" />
          <div class="caption">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 17V26C24 26.5304 23.7893 27.0391 23.4142 27.4142C23.0391 27.7893 22.5304 28 22 28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H15C15.2652 8 15.5196 8.10536 15.7071 8.29289C15.8946 8.48043 16 8.73478 16 9C16 9.26522 15.8946 9.51957 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10H6V26H22V17C22 16.7348 22.1054 16.4804 22.2929 16.2929C22.4804 16.1054 22.7348 16 23 16C23.2652 16 23.5196 16.1054 23.7071 16.2929C23.8946 16.4804 24 16.7348 24 17ZM28 5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4H19C18.8021 3.99984 18.6086 4.05841 18.444 4.16828C18.2794 4.27815 18.1511 4.43439 18.0754 4.61721C17.9996 4.80003 17.9798 5.00122 18.0185 5.19531C18.0571 5.38939 18.1525 5.56764 18.2925 5.7075L21.5863 9L16.2925 14.2925C16.1049 14.4801 15.9994 14.7346 15.9994 15C15.9994 15.2654 16.1049 15.5199 16.2925 15.7075C16.4801 15.8951 16.7346 16.0006 17 16.0006C17.2654 16.0006 17.5199 15.8951 17.7075 15.7075L23 10.4138L26.2925 13.7075C26.4324 13.8475 26.6106 13.9429 26.8047 13.9815C26.9988 14.0202 27.2 14.0004 27.3828 13.9246C27.5656 13.8489 27.7218 13.7206 27.8317 13.556C27.9416 13.3914 28.0002 13.1979 28 13V5Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
      </div>

      <a :href="sectionData3?.xl1.data">
        <img class="pls" src="../assets/images/btninfo.png"
      /></a>
    </div>
  </section>

  <section
    id="section5"
    :style="{
      'background-image': `url(${currentBackground})`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'transition': 'background-image 0.5s ease-in-out'
    }"
  >
    <div class="container">
      <div class="text">
        <p class="eventText">{{ sectionName4 }}</p>
        <p class="ksc5Text">{{ sectionData4?.xs1.data }}</p>
      </div>
      <div class="container-card">
        <div
          class="card4"
          :class="{ active: activeCard === 'card4' }"
          :style="{
            'background-image': `url(${sectionData4?.xi1.data})`,
            'background-size': 'cover',
            'border-radius': '20px',
            'background-color': '#b6b6b6'
          }"
          @click="setActiveCard('card4', sectionData4?.xi1.data)"
        >
          <div class="overlay"></div>
          <a href="#">
            <p class="title5" style="filter: brightness(200%)">
              Tadarus di Langgar Anggit
            </p>
          </a>
        </div>
        <div
          class="card5"
          :class="{ active: activeCard === 'card5' }"
          :style="{
            'background-image': `url(${sectionData4?.xi2.data})`,
            'background-size': 'cover',
            'border-radius': '20px',
            'background-color': '#b6b6b6'
          }"
          @click="setActiveCard('card5', sectionData4?.xi2.data)"
        >
          <a href="#">
            <p class="title5">Jamasan Kerisa dan Tombak</p>
          </a>
        </div>
        <div
          class="card6"
          :class="{ active: activeCard === 'card6' }"
          :style="{
            'background-image': `url(${sectionData4?.xi3.data})`,
            'background-size': 'cover',
            'border-radius': '20px',
            'background-color': '#b6b6b6'
          }"
          @click="setActiveCard('card6', sectionData4?.xi3.data)"
        >
          <a href="#">
            <p class="title6">Siraman Panjat Jimat</p>
          </a>
        </div>
      </div>
      <p class="sec5Text">
        Hingga saat ini, Keraton Kasepuhan Cirebon tetap mempertahankan keaslian
        dan tradisi turun menurun dengan rutin melaksanakan upacara adat tradisi
        mereka.
      </p>
      <a :href="sectionData4?.xl1.data">
        <img class="btnViewMore" src="../assets/images/btninfo.png" />
      </a>
    </div>
  </section>

  <section class="slider" id="slider">
    <h1 class="berita">Berita Terkini</h1>
    <div class="slides" :style="{ transform: `translateX(${currentSlideIndex * -300 / slides.length}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <div class="news-section">
          <div class="news-image">
            <img :src="slide.imageUrl" :alt="`Berita ${index + 1}`">
          </div>
          <div class="news-content">
            <h2 class="news-title">{{ slide.title }}</h2>
          </div>
        </div>
      </div>
    </div>
    <img class="newsbtn" src="../assets/images/btninfo.png" />
  </section>


  
  <section class="sec-home" id="section6"
  :style="{
    'background-image': `url(${sectionimg1})`,
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
  }">
    <div class="container">
      <div class="text">
        <p class="owText">{{ sectionName5 }}</p>
        <p class="ksc6Text">{{ sectionData5?.xs1.data }}</p>
      </div>
      <div class="tiket">
        <div class="text2">
          <p class="sej3Text">
            {{ sectionData5?.xs2.data }}
          </p>
          <a :href="sectionData5?.xl1.data">
            <img class="btn2" src="../assets/images/tiket.png" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-home" id="section7">
    <div class="container">
      <div class="text">
        <p class="faqText">{{ sectionName6 }}</p>
        <h2 class="tanyaText">{{ sectionData6?.xs1.data }}</h2>
      </div>
      <div class="faq">
        <div
          style="border-bottom: 1px solid black"
          v-for="(faq, index) in faqs"
          :key="index"
        >
          <button class="accordion" @click="toggleAccordion(index)">
            <span class="nomor">{{ faq.nomor }}</span> {{ faq.pertanyaan }}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ active: faq.active }"
            >
              <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 14.7075L16.7075 19.7075C16.6146 19.8005 16.5043 19.8742 16.3829 19.9246C16.2615 19.9749 16.1314 20.0008 16 20.0008C15.8686 20.0008 15.7385 19.9749 15.6171 19.9246C15.4957 19.8742 15.3854 19.8005 15.2925 19.7075L10.2925 14.7075C10.1049 14.5199 9.99945 14.2654 9.99945 14C9.99945 13.7346 10.1049 13.4801 10.2925 13.2925C10.4801 13.1049 10.7346 12.9994 11 12.9994C11.2654 12.9994 11.5199 13.1049 11.7075 13.2925L16 17.5863L20.2925 13.2925C20.3854 13.1996 20.4957 13.1259 20.6171 13.0756C20.7385 13.0253 20.8686 12.9994 21 12.9994C21.1314 12.9994 21.2615 13.0253 21.3829 13.0756C21.5043 13.1259 21.6146 13.1996 21.7075 13.2925C21.8004 13.3854 21.8741 13.4957 21.9244 13.6171C21.9747 13.7385 22.0006 13.8686 22.0006 14C22.0006 14.1314 21.9747 14.2615 21.9244 14.3829C21.8741 14.5043 21.8004 14.6146 21.7075 14.7075Z"
                fill="#D9A520"
              />
            </svg></button
          ><svg
            width="1064"
            height="1"
            viewBox="0 0 1064 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <div class="panel" v-show="faq.active">
            <p class="jawaban">{{ faq.jawaban }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-home" id="section8">
    <bawah class="footer"></bawah>
  </section>
</template>

<script setup>
import navbar from "../components/NavBar.vue";
import bawah from "../components/FooterComp.vue";
import socket from "src/socket";
import { ref, onMounted, onBeforeUnmount } from "vue";
</script>

<script>
export default {
  components: {
    navbar,
    bawah,
  },
  data() {
    return {
      sectionData: ref(),
      linkYoutube: ref(),
      title1: ref(""),
      subTitle1: ref(""),
      title2: ref(""),
      subTitle2: ref(""),
      backgroundImageUrl1: ref(),
      backgroundImageUrl2: ref(),
      faqs: [
        {
          nomor: "01",
          pertanyaan: "Bagaimana cara saya memesan tiket melalui website?",
          jawaban: "Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.",
          active: false,
        },
        {
          nomor: "02",
          pertanyaan: "Bagaimana cara saya memesan tiket melalui website?",
          jawaban: "Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.",
          active: false,
        },
        {
          nomor: "03",
          pertanyaan: "Bagaimana cara saya memesan tiket melalui website?",
          jawaban: "Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.",
          active: false,
        },
        {
          nomor: "04",
          pertanyaan: "Bagaimana cara saya memesan tiket melalui website?",
          jawaban: "Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.",
          active: false,
        },
        {
          nomor: "05",
          pertanyaan: "Bagaimana cara saya memesan tiket melalui website?",
          jawaban: "Anda bisa pergi ke halaman tiket dan mulai memilih pilihan tiket yang anda inginkan.",
          active: false,
        },
      ],
      activeCard: null,
      currentBackground: null,
      slides: [
        {
          imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hjn2w4fqaggmdagd299n5v6y.jpg',
          title: 'Sejarah Keraton Kasepuhan Cirebon beserta Peninggalannya yang Bernilai Tinggi',
          summary: 'Ringkasan singkat dari berita pertama. Ini adalah contoh ringkasan yang memberikan gambaran umum tentang isi berita.'
        },
        {
          imageUrl: 'https://img.antaranews.com/cache/1200x800/2024/03/11/IMG_20240311_180817.jpg.webp',
          title: 'Tandai awal Ramadhan, Keraton Kasepuhan Cirebon gelar "Dlugdag"',
          summary: 'Ringkasan singkat dari berita kedua. Ini adalah contoh ringkasan yang memberikan gambaran umum tentang isi berita.'
        },
        {
          imageUrl: 'https://akcdn.detik.net.id/community/media/visual/2023/11/13/rombongan-pengunjung-keraton-kasepuhan-cirebon_169.jpeg?w=700&q=90',
          title: 'Belajar Sejarah di Keraton Kasepuhan Cirebon, Ini Harga Tiketnya',
          summary: 'Ringkasan singkat dari berita ketiga. Ini adalah contoh ringkasan yang memberikan gambaran umum tentang isi berita.'
        }
      ],
      currentSlideIndex: 0,
      sliderInterval: null
    };
  },
  mounted() {
    this.fetchData();
    this.socket();
    this.startSlider();
  },
  beforeUnmount() {
    socket.disconnect();
    clearInterval(this.sliderInterval);
  },
  methods: {
    socket() {
      socket.connect();
      socket.on("dashboard", () => {
        this.fetchData();
      });
    },
    async fetchData() {
      let rawSection = {};
      try {
        const response = await this.$api.get("page/content/1");
        const dataRest = response.data.data[0];
        console.log(dataRest.contents[3]);

        // Section data assignments
        this.sectionimg = dataRest.contents[0]?.context?.xi1?.data;
        this.sectionData = dataRest.contents[0].context;
        this.sectionName = dataRest.contents[0].sectionName;

        this.sectionimg1 = dataRest.contents[1]?.context?.xi1?.data;
        this.sectionName1 = dataRest.contents[1].sectionName;
        this.sectionData1 = dataRest.contents[1].context;

        this.sectionName2 = dataRest.contents[2].sectionName;
        this.sectionimg2 = dataRest.contents[2]?.context?.xi1?.data;

        this.sectionName3 = dataRest.contents[3].sectionName;
        this.sectionData3 = dataRest.contents[3].context;

        this.sectionName4 = dataRest.contents[4].sectionName;
        this.sectionimg4 = dataRest.contents[4].context?.xi1?.data;
        this.sectionData4 = dataRest.contents[4].context;

        this.sectionName5 = dataRest.contents[5].sectionName;
        this.sectionData5 = dataRest.contents[5].context;

        this.sectionName6 = dataRest.contents[6].sectionName;
        this.sectionData6 = dataRest.contents[6].context;

        this.currentBackground = this.sectionimg4;

      } catch (err) {
        console.log(err);
      }
    },
    startSlider() {
      this.sliderInterval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
    },
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }
};
</script>




<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

/* #hero {
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/images/bg1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
.texthero {
  text-align: center;
  color: white;
}

/* #section1 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/images/bg1.png");
  background-size: cover;
  margin-top: -110px;
  z-index: -999;
} */

#section2 .container {
  background-image: linear-gradient(transparent, #fff9a0, #ffe96e);
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
}

#section3 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url("../assets/images/keraton2.png");
  background-size: cover;
}

#section4 .container {
  background-image: url("../assets/images/batik.png");
}

#section5 .container {
  /* background-image: url("../assets/images/keraton2.png"); */
  height: 130vh;
  /* height: 1000px; */
  background-size: cover;
  background-position: center
}

#section5 .container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
}

#section5 .container .text {
  position: absolute;
  margin-top: 12rem;
}

#section6 .container {
  background-image: url("../assets/images/batik.png");
}

#section7 .container {
  background-image: url("../assets/images/batik.png");
  display: fixed;
}

#section8 .container {
  background-image: url("../assets/images/batik.png");
}

#slider {
  color: #000000;
  height: 85vh;
  padding-top: 5rem;
}

.slider {
  position: relative;
  margin: auto;
  overflow: hidden;
  background-image: url("../assets/images/batik.png"), linear-gradient(0deg, #fff9a021, #ffe96e);
  background-size: cover;
  background-position: center;
}

.slider h2 {
  text-align: left;
  margin-bottom: 20px;
  margin-bottom: 75px;
  font-weight: 300;
  font-family: 'Raleway';
  font-size: 40px;
}

.slides {
  display: flex;
  transition: transform 0.9s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.news-section {
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 2rem;
}

.news-image {
  flex: 1;
  padding-right: 20px;
}

.news-image img {
  width: 550px;
  height: 360px;
  object-fit: cover;
  border-radius: 10px;
}

.news-content {
  flex: 2;
  padding-left: 20px;
}

.news-title {
  text-align: left;
  width: 700px;
  font-weight: 500;
}

.news-summary {
  font-size: 16px;
  color: #555;
}

.berita{
  font-family: "Inria Serif";
  text-align: Center;
  font-size: 60px;
  font-weight: 600;
  margin-top: -5rem;
}

        @keyframes slide{
          0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(33.3333%);
  }
  75% {
    transform: translateX(33.3333%);
  }
  100% {
    transform: translateX(66.6667%);
  }

        }

  .newsbtn {
  padding: 5px;
  gap: 10px;
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
  margin-left: 42vw;
}

.newsbtn:hover {
  filter: brightness(70%);
}

.container {
  background-size: cover;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 120vh;
  flex-direction: column;
  background-position: center;
  color: white;
  font-family: Raleway, sans-serif;
}

/* .wlcText {
  font-size: 24px;
  color: #fffd8c;
  position: absolute;
  left: 41vw;
  top: 22vw;
  padding: 1rem;
}

.wlcText2 {
  position: relative;
  font-size: 64px;
  top: 2vw;
} */

.btn1 {
  top: 65%;
  left: 49, 5%;
  position: absolute;
}

.btn1:hover {
  filter: brightness(70%);
}

.aboutText {
  position: absolute;
  text-align: center;
  font-size: 25px;
  font-family: "Inria Serif";
  color: #daa520;
  top: 25%;
  left: 46%;
}

.ksc2Text {
  text-align: center;
  position: absolute;
  top: 29%;
  color: #212121;
  font-family: "Inria Serif", Bold;
  font-size: 40px;
  width: 31%;
  left: 34%;
  font-weight: 700;
}

.sej1Text {
  text-align: center;
  position: absolute;
  top: 43%;
  font-family: "Raleway";
  width: 33%;
  left: 34%;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
}

.sej2Text {
  position: absolute;
  left: 46%;
  top: 8%;
  font-family: "Inria Serif";
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #d9a520;
}

.ksc4Text {
  position: absolute;
  width: 30%;
  height: 96px;
  left: 35%;
  top: 13%;
  font-family: "Inria Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;

  color: #212121;
}

.owText {
  font-size: 25px;
  font-family: "Inria Serif";
  color: #daa520;
  position: absolute;
  width: 35%;
  left: 32%;
  top: 12%;
  line-height: 30px;
}

.ksc6Text {
  position: absolute;
  width: 33%;
  left: 33%;
  top: 15%;
  font-family: "Inria Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #212121;
}

.sej3Text {
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  text-align: left;
}

.btn2 {
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 5px;
  gap: 10px;
  position: absolute;
  top: 150px;
  left: -5px;
}

.btn2:hover {
  filter: brightness(70%);
}

.card1:hover img,
.card2:hover img,
.card3:hover img {
  filter: brightness(70%);
  transform: scale(1.15);
}

.card1 img {
  position: absolute;
  width: 25%;
  height: 45%;
  left: 5%;
  top: 35%;
  border-radius: 50px;
  transform: 0.2s all ease;
  transform: 0.2s all ease;
}

.card2 img {
  position: absolute;
  width: 25%;
  height: 45%;
  left: 37.9%;
  top: 35%;
  border-radius: 50px;
  transform: 0.2s all ease;
}

.card3 img {
  position: absolute;
  width: 25%;
  height: 45%;
  left: 70%;
  top: 35%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  border-radius: 50px;
  transform: 0.2s all ease;
}

.title3 {
  text-align: left;
  position: absolute;
  width: 199px;
  left: 72%;
  /* bottom: 60%; */
  top: 670px;
  /* margin-top: 248px; */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  z-index: 1;
}

.caption svg {
  position: absolute;
  left: 91%;
  top: 693px;
}

.pls {
  position: absolute;
  top: 89%;
  left: 42%;
}

.pls:hover {
  filter: brightness(70%);
}

.tiket {
  background: linear-gradient(
    90deg,
    rgba(218, 165, 32, 0.5) 0%,
    rgba(18, 59, 50, 0.5) 100%
  );
  width: 100%;
  height: 45%;
  position: relative;
  margin-top: 158px;
}

.text2 {
  position: absolute;
  font-family: "Raleway";
  font-style: normal;
  width: 557px;
  height: 112px;
  left: 93px;
  top: 80px;
  justify-content: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}

.eventText {
  position: absolute;
  text-align: center;
  top: -450px;
  right: -35px;
  font-family: "Inria Serif";
  font-size: 25px;
  color: #fae084;
}

.ksc5Text {
  position: absolute;
  text-align: center;
  width: 485px;
  top: -420px;
  left: -236px;
  font-family: "Inria Serif";
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
}

.container-hover-card {
  display: flex;
}

/* .card4 img {
  position: absolute;
  width: 18%;
  height: 41%;
  left: 14%;
  top: 29%;
  filter: brightness(70%);
  border-radius: 10px;
  flex: 1;
}

.card5 img {
  position: absolute;
  width: 270px;
  height: 427px;
  left: 40%;
  top: 29%;
  border-radius: 10px;
  flex: 1;
}

.card6 img {
  position: absolute;
  width: 18%;
  height: 41%;
  left: 65%;
  top: 29%;
  border-radius: 10px;
  flex: 1;
}
.card4 img 
.card5 img 
.card6 img{
  flex: 2;
  background-color: rgb(207,207,207); 
} */
.container-card {
  position: absolute;
  display: flex;
  margin-top: 50px;
  gap: 16.1px;
  width: 1200px;
  align-items: center;
  justify-content: center;
  height: 427px;
}
.card4 {
  position: relative;
  height: 427px;
  width: 273.21px;
  flex: 1;
  transition: 0.3s all ease;
}
.card5 {
  background-size: cover;
  position: relative;
  border-radius: 20px;
  margin-left: 10px;
  height: 427px;
  width: 273px;
  background-color: #b6b6b6;
  flex: 1;
  transition: 0.3s all ease;
}
.card6 {
  background-size: cover;
  position: relative;
  border-radius: 20px;
  margin-left: 10px;
  height: 427px;
  width: 273px;
  background-color: #b6b6b6;
  flex: 1;
  transition: 0.3s all ease;
}
.card4:hover,
.card5:hover,
.card6:hover {
  flex: 200px;
}
.card4.active, .card5.active, .card6.active {
  flex: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.title4 {
  position: absolute;
  bottom: 8%;
  left: 26px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: #ffffff;
  transform: translateY(-50%);
  text-align: left;
  filter: brightness(150%);
}

.subtitle4 {
  position: absolute;
  bottom: 10px;
  left: 26px;
  right: 26px;
  width: calc(100% - 26px);
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.3
  ); /* Adjust the opacity (0.3) to your preference */
  z-index: 1;
  border-radius: 20px;
}

.title5 {
  position: absolute;
  bottom: 10px; /* Geser ke bawah sejauh 10px dari tepi kartu */
  left: 26px; /* Geser ke kiri sejauh 10px dari tepi kartu */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
  text-align: left; /* Teks diatur menjadi rata kiri */
  z-index: 2;
}

.title6 {
  position: absolute;
  bottom: 10px; /* Geser ke bawah sejauh 10px dari tepi kartu */
  left: 26px; /* Geser ke kiri sejauh 10px dari tepi kartu */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
  text-align: left; /* Teks diatur menjadi rata kiri */
}

.sec5Text {
  position: absolute;
  text-align: center;
  width: 50%;
  height: 10%;
  margin-top: 700px;
  font-family: "Raleway";
  font-size: 20px;
  color: #ffffff;
}

.btnViewMore {
  padding: 5px;
  gap: 10px;
  position: relative;
  margin-top: 53rem;
}

.btnViewMore:hover {
  filter: brightness(70%);
}

.faqText {
  position: absolute;
  font-family: "Inria Serif";
  font-size: 25px;
  top: 2vw;
  text-align: center;
  color: #d9a520;
}

.tanyaText {
  position: absolute;
  font-family: "Inria Serif";
  font-style: normal;
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  color: #212121;
  top: 5vw;
  left: 39vw;
}

.faq {
  position: relative;
  top: 1vw;
}

.accordion {
  margin-top: 1rem;
  display: block;
  background-color: transparent;
  border: 0px;
  font-family: "Raleway";
  font-size: 25px;
  color: #212121;
}

.accordion .nomor {
  margin-right: 5px;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  color: #212121;
}

.accordion svg {
  position: absolute;
  left: 1000px;
}

.accordion svg.active {
  transform: rotate(180deg);
}

.jawaban {
  color: black;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
}

.header img {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 140px;
}

.headerText {
  position: absolute;
  text-align: left;
  width: 139px;
  height: 84px;
  left: 165px;
  top: 130px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
}

li a {
  color: black;
  text-decoration: none;
}

.qlText {
  position: absolute;
  left: 88px;
  top: 293px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #212121;
}

.socText {
  position: absolute;
  width: 99px;
  height: 40px;
  left: 307px;
  top: 293px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #212121;
}

.compText {
  position: absolute;
  width: 135px;
  height: 40px;
  left: 466px;
  top: 293px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #212121;
}

.quickLinks {
  position: absolute;
  width: 159px;
  height: 196px;
  left: 88px;
  top: 345px;
  text-align: left;
}

ul li {
  margin-bottom: 10px;
}

.social {
  position: absolute;
  width: 99px;
  height: 196px;
  left: 318px;
  top: 345px;
  text-align: left;
}

.company {
  position: absolute;
  width: 135px;
  height: 157px;
  left: 433px;
  top: 345px;
}

.subscribe {
  position: absolute;
  width: 434px;
  height: 80px;
  left: 740px;
  top: 293px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  text-align: left;
  color: #212121;
}

input {
  position: absolute;
  width: 431px;
  height: 58px;
  left: 740px;
  top: 380px;
  background: #123b32;
  border-radius: 10px;
  border: 0px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  padding-left: 10px;
}

input::placeholder {
  color: white;
}

.alamat {
  position: absolute;
  width: 184px;
  height: 84px;
  left: 88px;
  top: 551px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  color: #212121;
}

.wm {
  position: absolute;
  width: 264px;
  height: 24px;
  left: 88px;
  top: 725px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
}

.collab {
  position: absolute;
  width: 143px;
  height: 24px;
  left: 886px;
  top: 625px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
}

.footer{
  background-image: url(../assets/images/batik.png);
  margin-top: -10px;
}

@media screen and (max-width: 600px) {
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

  #section1 .container {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("../assets/images/bg1.png");
    background-size: cover;
  }

  #section2 .container {
    background-image: url("../assets/images/batik.png"),
      linear-gradient(transparent, #fff9a0, #ffe96e);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }

  #section3 .container {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("../assets/images/keraton1.jpg");
    background-size: cover;
  }

  #section4 .container {
    background-image: url("../assets/images/batik.png");
  }

  #section5 .container {
    position: relative;
    background-image: url("../assets/images/keraton2.png");
    background-size: cover;
  }

  /* #section5 .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
  } */

  #section5 .container > .text {
    position: relative;
    /* z-index: 1; */
    margin-bottom: -2rem;
  }

  #section6 .container {
    background-image: url("../assets/images/batik.png");
  }

  #section7 .container {
    background-image: url("../assets/images/batik.png");
    display: fixed;
  }

  #section8 .container {
    background-image: url("../assets/images/batik.png");
  }

  .container {
    background-size: cover;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 120vh;
    flex-direction: column;
    background-position: center;
    color: white;
    font-family: Raleway, sans-serif;
  }

  .wlcText {
    font-size: 24px;
    color: #fffd8c;
    position: absolute;
    left: 81px;
    width: 228px;
    top: 313px;
    height: 28px;
    justify-content: center;
  }

  .wlcText2 {
    position: relative;
    font-size: 32px;
    top: 34.3px;
    height: 120px;
    width: 328px;
  }

  .btn1 {
    top: 65%;
    left: 45%;
    position: absolute;
  }

  .btn1:hover {
    filter: brightness(70%);
  }

  .aboutText {
    position: absolute;
    text-align: center;
    font-size: 25px;
    font-family: "Inria Serif";
    color: #daa520;
    top: 25%;
    left: 38%;
  }

  .ksc2Text {
    text-align: center;
    position: absolute;
    top: 30%;
    color: #212121;
    font-family: "Inria Serif", Bold;
    font-size: 30px;
    width: 328px;
    left: 5.5%;
    font-weight: 700;
  }

  .sej1Text {
    text-align: center;
    position: absolute;
    top: 40%;
    font-family: "Raleway";
    width: 390px;
    left: -3%;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #212121;
  }

  .sej2Text {
    position: absolute;
    left: 39%;
    top: 8%;
    font-family: "Inria Serif";
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #d9a520;
  }

  .ksc4Text {
    position: absolute;
    width: 100%;
    height: 96px;
    left: 0%;
    top: 13%;
    font-family: "Inria Serif";
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 48px;
    text-align: center;

    color: #212121;
  }

  .owText {
    font-size: 25px;
    font-family: "Inria Serif";
    color: #daa520;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 10%;
    line-height: 30px;
  }

  .ksc6Text {
    position: absolute;
    width: 100%;
    left: 0%;
    top: 15%;
    font-family: "Inria Serif";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    color: #212121;
  }

  .sej3Text {
    position: absolute;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    text-align: left;
  }

  .btn2 {
    display: flex;
    flex-direction: row;
    align-items: left;
    padding: 5px;
    gap: 10px;
    position: absolute;
    top: 150px;
    left: -5px;
  }

  .btn2:hover {
    filter: brightness(70%);
  }

  .card1:hover img,
  .card2:hover img,
  .card3:hover img {
    filter: brightness(70%);
  }

  .card1 img {
    position: absolute;
    width: 25%;
    height: 45%;
    left: 5%;
    top: 35%;
    border-radius: 50px;
  }

  .card2 img {
    position: absolute;
    width: 31%;
    height: 51%;
    left: 35%;
    top: 32%;
    border-radius: 50px;
  }

  .card3 img {
    position: absolute;
    width: 25%;
    height: 45%;
    left: 71%;
    top: 35%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    border-radius: 50px;
  }

  .title3 {
    text-align: left;
    position: absolute;
    width: 199px;
    left: 30%;
    top: 500px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    z-index: 1;
  }

  .caption svg {
    position: absolute;
    left: 91%;
    top: 505px;
  }

  .pls {
    position: absolute;
    top: 89%;
    left: 22%;
  }

  .pls:hover {
    filter: brightness(70%);
  }

  .tiket {
    background: linear-gradient(
      90deg,
      rgba(218, 165, 32, 0.5) 0%,
      rgba(18, 59, 50, 0.5) 100%
    );
    width: 100%;
    height: 45%;
    position: relative;
    margin-top: 158px;
  }

  .text2 {
    position: absolute;
    font-family: "Raleway";
    font-style: normal;
    width: 557px;
    height: 112px;
    left: 93px;
    top: 80px;
    justify-content: left;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
  }

  .eventText {
    position: absolute;
    text-align: center;
    top: -350px;
    left: -35px;
    font-family: "Inria Serif";
    font-size: 25px;
    color: #fae084;
  }

  .ksc5Text {
    position: absolute;
    text-align: center;
    width: 328px;
    top: -320px;
    left: -170px;
    font-family: "Inria Serif";
    font-size: 30px;
    line-height: 48px;
    color: #ffffff;
  }
  /* 
.card4 img {
  position: absolute;
  width: 26%;
  height: 41%;
  left: 14%;
  top: 29%;
  filter: brightness(70%);
  border-radius: 10px;
}

  .card5 img {
    position: absolute;
    width: 18%;
    height: 41%;
    left: 43%;
    top: 29%;
    border-radius: 10px;
  }

  .card6 img {
    position: absolute;
    width: 18%;
    height: 41%;
    left: 65%;
    top: 29%;
    border-radius: 10px;
  }

  .title4 {
    position: absolute;
    width: 40%;
    left: 6%;
    top: 30%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
  }

  .subtitle4 {
    position: absolute;
    text-align: left;
    width: 328px;
    left: 16%;
    top: 61%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }

  .title5 {
    position: absolute;
    width: 15%;
    height: 10%;
    left: 44%;
    top: 20%;
    text-align: left;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
  }

  .title6 {
    text-align: left;
    position: absolute;
    width: 15%;
    height: 10%;
    left: 66%;
    top: 30%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
  }

  .sec5Text {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 73%;
    font-family: "Raleway";
    font-size: 16px;
    color: #ffffff;
  }

.btnViewMore {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  gap: 10px;
  position: absolute;
  width: 62%;
  height: 8%;
  left: 21%;
  top: 85%;
} */
  .container-card {
    position: absolute;
    display: flex;
    margin-top: 50px;
    gap: 16.1px;
    width: 1200px;
    align-items: center;
    justify-content: center;
    height: 427px;
  }
  .card4 {
    background-image: url("../assets/images/card4.png");
    background-size: cover;
    position: relative;
    border-radius: 20px;
    margin-left: 10px;
    height: 427px;
    width: 273.21px;
    background-color: #b6b6b6;
    flex: 1;
    transition: 0.3s all ease;
    /* filter: brightness(70%); */
  }
  .card5 {
    background-image: url("../assets/images/card5.png");
    background-size: cover;
    position: relative;
    border-radius: 20px;
    margin-left: 10px;
    height: 427px;
    width: 273px;
    background-color: #b6b6b6;
    flex: 1;
    transition: 0.3s all ease;
  }
  .card6 {
    background-image: url("../assets/images/card6.png");
    background-size: cover;
    position: relative;
    border-radius: 20px;
    margin-left: 10px;
    height: 427px;
    width: 273px;
    background-color: #b6b6b6;
    flex: 1;
    transition: 0.3s all ease;
  }
  .card4:hover,
  .card5:hover,
  .card6:hover {
    flex: 200px;
  }

  .title4 {
    position: absolute;
    bottom: 8%;
    left: 26px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
    transform: translateY(-50%);
    text-align: left;
    filter: brightness(150%);
  }

  .subtitle4 {
    position: absolute;
    bottom: 10px;
    left: 26px;
    right: 26px;
    width: calc(100% - 26px);
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
  }

  .title5 {
    position: absolute;
    bottom: 10px; /* Geser ke bawah sejauh 10px dari tepi kartu */
    left: 26px; /* Geser ke kiri sejauh 10px dari tepi kartu */
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
    text-align: left; /* Teks diatur menjadi rata kiri */
  }

  .title6 {
    position: absolute;
    bottom: 10px; /* Geser ke bawah sejauh 10px dari tepi kartu */
    left: 26px; /* Geser ke kiri sejauh 10px dari tepi kartu */
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
    text-align: left; /* Teks diatur menjadi rata kiri */
  }

  .sec5Text {
    position: absolute;
    text-align: center;
    width: 50%;
    height: 10%;
    top: 78%;
    font-family: "Raleway";
    font-size: 20px;
    color: #ffffff;
  }

  .btnViewMore {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    gap: 10px;
    position: absolute;
    width: 15%;
    height: 7%;
    left: 43%;
    margin-top: 380px;
  }
  .btnViewMore:hover {
    filter: brightness(70%);
  }

  .faqText {
    position: absolute;
    font-family: "Inria Serif";
    font-size: 25px;
    top: 2vw;
    text-align: center;
    color: #d9a520;
  }

  .tanyaText {
    position: absolute;
    width: 21%;
    font-family: "Inria Serif";
    font-style: normal;
    font-size: 25px;
    text-align: center;
    font-weight: 700;
    color: #212121;
    top: 5vw;
    left: 41vw;
  }

  .faq {
    position: relative;
    top: 1vw;
  }

  .accordion {
    display: block;
    background-color: transparent;
    border: 0px;
    border-bottom: 1px, black;
    font-family: "Raleway";
    font-size: 25px;
    color: #212121;
    margin-bottom: 20px;
  }

  .accordion .nomor {
    margin-right: 5px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    color: #212121;
  }

  .accordion svg {
    position: absolute;
    left: 1000px;
  }

  .accordion svg.active {
    transform: rotate(180deg);
  }

  .jawaban {
    color: black;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .header img {
    position: absolute;
    width: 68px;
    height: 70.62px;
    left: 88px;
    top: 140px;
  }

  .headerText {
    position: absolute;
    text-align: left;
    width: 139px;
    height: 84px;
    left: 165px;
    top: 130px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #212121;
  }

  li a {
    color: black;
    text-decoration: none;
  }

  .qlText {
    position: absolute;
    width: 159px;
    height: 40px;
    left: 88px;
    top: 293px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #212121;
  }

  .socText {
    position: absolute;
    width: 99px;
    height: 40px;
    left: 307px;
    top: 293px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #212121;
  }

  .compText {
    position: absolute;
    width: 135px;
    height: 40px;
    left: 466px;
    top: 293px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #212121;
  }

  .quickLinks {
    position: absolute;
    width: 159px;
    height: 196px;
    left: 88px;
    top: 345px;
    text-align: left;
  }

  ul li {
    margin-bottom: 10px;
  }

  .social {
    position: absolute;
    width: 99px;
    height: 196px;
    left: 318px;
    top: 345px;
    text-align: left;
  }

  .company {
    position: absolute;
    width: 135px;
    height: 157px;
    left: 433px;
    top: 345px;
  }

  .subscribe {
    position: absolute;
    width: 434px;
    height: 80px;
    left: 740px;
    top: 293px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    text-align: left;
    color: #212121;
  }

  input {
    position: absolute;
    width: 431px;
    height: 58px;
    left: 740px;
    top: 380px;
    background: #123b32;
    border-radius: 10px;
    border: 0px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    padding-left: 10px;
  }

  input::placeholder {
    color: white;
  }

  .alamat {
    position: absolute;
    width: 184px;
    height: 84px;
    left: 88px;
    top: 551px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: left;
    color: #212121;
  }

  .wm {
    position: absolute;
    width: 264px;
    height: 24px;
    left: 88px;
    top: 725px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
  }

  .collab {
    position: absolute;
    width: 143px;
    height: 24px;
    left: 886px;
    top: 625px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #212121;
  }
}
</style>