<template>
  <div id="app" class="container" v-cloak v-if="!isLogin">
    <div class="image">
      <div class="decor">
        <div class="logo">
          <img src="../assets/images/logo_keraton.png" />
          <h5>KERATON KASEPUHAN CIREBON</h5>
        </div>
        <div class="text-left">
          Bersama Lestarikan Keraton Tertua di Kota Cirebon
        </div>
      </div>
      <img src="../assets/images/keraton.png" alt="Gambar" class="crop" />
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm" class="form">
        <h1>Sign In</h1>
        <div class="text">Email</div>
        <div :class="{ box: true, 'error-border': emailError }">
          <input type="email" v-model="email" />
          <h3 class="error-message" v-show="emailError">
            {{ emailErrorMessage }}
          </h3>
        </div>
        <div class="text">Password</div>
        <div :class="{ box: true, 'error-border': passwordError }">
          <input type="password" v-model="password" placeholder="6+ Karakter" />
          <h3 class="error-message" v-show="passwordError">
            {{ passwordErrorMessage }}
          </h3>
        </div>
        <button class="button">Sign In</button>
        <div class="signup">
          Belum buat akun?
          <router-link to="/signup" class="highlight">Sign Up</router-link>
        </div>
        <div class="terms">
          Dengan signin ke Keraton Kasepuhan Cirebon, anda setuju dengan
          <b>Terms</b> dan <b>Privacy Policy</b>.
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
import cookieHandler from "src/cookieHandler";
import env from "../stores/environment";
import Cart from "stores/carts";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
const cartClass = new Cart();

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
    async submitForm() {
      this.emailError = !this.email.trim();
      this.passwordError = !this.password.trim();

      if (this.emailError || this.passwordError) {
        return;
      }

      if (this.password.length < 6)
        return this.showNotif(
          "password must be more than 6 characters or more",
          "error"
        );

      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$api.post("/auth/login", payload);
        if (response.status != 200) throw Error(response.data.message);
        const { token, user } = response.data.data;
        const cartData = Object.values(user.carts || {});
        delete user.carts;

        this.showNotif("Anda berhasil login", "success");
        cartClass.setNewData(cartData);
        cookieHandler.setCookie(env.TOKEN_STORAGE_NAME, token, {
          expires:  new Date(Date.now() + 86400000) 
        });
        localStorage.setItem(env.USER_STORAGE_NAME, JSON.stringify(user));
        sessionStorage.removeItem(env.GLOBAL_STORAGE);
        this.$router.go(-1);
      } catch (err) {
        console.log(err);
        this.showNotif(
          err.response ? err.response.data.message : err.message,
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

.highlight {
  text-decoration: none;
}

h1 {
  margin-bottom: 1vw;
}

b {
  font-weight: 1000;
}
.error {
  color: #ff5656;
  margin-top: 0.5vw;
}

.error-border {
  border: 2px solid #ff5656;
}

.error-message {
  color: #ff5656;
  font-size: 1vw;
  margin-top: 4vw;
  font-weight: 700;
  width: 20vw;
  margin-left: -7vw;
}

.container {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
}
.form-container {
  height: 100vh;
  position: relative;
}

h1 {
  font-size: 3vw;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway";
}

.form {
  width: 28vw;
  margin: auto;
  margin-top: 10vw;
  margin-left: 50vw;
}

.text {
  font-size: 1.2vw;
  font-weight: 700;
  text-align: left;
  font-family: "Raleway";
}

.box {
  background-color: #f0f0f0;
  border-radius: 0.5vw;
  width: 28vw;
  height: 2.7vw;
  margin-bottom: 2vw;
  padding-top: 0.5vw;
  justify-content: center;
  display: flex;
  align-items: center;
}

input {
  border: none;
  outline: none;
  background: none;
  width: 28vw;
  height: 2.7vw;
  font-size: 1.2vw;
  padding: 0.2vw 0.7vw 0.7vw;
  box-sizing: border-box;
  position: absolute;
}
.box input::placeholder {
  font-size: 1vw;
  font-weight: 400;
  justify-content: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

.button {
  background-color: #123b32;
  color: white;
  border-radius: 0.5vw;
  cursor: pointer;
  width: 28vw;
  height: 2.7vw;
  font-weight: 500;
  font-size: 1.2vw;
  font-family: "Raleway";
  margin-top: 2vw;
}

.signup {
  font-weight: 400;
  font-size: 1.2vw;
  width: 28vw;
  text-align: center;
  margin-top: 1vw;
  margin-bottom: 3vw;
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
  font-size: 1vw;
  font-weight: 400;
  color: #afafaf;
  margin-top: -2vw;
  line-height: 1.2vw;
}

.image .text-left {
  font-size: 2vw;
  color: #fae084;
  font-weight: 600;
  position: absolute;
  width: 27vw;
  height: 11vw;
  text-align: left;
  margin-top: -4vw;
}

.decor {
  width: 20vw;
  height: 20vh;
  margin-left: 4vw;
  margin-top: 1.5vw;
  position: absolute;
  z-index: 1;
}

.logo {
  display: grid;
  grid-template-columns: auto auto;
  width: 20vw;
  height: 10vw;
  align-items: center;
  gap: 0.5vw;
  margin-bottom: 2vw;
}

.logo h5 {
  color: #fae084;
  font-size: 1.1vw;
  line-height: 1.5vw;
  width: 7.2vw;
  margin-left: -8vw;
}

.logo img {
  width: 4vw;
  height: 4vw;
}

.crop {
  width: 32vw;
  height: 100%;
  position: absolute;
  object-fit: cover;
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
    margin-bottom: 1vw;
    margin-left: 25vw;
    width: 30vw;
  }

  b {
    font-weight: 1000;
  }

  .error {
    color: #ff5656;
    margin-top: 0.5vw;
  }

  .error-border {
    border: 2px solid #ff5656;
  }

  .error-message {
    color: #ff5656;
    font-size: 3vw;
    margin: 0vw 0vw -15vw;
    font-weight: 700;
    width: 50vw;
    margin-left: -29vw;
  }

  body {
    justify-content: center;
    align-items: center;
    font-family: "Raleway";
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
  }

  h1 {
    font-size: 8vw;
    font-weight: 700;
    text-align: center;
    font-family: "Raleway";
  }

  .form {
    width: 28vw;
    margin: auto;
    margin-top: 10vw;
    margin-left: 11vw;
  }

  .text {
    font-size: 4vw;
    font-weight: 700;
    text-align: left;
    font-family: "Raleway";
  }

  .box {
    background-color: #f0f0f0;
    border-radius: 2vw;
    width: 80vw;
    height: 10vw;
    margin-bottom: 5vw;
    padding-top: 0.5vw;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    outline: none;
    background: none;
    width: 80vw;
    height: 5vw;
    font-size: 4vw;
    padding: 0.2vw 0.7vw 0.7vw;
    box-sizing: border-box;
    position: absolute;
  }

  .box input::placeholder {
    font-size: 4vw;
    font-weight: 400;
    justify-content: center;
    padding-top: 1vw;
    padding-bottom: 1vw;
  }

  .button {
    background-color: #123b32;
    color: white;
    border-radius: 2vw;
    cursor: pointer;
    width: 80vw;
    height: 10vw;
    font-weight: 500;
    font-size: 4vw;
    font-family: "Raleway";
    margin-top: 2vw;
  }

  .signup {
    font-weight: 400;
    font-size: 3.5vw;
    width: 50vw;
    text-align: center;
    margin: 2vw 3vw 5vw 15vw;
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
    font-size: 3.5vw;
    font-weight: 400;
    color: #afafaf;
    margin-top: -2vw;
    line-height: 5vw;
    width: 80vw;
    margin-left: 0vw;
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
