<script setup>
import { ref, defineExpose } from 'vue'
import KreditPopup from './kreditPopup.vue'

const kreditPopup = ref(null)
const showPopup = ref(false)


const showSelectPopup = () => {
    showPopup.value = true
}

const closePopup = () => {
    showPopup.value = false
}

const showkreditPopup = () => {
  kreditPopup.value.showKreditPopup()
}

defineExpose({
    showSelectPopup
})
</script>


<template>
    <div v-if="showPopup" class="popup">
        <div class="popup-inner">
            <div class="nav-popup">
                <div class="txt-nav-popup">
                    <h5> Pilih Pembayaran </h5>
                </div>
                <div class="icon-close">
                    <span @click="closePopup"><img src="../assets/svg/Frameclose.svg"></span>
                </div>
            </div>
            <div class="kredit">
                <div class="txt-kredit-popup">
                    <h6> Kartu Kredit/Debit </h6>
                </div>
                <div class="icon-kredit">
                    <span @click="showkreditPopup"><img src="../assets/svg/FrameVector-Right.svg"></span>
                </div>
            </div>
            <div class="transfer">
                <div class="txt-bank">
                    <h6> Bank Transfer </h6>
                </div>
                <div class="bank">
                    <div class="logo-bank">
                        <img src="../assets/svg/logobank.svg" alt="" class="logo-bjb">
                        <p>Bank BJB</p>
                    </div>
                    <span @click="toTransfer"><img src="../assets/svg/FrameVector-Right.svg"></span>
                </div>
            </div>
        </div>
    </div>

    <KreditPopup ref="kreditPopup" />
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

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

.popup-inner {
    background: #ffffff;
    width: 536px;
    height: 302px;
    border-radius: 10px;
}

.popup-inner span:hover {
    cursor: pointer;
}

.nav-popup {
    display: flex;
    justify-content: space-between;
    width: 536px;
    height: 80px;
    padding: 24px, 30px, 24px, 40px;
    border-bottom: 1px solid #d0d5dd;
    align-items: center;
}

.txt-nav-popup {
    margin-left: 40px;
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
    margin-right: 30px;
}

.kredit {
    display: flex;
    justify-content: space-between;
    width: 454px;
    height: 56px;
    margin-top: 27px;
    margin-left: 41px;
    gap: 244px;
    border-bottom: 1px solid #d0d5dd;
    align-items: center;
}

.txt-kredit-popup h6 {
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
}

.transfer .txt-bank {
    width: 132px;
    height: 28px;
    top: 183px;
    left: 41px;
}

.transfer .txt-bank h6 {
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 700;
    line-height: -28px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    margin-left: 41px;
    width: 132px;
    height: 28px;
}

.bank {
    width: 454px;
    height: 49px;
    margin-top: 7px;
    margin-left: 41px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d0d5dd;
    justify-content: space-between;
}

.bank p {
    font-family: 'Inter';
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