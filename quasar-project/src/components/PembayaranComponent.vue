<script setup>
import { ref } from 'vue';
import SelectPopup from './SelectPopup.vue';

const selectPopup = ref(null)

const focusinput = () => {
  const input = document.getElementById('showPopup')
  input.focus()
  input.click()
}

const showPopup = () => {
  selectPopup.value.showSelectPopup()
}
</script>

<template>
  <div class="payment">
    <div class="atas">
      <div class="icon">
        <img src="../assets/svg/Framewallet.svg" alt="">
      </div>
      <div class="txt-group17">
        <p>Pilih Pembayaran</p>
      </div>
    </div>
    <div class="select" @click.stop="focusinput">

      <div class="svg-select">
        <svg class="danger" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.79688 6.45313V3.28125C5.79688 3.16108 5.84462 3.04582 5.9296 2.96085C6.01457 2.87587 6.12983 2.82813 6.25 2.82813C6.37018 2.82813 6.48544 2.87587 6.57041 2.96085C6.65539 3.04582 6.70313 3.16108 6.70313 3.28125V6.45313C6.70313 6.57331 6.65539 6.68856 6.57041 6.77354C6.48544 6.85851 6.37018 6.90625 6.25 6.90625C6.12983 6.90625 6.01457 6.85851 5.9296 6.77354C5.84462 6.68856 5.79688 6.57331 5.79688 6.45313ZM12.1406 3.93545V8.06455C12.141 8.18361 12.1177 8.30155 12.0721 8.41152C12.0265 8.5215 11.9595 8.62131 11.875 8.70516L8.95516 11.625C8.87131 11.7095 8.7715 11.7765 8.66152 11.8221C8.55155 11.8677 8.43361 11.891 8.31455 11.8906H4.18545C4.0664 11.891 3.94846 11.8677 3.83848 11.8221C3.72851 11.7765 3.6287 11.7095 3.54485 11.625L0.625024 8.70516C0.540505 8.62131 0.473495 8.5215 0.427892 8.41152C0.382288 8.30155 0.358999 8.18361 0.35938 8.06455V3.93545C0.358999 3.8164 0.382288 3.69846 0.427892 3.58848C0.473495 3.47851 0.540505 3.3787 0.625024 3.29485L3.54485 0.375024C3.6287 0.290505 3.72851 0.223495 3.83848 0.177892C3.94846 0.132288 4.0664 0.108999 4.18545 0.10938H8.31455C8.43361 0.108999 8.55155 0.132288 8.66152 0.177892C8.7715 0.223495 8.87131 0.290505 8.95516 0.375024L11.875 3.29485C11.9595 3.3787 12.0265 3.47851 12.0721 3.58848C12.1177 3.69846 12.141 3.8164 12.1406 3.93545ZM11.2344 3.93545L8.31455 1.01563H4.18545L1.26563 3.93545V8.06455L4.18545 10.9844H8.31455L11.2344 8.06455V3.93545ZM6.25 7.8125C6.11557 7.8125 5.98416 7.85237 5.87239 7.92705C5.76062 8.00174 5.6735 8.10789 5.62206 8.23209C5.57061 8.35628 5.55715 8.49294 5.58338 8.62479C5.6096 8.75664 5.67434 8.87775 5.76939 8.9728C5.86445 9.06786 5.98556 9.13259 6.1174 9.15882C6.24925 9.18504 6.38591 9.17158 6.51011 9.12014C6.63431 9.0687 6.74046 8.98158 6.81514 8.86981C6.88983 8.75803 6.92969 8.62662 6.92969 8.49219C6.92969 8.31193 6.85808 8.13905 6.73062 8.01158C6.60315 7.88411 6.43027 7.8125 6.25 7.8125Z"
            fill="#E32626" />
        </svg>
      </div>

      <div class="label-select">
        <label for="">Anda belum memilih metode pembayaran</label>
      </div>

      <div @click="showPopup" id="showPopup">
        <svg width="13" height="8" class="svg" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.8354 1.5855L7.21055 7.21031C7.15831 7.26261 7.09628 7.30409 7.02799 7.3324C6.95971 7.36071 6.88652 7.37528 6.8126 7.37528C6.73868 7.37528 6.66548 7.36071 6.5972 7.3324C6.52892 7.30409 6.46688 7.26261 6.41464 7.21031L0.789838 1.5855C0.684294 1.47996 0.625 1.33681 0.625 1.18755C0.625 1.03829 0.684294 0.895138 0.789838 0.789594C0.895382 0.68405 1.03853 0.624756 1.18779 0.624756C1.33706 0.624756 1.4802 0.68405 1.58575 0.789594L6.8126 6.01715L12.0394 0.789594C12.0917 0.737334 12.1537 0.695879 12.222 0.667596C12.2903 0.639313 12.3635 0.624756 12.4374 0.624756C12.5113 0.624756 12.5845 0.639313 12.6528 0.667596C12.7211 0.695879 12.7831 0.737334 12.8354 0.789594C12.8876 0.841854 12.9291 0.903896 12.9574 0.972177C12.9856 1.04046 13.0002 1.11364 13.0002 1.18755C13.0002 1.26146 12.9856 1.33464 12.9574 1.40292C12.9291 1.4712 12.8876 1.53324 12.8354 1.5855Z"
            fill="black" />
        </svg>
      </div>

    </div>

  </div>
  <SelectPopup ref="selectPopup" />

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

header {
  background-color: white;
  height: 89px;
  width: 522px;
  padding: 0;
  /* box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.5); */
}

/* .typhography{
/* styleName: Raleway/regular/p; 
font-family: Raleway;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
} */
#showPopup {
  /* background-color: rebeccapurple; */
  width: 176.5px;
  height: 16.75px;
  padding: 5px, 3px, 5px, 3px;
  gap: 10px;
  align-items: center;
  padding-left: 140px;
}

#showPopup .svg {
  text-align: right;
}

.atas {
  align-items: center;
  display: flex;
  gap: 6px;
}

.txt-group17 {
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.txt-group17 p {
  width: 135px;
  height: 24px;
  left: 38px;
  color: #5E5E5E;
}

.select {
  background-color: #ffffff;
  /* padding-left: 20px;
  padding-bottom: 17.75px;
  padding-right: 20px;
  padding-top: 17.75px; */
  width: 522px;
  height: 44.75px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.25);
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;



  /* .danger{
    align-items: center;
    margin: 7px;
  } */
}

.danger {
  margin-left: 20px;
}

svg {
  margin-top: 1px;
}

label {
  font-size: 14px;
  margin-left: 8px;
}

.svg {

  margin-right: 23px;
}
</style>
