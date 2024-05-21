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
</template>

<script>
import { BASE_URL } from "src/auth/config";
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    this.verifyToken();
  },
  methods: {
    async verifyToken() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.isLogin = false;
        return;
      }

      try {
        const response = await fetch(
          BASE_URL() + "/keraton/auth/auth",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        this.isLogin = true;
        this.$router.push("/");
      } catch (error) {
        console.error("Failed to verify token:", error);
        localStorage.removeItem("token");
        this.isLogin = false;
      }
    },
  },
  components: {},
};
</script>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const email = ref("");
const password = ref("");
const emailError = ref(false);
const passwordError = ref(false);
const emailErrorMessage = ref("Please type your email");
const passwordErrorMessage = ref("Please type your password");

const submitForm = async () => {
  emailError.value = !email.value.trim();
  passwordError.value = !password.value.trim();

  if (!email.value.trim() || !password.value.trim()) {
    return;
  }

  const payload = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch(BASE_URL() + "/keraton/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    localStorage.setItem("token", data.data.token);
    router.push("/");
  } catch (error) {
    console.error("Error:", error);
  }
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
    margin: auto; /* Center horizontally */
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
}
</style>
