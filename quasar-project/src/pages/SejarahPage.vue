<template>
    <div id="app">
        <div class="halatas">
            <div class="container-gambar">
                <div class="atas">
                    <h6>Warisan Leluhur Cirebon</h6>
                    <h4>Mengenal Lebih Dekat dengan Sejarah Keraton</h4>
                </div>
            </div>

            <div class="container-macan"></div>
            <div class="body">
                <p>
                    Kota Cirebon merupakan kota yang memiliki nilai historis yang sangat kental terutama pada masa
                    kerajaan dan penyebaran agama Islam di Pulau Jawa.<br><br>

                    Salah satu peninggalan pada masa kerajaan tersebut adalah sebuah bangunan yang hingga kini masih
                    berdiri dengan kokoh di kota
                    ini yaitu Rumah Adat Kasepuhan Cirebon.
                </p>
            </div>

            <!-- kanan -->
            <div class="container-p1"></div>
            <img class="timeline" src="../assets/images/timeline4.png" alt="">
            <div class="info">

                <p class="Pada"> Pada abad XV (-+1430)</p>
                <div class="sejajar">
                    <p class="Par">Pangeran Cakrabuwana Putra mahkota Kerajaan Pajajaran membangun Keraton yang kemudian
                        diserahkan kepada putrinya, Ratu Ayu Pakungwati.
                        Maka Keratonnya dinamai Keraton Pakungwati (hingga sekarang dikenal dengan sebutan Dalem Agung
                        Pakungwati)</p>
                </div>
            </div>

            <!-- kiri -->
            <div class="container-p2"></div>
            <img class="timeline2" src="../assets/images/timeline5.png" alt="">
            <div class="info1">

                <p class="P2">Pada abad XVI</p>
                <div class="sejajar">
                    <p class="Par2">Sunan Gunung Jati wafat. Kemudian<br> Pangeran Emas Mochammad Arifin,<br> cicit dari
                        Sunan Gunung Jati, bertahta<br> menggantikannya.
                        Kemudian pada<br> tahun Candra Sangkala Tunggal Tata<br> Gunaning Wong atau 1451 Saka yaitu<br>
                        tahun 1529 Masehi beliau mendirikan<br> Keraton baru sebelah barat daya Dalem<br> Agung
                        Pakungwati.
                        Dan beliaupun<br> bergelar Panembahan Pakungwati I.</p>
                </div>
            </div>

            <!-- kanan -->
            <div class="container-p3"></div>
            <img class="timeline" src="../assets/images/timeline6.png
      " alt="">
            <div class="info">

                <p class="P3">Pada -+ 1549 M</p>
                <div class="sejajar">
                    <p class="Par3"> Masjid Agung Sang Cipta Rasa <br>kebakaran. Ratu Ayu Pakungwati yang<br> sudah tua
                        itu turut memadamkan api.
                        <br>Api dapat dipadamkan, namun Ratu<br> Ayu Pakungwati kemudian wafat. <br>
                        Semenjak itu, nama atau sebutan<br> Pakungwati dimuliakan dan diabadikan<br> oleh nasab Sunan
                        Gunung Jati.
                    </p>
                </div>
            </div>

            <!-- kiri -->
            <div class="container-p4"></div>
            <img class="timeline4" src="../assets/images/timeline7.png" alt="">
            <div class="info3">

                <p class="P4">Pada -+ 1679 M</p>
                <div class="sejajar">
                    <p class="Par4">Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin). Maka
                        <br> semenjak itu, Keraton Pakungwati <br> disebut Keraton Kasepuhan hingga <br>sekarang dan
                        sultannya bergelar <br> Sultan Sepuh.
                        Kasepuhan artinya <br> tempat sepuh atau tua. Jadi, antara <br>Kasepuhan dan Kanoman itu awalnya
                        <br> yang tua dan yang muda (kakak <br> beradik).
                        Lokasi bangunan Keraton <br> Kasepuhan membujur dari utara ke <br> Selatan atau menghadap ke
                        utara,<br> karena keraton-keraton di Jawa semuanya menghadap ke utara,
                        artinya menghadap magnet dunia,<br> artinya falsafahnya sang raja<br> mengharapkan kekuatan.
                    </p>
                </div>
            </div>


            <!-- bawah -->
            <div class="halbawah">
                <div class="bawah"></div>
                <div class="sejajarB">
                    <h5>Subscribes your email for<br> updates!</h5>
                </div>

                <div>
                    <form @submit.prevent="submitForm" class="submit">
                        <button class="button">Enter your email</button>
                    </form>
                </div>
            </div>

            <div class="footer">
                <main>
                    <section class="quick-links">
                        <h4 class="quick-links-h4">Quick Links</h4>

                        <h6 class="beranda"><a href="#">Beranda</a></h6>
                        <h6 class="sejarah"><a href="#">Sejarah</a></h6>
                        <h6 class="booking"><a href="#">Booking</a></h6>
                        <h6 class="objek-wisata"><a href="#">Objek Wisata</a></h6>

                    </section>

                    <section class="socials">
                        <h4 class="socials-h4">Socials</h4>

                        <h6 class="whatsapp"><a href="#"> Whatsapp</a></h6>
                        <h6 class="facebook"><a href="#"> Facebook</a></h6>
                        <h6 class="instagram"><a href="#"> Instagram</a></h6>
                        <h6 class="threads"><a href="#"> Threads</a></h6>

                    </section>

                    <section class="company">
                        <h4 class="company-h4">Company</h4>
                        <h6 class="about-us"><a href="#">About us</a></h6>
                        <h6 class="partners"><a href="#">Partners</a></h6>
                        <h6 class="contact"><a href="#">Contact</a></h6>
                    </section>

                    <div class="tulisan">
                        Jalan Kasepuhan 43
                        Cirebon, Jawa Barat
                        45114
                    </div>
                    <div class="susun">
                        <p>In collaboration </p>
                    </div>
                    <div class="collab">
                        <img src="../assets/images/collab.png" alt="" class="collab">
                    </div>

                </main>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        submitForm() {
            this.$router.push('/signin');
        },
    },
};
</script>


