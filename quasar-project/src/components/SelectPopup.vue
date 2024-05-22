<script setup>
import { ref, defineExpose } from "vue";
import KreditPopup from "./kreditPopup.vue";

const kreditPopup = ref(null);
const showPopup = ref(false);

const showSelectPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const showkreditPopup = () => {
  kreditPopup.value.showKreditPopup();
};

defineExpose({
  showSelectPopup,
});
</script>

<template>
  <div v-if="showPopup" class="popup">
    <div class="popup-inner">
      <div class="nav-popup">
        <div class="txt-nav-popup">
          <h6>Pilih Pembayaran</h6>
        </div>
        <div class="icon-close">
          <span @click="closePopup"
            ><img src="../assets/svg/Frameclose.svg"
          /></span>
        </div>
      </div>
      <div class="kredit">
        <div class="txt-kredit-popup">
          <h6>Kartu Kredit/Debit</h6>
        </div>
        <div class="icon-kredit">
          <span @click="showkreditPopup"
            ><img src="../assets/svg/FrameVector-Right.svg"
          /></span>
        </div>
      </div>
      <div class="kredit">
        <div class="txt-kredit-popup">
          <h6>Bank BJB</h6>
        </div>
        <div class="icon">
          <img src="../assets/svg/logobank.svg" alt="" class="image" />
          <span @click="toTransfer"
            ><img class="image" src="../assets/svg/FrameVector-Right.svg"
          /></span>
        </div>
      </div>
      <div class="kredit">
        <div class="txt-kredit-popup">
          <h6>Cash</h6>
        </div>
        <div class="icon">
          <span @click="toCash"
            ><img class="image" src="../assets/svg/FrameVector-Right.svg"
          /></span>
        </div>
      </div>
      <!-- <div class="transfer">
        <div class="txt-bank">
          <h6>Bank Transfer</h6>
        </div>
        <div class="bank">
          <div class="logo-bank">
            <img src="../assets/svg/logobank.svg" alt="" class="logo-bjb" />
            <p>Bank BJB</p>
          </div>
          <span @click="toTransfer"
            ><img src="../assets/svg/FrameVector-Right.svg"
          /></span>
        </div>
      </div> -->
    </div>
  </div>

  <KreditPopup ref="kreditPopup" />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 25%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-inner {
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 100%;
}

.popup-inner {
  background: #ffffff;
  width: 90%;
  max-width: 536px;
  height: auto;
  border-radius: 10px;
  margin: 0 auto;
}

.nav-popup {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 24px 30px;
  border-bottom: 1px solid #d0d5dd;
  align-items: center;
}

@media (max-width: 640px) {
  .popup-inner {
    padding: 24px;
  }

  .nav-popup {
    padding: 16px;
  }
}

.image {
  margin: auto 0;
  height: 100%;
}
.icon {
  padding: auto;
}

.popup-inner span:hover {
  cursor: pointer;
}

.txt-nav-popup h5 {
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
}

.icon-close {
  justify-content: right;
  margin: auto 0;
}

.kredit {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding-inline: 20px;
  border-bottom: 1px solid #d0d5dd;
  align-items: center;
}

.txt-kredit-popup h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.transfer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding-inline: 20px;
  border-bottom: 1px solid #d0d5dd;
  align-items: center;
}
.txt-bank {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}

.transfer .txt-bank h6 {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  display: flex;
  padding-inline: 20px;
  line-height: -28px;
  letter-spacing: 0em;
  text-align: left;
  width: 132px;
  height: 28px;
}

.bank {
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #d0d5dd;
  justify-content: right;
}

.bank p {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 9px;
}

.bank .logo-bank {
  display: flex;
}

.bank .logo-bank .logo-bjb {
  margin-left: 8px;
}
</style>
