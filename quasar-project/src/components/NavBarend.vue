<!-- belum login -->

<template>
  <div class="navbar" >
   
      <nav>
        <div class="container nav-wrapper">
          <div class="brand">
            <img src="../assets/images/logo_keraton.png" class="icon">
            <span  class="app-name" :class="{ 'navbar--white': isWhiteText, 'border': border }"  >KERATON KASEPUHAN CIREBON</span>
          </div>
          <div class="navbars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="nav-list">
            <li class="title" :class="{ 'navbar--white': isWhiteText, 'border': border }">
              <a href="" >Beranda</a>
            </li>
            <li class="title">
              <p :class="{ 'navbar--white': isWhiteText, 'border': border }">Sejarah</p>
              <ul class="dropdown-list">
                <li><a href="sejarah">Keraton</a></li>
                <li><a href="sejarahsilsilah">Silsilah</a></li>
              </ul>
            </li>
            <li class="title">
              <p :class="{ 'navbar--white': isWhiteText, 'border': border }">Objek Wisata</p>
              <ul class="dropdown-list">
                <li><a href="areakeraton">Keraton Kesepuhan</a></li>
                <li><a href="museum">Museum Pusaka</a></li>
                <li><a href="agungdalem">Dalem Agung Pakungwati</a></li>
                <li><a href="lotus">Lotus</a></li>
              </ul>
            </li>
            <li class="title" :class="{ 'navbar--white': isWhiteText, 'border': border }">
              <a href="signin">Booking</a>
            </li>
            <li>
              <a href="signin"><button style="border-radius: 5px; background-color: #123B32; color: white; padding: 2px 8px; width: 162px; height: 34px; border: none; font-family: 'Raleway'; font-size: 14px; font-weight: 700;">Dapatkan Tiket</button></a>
            </li>
          </ul>
        </div>
      </nav>
   
  </div>
</template>

<script>
export default {
  props: {
    isWhiteText: {
      type: Boolean,
      default: false, 
    },
    border: {
      type: Boolean,
      default: false, 
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.addRequiredClass();
    });
    this.addRequiredClass();
  },
  methods: {
    addRequiredClass() {
      if (window.innerWidth < 860) {
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
      }

      const currentPage = window.location.pathname;

     
      if (currentPage === '/sejarah' || currentPage === '/areakeraton' ) {
        this.isWhiteText = true;
      } else {
        this.isWhiteText = false;
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

:root {
  --primary: #933ded;
  --dark: #232323;
  --pure: #fff;
  --smoke: whitesmoke;
  --dark-gray: #999;
}

nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: transparent;
}

body {
  font-family: 'Raleway';
  color: var(--dark);
}

.container {
  width: 1152px;
  max-width: 90%;
  margin: 0 auto;
  height: 104px;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
}
.nav-wrapper ul.nav-list {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.nav-wrapper ul.nav-list li {
  margin-left: 30px;
  padding: 20px 0;
  position: relative;
}

.nav-wrapper ul.nav-list li a {
  color: var(--dark);
  text-decoration: none;
  transition: all .5s ease-in-out;
}

.title:hover {
  text-decoration: underline;
}
nav ul.dropdown-list {
  list-style-type: none;
  display: block;
  position: absolute;
  background: white;
  border: 1px solid #123B32;
  border-radius: 10px;
  padding: 6px 16px;
  position: absolute;
  width: max-content;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
}

.nav-wrapper ul.dropdown-list li {
  margin-left: 0;
  padding: 5px 0;
}

.nav-wrapper ul.dropdown-list li a {
  color: var(--dark);
}

.nav-wrapper ul.nav-list li:hover .dropdown-list {
  opacity: 1;
  pointer-events: auto;
  animation: moveUp .5s ease-in-out forwards;
}

.signout {
  color: red;
}
.navbar--white {
  color: #ffffff;
}

.white {
  color: #ffffff;
}

@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(20px); 
  }
}

.navbars {
  display: none;
}

.mobile ul.nav-list {
  background: -webkit-linear-gradient(45deg, #434343, #000000);
  background: linear-gradient(45deg, #434343, #000000);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  opacity: 0;
  pointer-events: none;
  transition: all .3s ease-in-out;
}

.navbars, .brand {
  z-index: 9999;
}

.avatar {
  border-radius: 50%;
  background-color: #123b32;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.avatar:hover {
  box-shadow: 0 0 10px 5px rgba(255, 255, 0, 0.5); 
}

.icon {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 16.69px;
}

.app-name {
  position: absolute;
  width: 139px;
  height: 84px;
  left: 170px;
  top: 10px;
  font-size: 20px;
  letter-spacing: -1px;
}

.user {
  display: flex;
  align-items: center;
  gap: 9px;
}
.navbar--white .app-name,
.white .app-name {
  color: #ffffff;
}
</style>