<style scoped>
/* .halatas{
     display: flex;
     flex-direction: column;
    } */
.container-gambar {
    background-image: url(../assets/images/Awal.png);
    width: 390px;
    height: 600px;
    margin-left: 10px;
}

.atas {
    color: #fff;
    padding: 10px;
    text-align: center;
    height: max-content;
}

h6 {
    width: 228px;
    height: 28px;
    top: 364px;
    left: 81px;
    color: #FAE084;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 60px;
    margin-left: 60px;
}

h4 {
    width: 328px;
    height: 120px;
    left: 31px;
    font-family: Raleway;
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    margin-left: 20px;
}

p {
    width: 328px;
    height: 240px;
    top: 1172px;
    left: 31px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0cm;
    text-align: left;
    color: #212121;
}

.sejajar {
    display: flex;
    margin-top: -20px;
}

.container-macan {
    background-image: url(../assets/images/Macan.png);
    margin-left: 10px;
    margin-top: 10px;
    width: 390px;
    height: 302px;
    top: 846px;
    border-radius: 10px;
}


/* kanan */
.info {
    margin-top: 78px;

}

.container-p1 {
    background-image: url(../assets/images/p1.png);
    margin-top: 5px;
    margin-left: 10px;
    width: 392px;
    height: 290px;
    top: 1436px;
    left: -2px;
    border-radius: 10px;
}

.timeline {
    margin-top: 20px;
    margin-left: 320px;

}

.Pada {
    width: 280px;
    height: 20px;
    top: 1753px;
    left: 400px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;
    margin-left: 40px;
    margin-top: -315px;
    color: #212121;
    display: flex;
    flex-direction: row;
}

.Par {
    width: 280px;
    height: 192px;
    top: 1797px;
    left: 50px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;
    margin-left: -50px;
    margin-top: 30px;
    color: #212121;
}

/* kiri */
.info1 {
    margin-left: 150px;
    margin-top: 80px
}

.container-p2 {
    background-image: url(../assets/images/p2.png);
    margin-top: 15px;
    margin-left: 10px;
    width: 390px;
    height: 296px;

    border-radius: 10px;
}

.timeline2 {
    margin-top: 20px;
    margin-left: 20px;

}

.P2 {
    width: 108px;
    height: 24px;
    top: 2336px;
    left: 83.11px;
    margin-left: -60px;
    margin-top: -358px;
}

