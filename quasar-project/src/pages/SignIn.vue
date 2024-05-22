<template>
  <div>
    <div id="app" class="container" v-cloak v-if="!isLogin">
      <div class="image">
        <div class="decor">
          <div class="logo">
            <img src="../assets/images/logo_keraton.png" />
            <h5>KERATON KASEPUHAN CIREBON</h5>
          </div>
          <h1>Bersama Lestarikan Keraton Tertua di Kota Cirebon</h1>
        </div>
        <img src="../assets/images/keraton.png" alt="Gambar" class="crop" />
      </div>
      <div>
        <form @submit.prevent="submitForm" class="form">
          <h1>Sign In</h1>
          <h3 class="text">Email</h3>
          <div :class="{ box: true, 'error-border': emailError }">
            <input type="email" v-model="email" />
            <h3 class="error-message" v-show="emailError">
              {{ emailErrorMessage }}
            </h3>
          </div>
          <h3 class="text">Password</h3>
          <div :class="{ box: true, 'error-border': passwordError }">
            <input
              type="password"
              v-model="password"
              placeholder="6+ Characters"
            />
            <h3 class="error-message" v-show="passwordError">
              {{ passwordErrorMessage }}
            </h3>
          </div>
          <button class="button">Sign In</button>
          <h3 class="signup">
            Belum buat akun?
            <router-link to="/signup" class="highlight">Sign Up</router-link>
          </h3>
          <h3 class="terms">
            Dengan signin ke Keraton Kasepuhan Cirebon, anda setuju dengan
            <b>Terms</b> dan <b>Privacy Policy</b>.
          </h3>
        </form>
      </div>
    </div>
    <Notification
      v-if="notification.message"
      :message="notification.message"
      :type="notification.type"
    />
  </div>
</template>

<script>
import cookieHandler from "src/cookieHandler";
import env from "../stores/environment";
import Notification from "../components/NotificationAlert.vue"; // Make sure to adjust the path

export default {
  data() {
    return {
      isLogin: false,
      email: "",
      password: "",
      emailError: false,
      passwordError: false,
      emailErrorMessage: "Please type your email",
      passwordErrorMessage: "Please type your password",
      notification: {
        message: "",
        type: "info",
      },
    };
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
        console.error("Error:", error);
      }
    },
    async submitForm() {
      this.emailError = !this.email.trim();
      this.passwordError = !this.password.trim();

      if (this.emailError || this.passwordError) {
        return;
      }

      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$api.post("/auth/login", payload);

        const data = await response.json();

        if (response.status != 200) throw Error(response.data.message);
        localStorage.setItem(env.TOKEN_STORAGE_NAME, response.data.data.token);
        localStorage.setItem("name", response.data.data.user.name);
        const { token, user } = response.data.data;
        cookieHandler.setCookie(env.TOKEN_STORAGE_NAME, token);
        localStorage.setItem("user", user);
        this.$router.go(-1);

        this.showNotif("Login Successfuly", "info");
        localStorage.setItem("token", data.data.token);
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

@media screen and (min-width: 601px) {
  .desktop {
    display: block;
  }

  .handphone {
    display: none;
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
    margin-top: -15px;
  }

  body {
    justify-content: center;
    align-items: center;
    font-family: "Raleway";
    width: fit-content;
    height: fit-content;
    top: 622px;
    left: 970px;
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
    margin-bottom: 4px;
  }

  .box {
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 416px;
    height: 40px;
    margin-bottom: 38px;
  }

  .box input {
    border: none;
    outline: none;
    background: none;
    width: 416px;
    height: 40px;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .box input::placeholder {
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    top: 36px;
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
  }

  .signup {
    font-weight: 400;
    font-size: 14px;
    width: 418px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 38px;
    font-family: "Raleway";
    text-decoration: none;
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
    margin-top: -40px;
    line-height: 20px;
  }

  .image {
    width: 514px;
    height: 836px;
    position: relative;
    height: fit-content;
  }

  .crop {
    width: 514px;
    height: 836px;
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
}

/* ----------------------------hp---------------------------- */

@media screen and (max-width: 600px) {
  .desktop {
    display: none;
  }

  .handphone {
    display: block;
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
  }

  body {
    justify-content: center;
    align-items: center;
    font-family: "Raleway";
    width: fit-content;
    height: fit-content;
    top: 622px;
    left: 970px;
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
    text-align: left;
    font-family: "Raleway";
    margin-bottom: 4px;
    margin-left: 45px;
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
    margin: auto;
    /* Center horizontally */
    margin-bottom: 38px;
  }

  .box input {
    border: none;
    outline: none;
    background: none;
    width: 328px;
    height: 40px;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .box input::placeholder {
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    top: 36px;
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
  }

  .signup {
    font-weight: 400;
    font-size: 14px;
    width: 418px;
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
    width: 328px;
    margin: auto;
    margin-top: -40px;
    line-height: 20px;
  }

  .image {
    display: none;
    /* This will hide the image on screens below 600px */
  }

  .image h1 {
    display: none;
    /* This will hide the image on screens below 600px */
  }

  .decor {
    display: none;
    /* This will hide the image on screens below 600px */
  }

  .logo {
    display: none;
    /* This will hide the image on screens below 600px */
  }

  .logo h5 {
    display: none;
    /* This will hide the image on screens below 600px */
  }
}
</style>
