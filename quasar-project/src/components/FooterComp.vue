<template>
  <div class="footer">
    <div class="logo">
      <img
        src="../assets/images/logo_keraton.png"
        alt=""
        style="width: 68px; height: 70.62px; margin-bottom: 15px"
      />
      <p>KERATON <br />KASEPUHAN <br />CIREBON</p>
    </div>
    <div class="footer-col">
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Sejarah</a></li>
          <li><a href="#">Booking</a></li>
          <li><a href="#">Objek Wisata</a></li>
        </ul>
      </div>
      <div>
        <h3>Socials</h3>
        <ul>
          <li><a href="#">Whatsapp</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Threads</a></li>
        </ul>
      </div>
      <div>
        ran
        <h3>Company</h3>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col-4">
        <h3>Subscribes your email for updates!</h3>
        <form @submit.prevent="subscribeToKeraton">
          <input
            type="text"
            v-model="enterEmail"
            placeholder="Enter Your Email"
            style="
              width: 20rem;
              height: 48px;
              padding: 12px;
              border: 1px solid #ddd;
              border-radius: 5px;
              box-sizing: border-box;
              margin-bottom: 10px;
            "
          />
          <q-btn hidden no-caps color="blue" label="Submit" type="submit" />
        </form>
      </div>
    </div>
    <div class="adress">Jalan Kasepuhan 43 Cirebon, Jawa Barat 45114</div>
    <div class="lower">
      <div class="inlower">@2024 Keraton Kasepuhan Cirebon</div>
      <div class="susun">
        <p>In collaboration</p>

        <div class="collab">
          <img src="../assets/images/logo_keraton.png" alt="" class="foto1" />
          <img src="../assets/images/1 931.svg" alt="" class="foto2" />
          <img src="../assets/images/telkom.svg" alt="" class="foto3" />
          <img src="../assets/images/bjb.svg" alt="" class="foto4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async subscribeToKeraton() {
      try {
        const response = await this.$api.post("subscribe", {
          email: this.enterEmail,
        });
        if (response.status != 200) throw Error(response.data.message);
        return;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
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
  width: 100%;
  height: auto;
  margin-top: 278px;
}
a {
  text-decoration: none;
  color: #212121;
}
ul {
  list-style-type: none;
}
.footer-col {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 0 6rem;
}

.footer-col h3 {
  font-size: 30px;
  font-weight: 40px;
  margin-bottom: 11px;
  margin-top: 76px;
}
.footer-col-1 {
  margin-left: 88px;
}

.logo {
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 88px;
  line-height: 28px;
  gap: 9px;
}

.logo img {
  width: 70px;
  margin-right: 9px;
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
  height: 142px;
  margin: 0 0 29px 88px;
  display: flex;
}
.inlower {
  padding-top: 118px;
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
  gap: 32px;
  padding-left: 726px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}
</style>
