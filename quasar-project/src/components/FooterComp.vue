<template>
  <div class="container-footer">
    <div class="container-footer-img">
      <img src="../assets/images/logo_keraton.png" alt="" />
      <div>KERATON KASEPUHAN CIREBON</div>
    </div>
    <div class="container-footer-link">
      <div class="container-linbig" id="container-linbig2">
        <div>Subscribes your email for updates!</div>
        <div>
          <button>Enter your email</button>
          <input
            type="email"
            placeholder="Enter your email"
            class="email-input"
          />
        </div>
      </div>
      <div class="container-linkmedium container-link">
        <div>Quick Links</div>
        <router-link to="/">Beranda </router-link>
        <router-link to="/sejarah">Sejarah</router-link>
        <router-link to="/booking">Booking</router-link>
        <router-link to="/areakeraton">Objek Wisata</router-link>
      </div>
      <div class="container-linksmall container-link">
        <div>Socials</div>
        <a>Whatsapp</a>
        <a>Facebook</a>
        <a>Instagram</a>
        <a>Threads</a>
      </div>
      <div class="container-linksmall container-link">
        <div>Company</div>
        <a>About us</a>
        <a>Partners</a>
        <a>Contact</a>
      </div>
      <div class="container-linbig container-link container-linbig1">
        <div>Subscribes your email for updates!</div>
        <form @submit.prevent="subscribeToKeraton">
          <input
            type="email"
            placeholder="Enter your email"
            class="email-input"
            v-model="email"
          />

          <q-btn
            no-caps
            type="submit"
            label="Submit"
            style="width: 7rem; margin-left: 4vw"
          />
        </form>
      </div>
    </div>
    <div class="container-alamat">
      Jalan Kasepuhan 43 Cirebon, Jawa Barat 45114
    </div>
    <div class="container-collaboration">
      <div class="kesepuhan-cirebon">@ 2024 Keraton Kasepuhan Cirebon</div>
      <div class="container-collaboration2">
        <div>In collaboration</div>
        <div class="img-collab-container">
          <a href="" target="_blank"
            ><button>
              <img
                src="../assets/images/logo_keraton.png"
                alt=""
                class="img-collab"
              /></button
          ></a>
          <a href="https://www.curaweda.com/" target="_blank"
            ><button>
              <img
                src="../assets/images/1 931.svg"
                alt=""
                class="img-collab"
              /></button
          ></a>
          <a href="https://telkomuniversity.ac.id/" target="_blank"
            ><button>
              <img
                src="../assets/images/telkom.svg"
                alt=""
                class="img-collab"
              /></button
          ></a>
          <a href="https://www.bankbjb.co.id/" target="_blank"
            ><button>
              <img
                src="../assets/images/bjb.svg"
                alt=""
                class="img-collab"
              /></button
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "FooTer",
  data() {
    return {
      email: ref(),
      message: ref(),
    };
  },
  methods: {
    async subscribeToKeraton() {
      try {
        const response = await this.$api.post("subscribe", {
          email: this.email,
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
.email-input {
  width: 35vw;
  height: 3.5rem;
  margin-top: 0.3rem;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #123b32;
  color: white;
  font-size: 14px;
  text-align: left;
  margin-left: 4vw;
}

.email-input::placeholder {
  color: white; /* White placeholder color */
  font-weight: 600; /* Full opacity for the placeholder text */
}
.container-footer {
  width: 100%;
  padding: 80px;
  margin: 0 auto;

}

.container-footer-img {
  display: flex;
}
.container-footer-img img {
  height: 6vw;
  margin: auto 0;
}
.container-footer-img div {
  font-size: 1.6vw;
  width: 5vw;
}

.container-footer-link {
  display: flex;
  margin-top: 5vw;
}

.container-linkmedium {
  flex: 1.2;
}

.container-linksmall {
  flex: 0.8;
}
.container-linbig {
  flex: 2;
}
.container-link div:first-child {
  font-size: 1.4vw;
}

.container-link a {
  display: block;
  padding-top: 1vw;
  text-decoration: none;
  color: black;
  width: fit-content;
}
.container-linbig div,
.container-linbig {
  width: 35vw;
  margin-left: 4vw;
}

.container-linbig button {
  text-align: left;
  padding: 0.5vw;
  border-radius: 0.7vw;
  border: none;
  background-color: #123b32;
  margin-top: 1.5vw;
  color: white;
}
.container-alamat,
.container-linbig,
a,
.container-collaboration2 div {
  font-size: 1.2vw !important;
}

#container-linbig2 {
  display: none;
}

.container-alamat {
  width: 20vw;
  margin-top: 5vw;
}

.container-collaboration {
  display: flex;
}
.container-collaboration div:first-child {
  flex: 1.1;
  margin-top: auto;
  font-size: 1.3vw;
}
.container-collaboration div:last-child {
  flex: 1;
}

.img-collab {
  height: 5vw;
}
.container-collaboration2 > div {
  margin: 0 auto;
  width: fit-content;
}
.img-collab-container button {
  background: transparent;
  border: 0px;
  padding: 1.5vw;
}
.container-collaboration2 button {
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .container-footer-img {
    width: fit-content;
    margin: 0 auto 15vw auto;
  }
  .container-footer-img img {
    height: 20vw;
  }
  .container-footer-img div {
    width: min-content;
  }
  .container-footer-link,
  #container-linbig2 {
    display: block;
  }
  .container-linbig1 {
    display: none;
  }
  #container-linbig2 div,
  #container-linbig2 button {
    margin: 3vw auto;
    text-align: center;
    font-size: 5vw;
    width: 80vw;
    border-radius: 2vw;
  }
  #container-linbig2 button,
  .container-link a,
  .container-footer-img div,
  .container-alamat {
    font-size: 4vw !important;
  }
  #container-linbig2 button {
    padding: 3vw 0;
  }
  .container-link a,
  .container-link div {
    width: fit-content;
    margin: 1.5vw auto;
  }
  .container-link div {
    font-size: 6vw !important;
  }
  .container-link {
    margin-top: 10vw;
  }
  .container-alamat {
    margin: 20vw auto;
    text-align: center;
    width: 55vw;
  }
  .container-collaboration {
    flex-direction: column;
  }
  .kesepuhan-cirebon {
    order: 2;
    font-size: 2vw !important;
    margin: auto;
    padding-top: 20vw;
  }
  .container-collaboration2 {
    order: 1;
  }
  .container-collaboration2 div {
    font-size: 3vw !important;
  }
  .container-collaboration2 img {
    height: 13vw;
  }
  .container-collaboration2 button {
    padding: 3vw;
    margin-top: 5vw;
  }
}
</style>