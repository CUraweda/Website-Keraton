<template>
    <nav>
       <navbar :isCheckoutPage="true" />
     </nav>
     <div class="container">
       <h1 class="title">Berita Terkini</h1>
   
       <a href="https://www.merdeka.com/jabar/mengunjungi-museum-keraton-kasepuhan-ada-jubah-sunan-gunung-jati-berusia-500-tahun.html">
         <div class="card1">
           <img src="../assets/images/agung.png" class="imgnews-1"><p class="sub-title-card1">Mengunjungi Museum Keraton Kasepuhan, Ada Jubah Sunan Gunung Jati Berusia 500 Tahun</p>
           <button onclick="myFunction()" id="myBtn" class="myBtn"><q-icon name="keyboard_arrow_right"></q-icon>Read more</button>
         </div>
       </a>
   
       <a href="https://www.rri.co.id/cirebon/daerah/491159/kunjungan-wisata-ke-keraton-kasepuhan-cirebon-diprediksi-meningkat">
         <div class="card2">
           <img src="../assets/images/agung.png" class="imgnews-2"><p class="sub-title-card2">Kunjungan Wisata ke Keraton Kasepuhan Cirebon Diprediksi Meningkat</p>
           <button onclick="myFunction()" id="myBtn" class="myBtn2"><q-icon name="keyboard_arrow_right"></q-icon>Read more</button>
          </div>
       </a>
   
       <a href="https://nationalgeographic.grid.id/read/13280334/benda-pusaka-keraton-kasepuhan-cirebon-raib">
         <div class="card3">
           <img src="../assets/images/agung.png" class="imgnews-3"><p class="sub-title-card3">Benda Pusaka Keraton Kasepuhan Cirebon Raib</p>
           <button onclick="myFunction()" id="myBtn" class="myBtn3" ><q-icon name="keyboard_arrow_right"></q-icon>Read more</button>
          </div>
       </a>
   
       <a href="https://nationalgeographic.grid.id/read/13301478/menatap-lukisan-prabu-siliwangi-di-keraton-kasepuhan-cirebon">
         <div class="card4">
           <img src="../assets/images/agung.png" class="imgnews-4"><p class="sub-title-card4">Menatap Lukisan Prabu Siliwangi di Keraton Kasepuhan Cirebon</p>
           <button onclick="myFunction()" id="myBtn" class="myBtn4"><q-icon name="keyboard_arrow_right"></q-icon>Read more</button>
          </div>
       </a>
   
       <a href="https://jabar.inews.id/berita/perebutan-takhta-keraton-kasepuhan-cirebon-tokoh-adat-minta-pemerintah-jadi-penengah?_ga=2.253719113.1592946427.1715918980-891909937.1700993504">
         <div class="card5">
           <img src="../assets/images/agung.png" class="imgnews-5"><p class="sub-title-card5">Perebutan Takhta Keraton Kasepuhan Cirebon, Tokoh Adat Minta Pemerintah Jadi Penengah</p>
           <button onclick="myFunction()" id="myBtn" class="myBtn5"><q-icon name="keyboard_arrow_right"></q-icon>Read more</button>
          </div>
       </a>
   
       <a href="https://news.detik.com/berita-jawa-barat/d-5757871/kisah-meriam-tua-di-museum-kasepuhan-cirebon-saksi-romantisme-cinta-raja">
         <div class="card6">
           <img src="../assets/images/agung.png" class="imgnews-6"><p class="sub-title-card6">Kisah Meriam Tua di Museum Kasepuhan Cirebon, Saksi Romantisme Cinta Raja</p>
           <button onclick="myFunction()" id="myBtn" class="myBtn6"><q-icon name="keyboard_arrow_right"></q-icon>Read more</button>
          </div>
       </a>
       </div>
     
   </template>
   
   <script setup>
   import navbar from "../components/NavBar.vue";
  
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
   </script>
   
   <style scoped>
   @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
   
   
   .title {
     font-family: "Raleway";
     font-size: 3vw;
     text-align: center;
     color: black;
     margin-top: 7%;
   }
  
   .card1 {
     font-weight: bold;
     margin-top: 2vw;
     background-color: rgb(255, 255, 255);
     filter: brightness(90%);
     background-size: cover;
     font-family: "Raleway";
     font-size: 1.3vw;
     text-align: left;
     width: 47%;
     margin-left: 2%;
     color: black;
     padding: 5%;
     padding-top: 4%;
     padding-bottom: 4%;
     border-radius: 5px;
     margin-bottom: 5vw;
   }
   .sub-title-card1{
     margin-left: 52%;
     margin-top: -40%;
     width: 20vw;
     font-weight: 400;
   }
   .imgnews-1 {
     margin-top: -3vw;
     width: 22vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
   .myBtn {
    margin-left: 12vw;
     margin-top: 11%;
     width: 20vw;
     font-weight: 400;
     background: transparent;
     border: none; 
   }
   a { 
     text-decoration: none;
   }
   
   .card2  {
     font-weight: bold;
     margin-top: -23.5%;
     background-color: rgb(255, 255, 255);
     filter: brightness(90%);
     background-size: cover;
     font-family: "Raleway";
     font-size: 1.3vw;
     text-align: left;
     width: 47%;
     margin-left: 51.5%;
     color: black;
     padding: 5%;
     padding-top: 4%;
     padding-bottom: 4%;
     border-radius: 5px;
     margin-bottom: 5vw;
   }
   .sub-title-card2{
     margin-left: 52%;
     margin-top: -41%;
     width: 20vw;
     font-weight: 400;
   }
   .imgnews-2 {
     margin-top: -3vw;
     width: 22vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
   .myBtn2 {
    margin-left: 12vw;
     margin-top: 11%;
     width: 20vw;
     font-weight: 400;
     background: transparent;
     border: none; 
   }
   .card3  {
     font-weight: bold;
     margin-top: 2%;
     /* background-image: url(../assets/images/agung.png); */
     background-color: rgb(255, 255, 255);
     filter: brightness(90%);
     background-size: cover;
     font-family: "Raleway";
     font-size: 1.3vw;
     text-align: left;
     width: 47%;
     margin-left: 2%;
     color: black;
     padding: 5%;
     padding-top: 4%;
     padding-bottom: 4%;
     border-radius: 5px;
     margin-bottom: 5vw;
   }
   .sub-title-card3{
     margin-left: 52%;
     margin-top: -40%;
     width: 22vw;
     font-weight: 400;
   }
   .imgnews-3 {
     margin-top: -3vw;
     width: 22vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
   .myBtn3 {
    margin-left: 12vw;
     margin-top: 15%;
     width: 20vw;
     font-weight: 400;
     background: transparent;
     border: none; 
   }
   .card4  {
     font-weight: bold;
     margin-top: -23%;
     /* background-image: url(../assets/images/agung.png); */
     background-color: rgb(255, 255, 255);
     filter: brightness(90%);
     background-size: cover;
     font-family: "Raleway";
     font-size: 1.3vw;
     text-align: left;
     width: 47%;
     margin-left: 51.5%;
     color: black;
     padding: 5%;
     padding-top: 4%;
     padding-bottom: 4%;
     border-radius: 5px;
     margin-bottom: 5vw;
   }
   .sub-title-card4{
     margin-left: 52%;
     margin-top: -40%;
     width: 20vw;
     font-weight: 400;
   }
   .imgnews-4 {
     margin-top: -3vw;
     width: 22vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
   .myBtn4 {
    margin-left: 12vw;
     margin-top: 15%;
     width: 20vw;
     font-weight: 400;
     background: transparent;
     border: none;
   }
   .card5  {
     font-weight: bold;
     margin-top: 2%;
     /* background-image: url(../assets/images/agung.png); */
     background-color: rgb(255, 255, 255);
     filter: brightness(90%);
     background-size: cover;
     font-family: "Raleway";
     font-size: 1.3vw;
     text-align: left;
     width: 47%;
     margin-left: 2%;
     color: black;
     padding: 5%;
     padding-top: 4%;
     padding-bottom: 4%;
     border-radius: 5px;
     margin-bottom: 5vw;
   }
   .sub-title-card5{
     margin-left: 52%;
     margin-top: -40%;
     width: 20vw;
     font-weight: 400;
   }
   .imgnews-5 {
     margin-top: -3vw;
     width: 22vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
   .myBtn5 {
    margin-left: 12vw;
     margin-top: 11%;
     width: 20vw;
     font-weight: 400;
     background: transparent;
     border: none; 
   }
   .card6  {
     font-weight: bold;
     margin-top: -23.5%;
     /* background-image: url(../assets/images/agung.png); */
     background-color: rgb(255, 255, 255);
     filter: brightness(90%);
     background-size: cover;
     font-family: "Raleway";
     font-size: 1.3vw;
     text-align: left;
     width: 47%;
     margin-left: 51.5%;
     color: black;
     padding: 5%;
     padding-top: 4%;
     padding-bottom: 4%;
     border-radius: 5px;
     margin-bottom: 5vw;
   }
   .sub-title-card6{
     margin-left: 52%;
     margin-top: -40%;
     width: 20vw;
     font-weight: 400;
   }
   .imgnews-6 {
     margin-top: -3vw;
     width: 22vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
   .myBtn6 {
    margin-left: 12vw;
     margin-top: 11%;
     width: 20vw;
     font-weight: 400;
     background: transparent;
     border: none; 
   }
   .myBtn, .myBtn1, .myBtn2, .myBtn3, .myBtn4, .myBtn5, .myBtn6:hover{
    text-decoration: underline
   }
   p:hover {
     text-decoration: underline;
   }
   @media screen and (max-width: 768px) {
     .title {
       font-size: 4vw;
       margin-top: 9%;
     }
     .card1, .card2, .card3, .card4, .card5, .card6 {
       margin-top: 5%;
       margin-left: 5%;
       padding-right: 80%;
       font-size: 2vw;
     }
     .imgnews-1 {
     margin-top: -3vw;
     width: 25vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
     .sub-title-card1{
     margin-left: 25vw;
     margin-top: -17vw;
     width: 30vw;
     font-weight: 400;
   }
   .imgnews-2 {
     margin-top: -3vw;
     width: 25vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
     .sub-title-card2{
     margin-left: 25vw;
     margin-top: -17vw;
     width: 30vw;
     font-weight: 400;
   }
   .imgnews-3 {
     margin-top: -3vw;
     width: 25vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
     .sub-title-card3{
     margin-left: 25vw;
     margin-top: -17vw;
     width: 30vw;
     font-weight: 400;
   }
   .imgnews-4 {
     margin-top: -3vw;
     width: 25vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
     .sub-title-card4{
     margin-left: 25vw;
     margin-top: -17vw;
     width: 30vw;
     font-weight: 400;
   }
   .imgnews-5 {
     margin-top: -3vw;
     width: 25vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
     .sub-title-card5{
     margin-left: 25vw;
     margin-top: -17vw;
     width: 40vw;
     font-weight: 400;
   }
   .imgnews-6 {
     margin-top: -3vw;
     width: 25vw;
     border-radius: 10px;
     margin-left: -4vw;
   }
     .sub-title-card6{
     margin-left: 25vw;
     margin-top: -17vw;
     width: 30vw;
     font-weight: 400;
   }
   .myBtn {
    margin-left: 18vw;
     margin-top: 1vw;
     width: 25vw;
     font-weight: 400;
   }
   .myBtn2 {
    margin-left: 18vw;
     margin-top: 1vw;
     width: 25vw;
     font-weight: 400;
   }
   .myBtn3 {
    margin-left: 18vw;
     margin-top: 3vw;
     width: 25vw;
     font-weight: 400;
   }
   .myBtn4 {
    margin-left: 18vw;
     margin-top: 1vw;
     width: 25vw;
     font-weight: 400;
   }
   .myBtn5 {
    margin-left: 18vw;
     margin-top: 1vw;
     width: 25vw;
     font-weight: 400;
   }
   .myBtn6 {
    margin-left: 18vw;
     margin-top: 1vw;
     width: 25vw;
     font-weight: 400;
   }
   }

   </style>