.Par2 {
    width: 295px;
    height: 240px;
    top: 2380px;
    left: 60px;
    margin-left: -80px;
    margin-top: 30px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

/* kanan */
.info {
    margin-left: 80px;
}

.container-p3 {
    background-image: url(../assets/images/p3.png);
    width: 390px;
    height: 338px;
    top: 2644px;
    border-radius: 10px;
    margin-left: 10px;
}

.timeline3 {
    margin-top: 20px;
    margin-left: 330px;

}

.P3 {
    width: 111px;
    height: 24px;
    top: 3009px;
    left: 196px;
    margin-left: 83px;
    margin-top: -315px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;
    color: #212121;
    display: flex;
    flex-direction: row;
}

.Par3 {
    width: 288px;
    height: 192px;
    top: 1797px;
    left: 50px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;
    margin-left: -70px;
    margin-top: 28px;
    color: #212121;
}

/* kiri */
.info4 {
    margin-left: 400px;
}

.container-p4 {
    background-image: url(../assets/images/p4.png);
    width: 390px;
    height: 239px;
    top: 3269px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
}

.timeline4 {
    margin-top: 30px;
    margin-left: 20px;
}

.P4 {
    width: 112px;
    height: 24px;
    margin-left: 95px;
    margin-top: -455px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
}

.Par4 {
    width: 289px;
    height: 408px;
    margin-left: 80px;
    margin-top: 30px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

/* bawah */

.halbawah {
    margin-top: 200px;
}

.bawah {
    background-image: url(../assets/images/gambarBawah.png);
    width: 216px;
    height: 84px;
    left: 87px;
    margin-left: 87px;
    margin-top: 50px;
}

.sejajarB {
    width: 328px;
    height: 64px;
    top: 147px;
    left: 31px;
    margin-top: 60px;
    margin-left: 31px;
    font-family: Raleway;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: #212121;
}

.submit {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 30px;
    margin-left: 150px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0em;
    width: 159px;
    height: 28px;
    top: 249px;
    left: 115px;

}

.button {
    background-color: #123B32;
    margin-left: -50px;
    color: white;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    width: 328px;
    height: 58px;
    top: 234px;
    left: 31px;
    border-radius: 10px;

}

.button:hover {
    background-color: black;
}

/* contact us */
a {
    text-decoration: none;
    color: #212121;
}

.footer {
    margin-left: -15px;
    margin-top: 300px;
}

.quick-links {
    margin-top: -220px;
    margin-left: 25px;
}

.socials {
    margin-top: 10px;
    margin-left: 25px;
}

.company {
    margin-top: 10px;
    margin-left: 25px;
}

/* quick-links */
.quick-links-h4 {
    width: 159px;
    height: 40px;
    font-family: Raleway;
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 60px;
    margin-left: 110px;
    color: #212121;
}

.beranda {
    margin-top: 10px;
    margin-left: 158px;
    width: 78px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.sejarah {
    margin-top: 10px;
    margin-left: 158px;
    width: 69px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.booking {
    margin-top: 10px;
    margin-left: 158px;
    width: 77px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.objek-wisata {
    margin-top: 10px;
    margin-left: 135px;
    width: 122px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

/* Socials */
.socials-h4 {
    margin-top: 60px;
    margin-left: 150px;
    width: 99px;
    height: 40px;
    font-family: Raleway;
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.whatsapp {
    margin-top: 10px;
    margin-left: 153px;
    width: 96px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.facebook {
    margin-top: 10px;
    margin-left: 157px;
    width: 91px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.instagram {
    margin-top: 10px;
    margin-left: 157px;
    width: 93px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.threads {
    margin-top: 10px;
    margin-left: 165px;
    width: 76px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

/* company */
.company-h4 {
    width: 159px;
    height: 40px;
    font-family: Raleway;
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 60px;
    margin-left: 135px;
    color: #212121;
}

.about-us {
    margin-top: 10px;
    margin-left: 158px;
    width: 83px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.partners {
    margin-top: 10px;
    margin-left: 158px;
    width: 78px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.contact {
    margin-top: 10px;
    margin-left: 158px;
    width: 73px;
    height: 28px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

/* alamat */
.tulisan {
    width: 184px;
    height: 84px;
    font-size: 20px;
    font-weight: 400;
    margin-top: 62px;
    margin-left: 125px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #212121;
}

/* collab */
.susun {
    width: 103px;
    height: 18px;
    top: 1222px;
    left: 143px;
    padding-left: 783px;
    margin-top: 100px;
    margin-left: 150px;
    font-family: Raleway;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #212121;
}

.collab {
    width: Hug (307.58px);
    height: Hug (53.22px);
    top: 1276px;
    left: 41px;
    gap: 40px;
    margin-left: 35px;
    margin-top: 20px;
}
</style>