<template>
  <div id="app" class="container" v-cloak v-if="!isLogin">
    <div class="image">
      <div class="decor">
        <div class="logo">
          <img src="../assets/images/logo_keraton.png" />
          <h5>KERATON KASEPUHAN CIREBON</h5>
        </div>
        <h1>Bersama Lestarikan Keraton Tertua di Kota Cirebon</h1>
      </div>
      <img src="../assets/images/keraton.png" alt="Gambar" />
    </div>
    <div>
      <form @submit.prevent="submitForm" class="form">
        <h1>Sign Up</h1>
        <div class="boxx">
          <label class="text">Nama Lengkap</label>
          <div :class="{ box: true, 'error-border': nameError }">
            <input type="text" v-model="name" />
            <h3 class="error-message" v-show="nameError">
              {{ nameErrorMessage }}
            </h3>
          </div>
        </div>
        <div class="boxx">
          <label class="text">Email</label>
          <div :class="{ box: true, 'error-border': emailError }">
            <input type="email" v-model="email" placeholder="6+ Characters" />
            <h3 class="error-message" v-show="emailError">
              {{ emailErrorMessage }}
            </h3>
          </div>
        </div>
        <div class="pass">
          <div class="pw">
            <h3 class="text textp">Password</h3>
            <div :class="{ box2: true, 'error-border': passwordError }">
              <input
                type="password"
                v-model="password"
                placeholder="6+ Characters"
              />
              <h3 class="error-message" v-show="passwordError">
                {{ passwordErrorMessage }}
              </h3>
            </div>
          </div>
          <div class="cpw">
            <h3 class="text textp">Konfirmasi Password</h3>
            <div :class="{ box2: true, 'error-border': passmatchError }">
              <input
                type="password"
                v-model="passmatch"
                placeholder="6+ Characters"
              />
              <h3 class="error-message" v-show="passmatchError">
                {{ passmatchErrorMessage }}
              </h3>
            </div>
          </div>
        </div>
        <div class="bottom">
          <button class="button">Buat Akun</button>
          <h3 class="signup">
            Sudah buat akun?
            <router-link to="/signin" class="highlight">Sign In</router-link>
          </h3>
          <h3 class="terms">
            Dengan signin ke Keraton Kasepuhan Cirebon, anda setuju dengan
            <b>Terms</b> dan <b>Privacy Policy</b>.
          </h3>
        </div>
      </form>
    </div>

    <Notification
      v-if="notification.message"
      :message="notification.message"
      :type="notification.type"
    />
  </div>
</template>

<script>
import { BASE_URL } from "src/auth/config";
import Notification from "../components/NotificationAlert.vue"; // Make sure to adjust the path
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      isLogin: false,
      email: "",
      password: "",
      name: "",
      passmatch: "",
      emailError: false,
      passwordError: false,
      nameError: false,
      passmatchError: false,
      nameErrorMessage: "Please type your name",
      emailErrorMessage: "Please type your email",
      passwordErrorMessage: "Please type your password",
      passmatchErrorMessage: "Password didn't match",
      notification: {
        message: "",
        type: "info",
      },
    };
  },
  mounted() {
    this.verifyToken();
  },
  methods: {
    showNotif(mes, type) {
      this.notification.message = mes;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = "";
        this.notification.type = "";
      }, 4000);
    },
    async verifyToken() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.isLogin = false;
        return;
      }

      try {
        const response = await fetch(BASE_URL() + "/keraton/auth/auth", {
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        this.isLogin = true;
        this.$router.push("/");
      } catch (error) {
        console.error("Failed to verify token:", error);
        localStorage.removeItem("token");
        this.isLogin = false;
      }
    },
    async submitForm() {
      this.emailError = !this.email.trim();
      this.passwordError = !this.password.trim();
      this.nameError = !this.name.trim();
      this.passmatchError = !this.passmatch.trim();

      if (
        this.emailError ||
        this.passwordError ||
        this.nameError ||
        this.passmatchError
      ) {
        this.showNotif("fill in all fields please", "error");
        return;
      }

      if (this.password !== this.passmatch) {
        this.passmatchError = true;
        this.showNotif("password didn't match", "error");
        return;
      }

      const payload = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      try {
        const response = await fetch(BASE_URL() + "/keraton/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();

        if (!response.ok) {
          if (response.status === 500) {
            this.showNotif(
              "there is an error in the server, try again later",
              "error"
            );
          } else if (
            response.status === 404 &&
            data.message.includes("constraint")
          ) {
            this.showNotif(
              "email has been used please use another email",
              "error"
            );
          } else {
            this.showNotif(
              "unknown error please contact the developer",
              "error"
            );
          }
          return;
        }

        this.showNotif("Register Successfuly", "info");
        localStorage.setItem("token", data.data);
        this.$router.push("/");
      } catch (error) {
        console.error("Error:", error);
        this.showNotif(
          "unknown fatal error please contact the developer",
          "error"
        );
      }
    },
  },
  components: {
    Notification,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

body {
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  width: fit-content;
  height: fit-content;
  top: 622px;
  left: 970px;
}
.highlight {
  text-decoration: none;
}

h1 {
  margin-bottom: 73px;
}

.error {
  color: #ff5656;
  font-size: 12px;
  margin-top: 5px;
}

.error-border {
  border: 2px solid #ff5656;
}

.error-message {
  color: #ff5656;
  font-size: 12px;
  margin-top: -13px;
  font-weight: 700;
}

.container {
  display: grid;
  grid-template-columns: auto 1fr;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway";
}

.form {
  height: 354px;
  width: 418px;
  margin: auto;
  margin-top: 169px;
}

.text {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  font-family: "Raleway";
  margin-bottom: -10px;
}

.box {
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 416px;
  height: 40px;
  margin-bottom: 38px;
  margin-top: 4px;
}

.box2 {
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 200px;
  height: 40px;
  margin-bottom: 38px;
}

.box2 input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;
}

.box input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;
}

