<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.018);
        padding: 5%;
      "
    >
      <div class="head">
        <q-img src="../assets/images/logo_keraton 1.png" class="img" />

        <div class="head-text">KERATON KESEPUHAN CIREBON</div>
      </div>

      <div class="link">
        <div class="list-head">
          <div class="q-gutter-y-sm list">
            <div class="text-h5 text-bold">Quick Links</div>
            <div>
              <q-btn no-caps flat href="/" label="Beranda" />
            </div>
            <div>
              <q-btn no-caps flat href="/sejarah" label="Sejarah" />
            </div>
            <div>
              <q-btn no-caps flat href="/booking" label="Booking" />
            </div>
            <div>
              <q-btn no-caps flat href="/wisata/keraton" label="Wisata" />
            </div>
          </div>

          <div class="q-gutter-y-sm list">
            <div class="text-h5 text-bold">Socials</div>
            <div>
              <q-btn no-caps flat href="" label="Whatsapp" />
            </div>
            <div>
              <q-btn no-caps flat href="" label="Facebook" />
            </div>
            <div>
              <q-btn no-caps flat href="" label="Instagram" />
            </div>
            <div>
              <q-btn no-caps flat href="" label="Threads" />
            </div>
          </div>

          <!-- <div class="q-gutter-y-sm list">
            <div class="text-h5 text-bold">Company</div>
            <div>About Us</div>
            <div>Partners</div>
            <div>Contact</div>
          </div> -->
        </div>

        <div class="email">
          <div class="descct">Subscribes your email for updates!</div>
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
              style="
                width: 7rem;
                margin-top: 1rem;
                background: #123b32;
                color: white;
              "
              class="button-submit"
            />
          </form>
        </div>
      </div>

      <div class="ctlogo">
        <section class="descct">
          <div>Jalan Kasepuhan 43 Cirebon, Jawa Barat 45114</div>
          <div>@ 2024 Keraton Kasepuhan Cirebon</div>
        </section>
        <div class="imglogo">
          <div>
            <img
              src="../assets/images/logo_keraton.png"
              class="img-collab"
              alt=""
            />
          </div>
          <div>
            <img src="../assets/images/1 931.svg" alt="" class="img-collab" />
          </div>
          <div>
            <img src="../assets/images/telkom.svg" alt="" class="img-collab" />
          </div>
          <div>
            <img src="../assets/images/bjb.svg" alt="" class="img-collab" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export default defineComponent({
  data() {
    return {
      email: ref(),
    };
  },
  methods: {
    showNotif(msg, status) {
      const myNotify = new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
        autoclose: false,
      });
      setTimeout(() => {
        myNotify.close();
      }, 3000);
    },
    async subscribeToKeraton() {
      try {
        const response = await this.$api.post("subscribe", {
          email: this.email,
        });
        if (response.status == 200) {
          this.showNotif(
            `Anda sudah berhasil berlangganan, email akan dikirim kepada ${this.email} mohon dintunggu`,
            "success"
          );
        }
      } catch (err) {
        this.showNotif(err?.response.data.message, "error");
        console.log(err);
      }
    },
  },
});
</script>

<style>
.button-submit {
  display: none;
}
.email-input {
  width: 600px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #123b32;
  color: white;
  font-size: larger;
  text-align: left;
}

.email-input::placeholder {
  color: white;
  font-weight: 600;
}
.head {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  padding: 5px;
  height: fit-content;
}

.head-text {
  font-size: xx-large;
  padding-inline: 20px;
}
.img {
  width: 80px;
  height: 80px;
}
.list-head {
  display: flex;
  gap: 60px;
}
.email {
  padding: 20px 0;
  font-size: larger;
}
.imglogo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-inline: 20px;
  justify-content: center;
  align-items: center;
}
.link {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.list {
  font-size: x-large;
  gap: 60px;
}
.descct {
  font-size: large;
}
.ctlogo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  .button-submit {
    display: flex;
  }
  .head-text {
    font-size: large;
  }
  .ctlogo {
    justify-content: center;
    align-items: center;
  }
  .email {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .email-input {
    width: 400px;
  }

  .list {
    padding: 20px;
  }
  .link {
    display: block;
    justify-content: center;
    width: 100%;
  }
  .list-head {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
@media (max-width: 800px) {
  .button-submit {
    display: flex;
  }
  .head-text {
    font-size: large;
  }
  .ctlogo {
    justify-content: center;
    align-items: center;
  }
  .email-input {
    width: 400px;
  }
}

@media (max-width: 500px) {
  .button-submit {
    display: flex;
  }
  .img {
    width: 50px;
    height: 50px;
  }
  .list {
    padding: 20px;
  }
  .link {
    display: block;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
  }
  .list-head {
    display: block;
    text-align: center;
  }
  .email-input {
    width: 100%;
  }
  .list {
    font-size: large;
    gap: 60px;
  }
  .descct {
    font-size: medium;
  }
}
</style>