.button {
  background-color: #123b32;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 416px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  font-family: "Raleway";
  margin-top: 20px;
}

.signup {
  font-weight: 400;
  width: 418px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 38px;
  font-family: "Raleway";
  font-size: 14px;
}

.highlight {
  color: #4f3cc9;
  cursor: pointer;
}

.terms {
  font-family: inter;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #afafaf;
  font-family: "Inter";
  margin-top: -40px;
  line-height: 20px;
}

b {
  font-weight: 1000;
}

.image {
  width: 514px;
  height: 913px;
  position: relative;
  height: fit-content;
}

.image h1 {
  font-size: 30px;
  color: #fae084;
  font-weight: 700;
  line-height: 40px;
  position: absolute;
  width: 313px;
  height: 120px;
  text-align: left;
}

.decor {
  padding: 64px, 137.16px, 30px, 64px;
  width: 514px;
  height: 304px;
  margin-left: 64px;
  margin-top: 64px;
  position: absolute;
  z-index: 1;
}

.logo {
  display: grid;
  grid-template-columns: auto auto;
  width: 152px;
  height: 59px;
  padding: 0px, 0px, 0px, 0px;
  align-items: center;
  gap: 10px;
  margin-bottom: 31px;
}

.logo h5 {
  color: #fae084;
  font-size: 14px;
  line-height: 20px;
  width: 98px;
  height: 59px;
}

.pass {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 416px; /* Adjust the width as needed */
  height: 69px;
  gap: 16px;
}

.pass > div {
  width: calc(50% - 8px); /* Adjust the width of each password container */
}

@media screen and (max-width: 600px) {
  body {
    justify-content: center;
    align-items: center;
    font-family: "Raleway";
    width: fit-content;
    height: fit-content;
    top: 622px;
    left: 970px;
  }

  .highlight {
    text-decoration: none;
  }

  h1 {
    margin-bottom: 73px;
  }

  b {
    font-weight: 1000;
  }

  .error {
    color: #ff5656;
    font-size: 12px;
    margin-top: 5px;
  }

  .error-border {
    border: 2px solid #ff5656;
  }

  .error-message {
    color: #ff5656;
    font-size: 12px;
    margin-top: 8px;
    font-weight: 700;
    text-align: left;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    font-family: "Raleway";
  }

  .form {
    height: 354px;
    width: 418px;
    margin: auto;
    margin-top: 93px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .text {
    font-size: 16px;
    font-weight: 700;
    font-family: "Raleway";
    margin-bottom: 4px;
  }

  .textp {
    margin-left: 45px;
  }

  .boxx {
    width: 328px;
    margin-left: 45px;
    text-align: left;
  }

  .box {
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 328px;
    height: 40px;
    margin-bottom: 38px;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 38px;
    margin-top: 10px;
  }

  .box input {
    border: none;
    outline: none;
    background: none;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .button {
    background-color: #123b32;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 328px;
    height: 40px;
    font-weight: 500;
    font-size: 14px;
    font-family: "Raleway";
    justify-content: center;
    margin-top: 20px;
  }

  .signup {
    font-weight: 400;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 38px;
    font-family: "Raleway";
  }

  .highlight {
    color: #4f3cc9;
    cursor: pointer;
  }

  .terms {
    font-family: "Inter";
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #afafaf;
    justify-content: center;
    width: 100%;
    margin: auto;
    margin-top: -40px;
    line-height: 20px;
  }

  .image {
    display: none; /* This will hide the image on screens below 600px */
  }

  .image h1 {
    display: none; /* This will hide the image on screens below 600px */
  }

  .decor {
    display: none; /* This will hide the image on screens below 600px */
  }

  .logo {
    display: none; /* This will hide the image on screens below 600px */
  }

  .logo h5 {
    display: none; /* This will hide the image on screens below 600px */
  }

  /* CSS untuk mengatur tata letak elemen pw dan cpw pada tampilan responsif */
  .pass {
    flex-direction: column; /* Mengubah arah tata letak menjadi kolom */
  }

  .pass > div {
    width: 100%; /* Menjadikan lebar masing-masing div 100% */
    margin-bottom: 20px; /* Menambahkan margin antar elemen */
  }

  .box2 {
    width: 328px;
    height: 40px;
    margin-bottom: 10px;
    margin-left: 45px;
  }

  .bottom {
    margin-top: 140px;
  }
}
</style>
