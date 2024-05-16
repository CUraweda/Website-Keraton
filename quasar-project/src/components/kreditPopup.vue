<script setup>
import { ref, defineExpose } from 'vue'

const kreditPopup = ref(false)

const showKreditPopup = () => {
    kreditPopup.value = true
    showPopup.value = false
}

const closePopup = () => {
    kreditPopup.value = false
    showPopup.value = true
}

defineExpose({
    showKreditPopup
})
</script>

<template>
<div v-if="kreditPopup" class="popup">
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
            <div class="nav-kredit">
                <div class="txt-kredit-popup">
                    <h6> Kartu Kredit/Debit </h6>
                </div>
                <div class="icon-kredit">
                    <span @click="closePopup"><img src="../assets/svg/Frameclose.svg"></span>
                </div>
            </div>
            <label for=""> Name on card </label><br>
            <input type="text" placeholder="placeholder" required aria-required="true" aria-invalid="true"><br>
            <span class="error-message">Nama harus diisi</span><br><br>  
            <label for=""> Date on card </label><br>
            <input type="text" placeholder="placeholder"><br><br>
            <label for=""> Card number </label><br>
            <input type="text" placeholder="placeholder"><br><br>
            <label for=""> ZIP/Postal code </label><br>
            <input type="text" placeholder="placeholder"><br><br>
            <label for=""> Security code </label><br>
            <input type="text" placeholder="placeholder"><br><br>
            <button class="pilih-metode">
                <div class="txt-checkout">
                    <p>Pilih metode</p>
                </div>
            </button>
        </div>
    </div>
</div>
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
    height: 537px;
    top: 195px;
    left: 372px;
    border-radius: 10px 10px 0px 0px;
}

.popup-inner span:hover {
    cursor: pointer;
}

.nav-popup {
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    width: 536px;
    height: 80px;
    border-bottom: 1px solid #d0d5dd;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
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

.kredit{
    /* // background-color: aquamarine; */
    width: 469px;
    height: 429px;
    margin-top: 27px;
    margin-left: 41px;
    overflow-y: auto;
}

.nav-kredit {
    /* // background-color: aqua; */
    display: flex;
    justify-content: space-between;
    width: 454px;
    height: 56px;
    /* // margin-top: 27px;
    // margin-left: 28px;
    // margin-right: 41px; */
    gap: 230px;
    align-items: center;
    z-index: 100;
}

.txt-kredit-popup h6 {
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
}
input{
    width: 346px;
    height: 52px;
    padding: 0px 12px 0px 12px;
    border-radius: 6px;
    border: 1px solid #9D9D9D;
}

.pilih-metode{
    margin-top: 13px;
    background-color: goldenrod;
    width: 147px;
    height: 34px;
    /* // top: 472px;
    // left: 61px;
    // padding: 5px 25px 5px 25px; */
    border-radius: 5px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 700;
    line-height: 0px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    border: none;
}

.pilih-metode:hover{
    background-color: #c69720;
 }
/*// .btn{
//     width: 147px;
//     top: 295px;
//     left: 650px;
//     height: 34px;
//     margin-top: 22px;
//     padding: 5px;
//     gap: 10px;
//     border-radius: 10px;
//     border: none;
//     background-color: #DAA520;
//     box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
//     text-align: center;
//   }
//   .btn:hover{
//     background-color: #ffc122;
//   }
// .containerbtn{
//     display: flex;
//     flex-direction: column; 
//     align-items: center; 
//     margin-top: 22px; 
//   }
//   .btn-checkout{
//     align-items: center;
//     display: flex;
//     justify-content: space-between;
//   }
//   .txt-checkout{
//     margin-left: 10px;
//     width: 74px;
//     height: 24px;
//   }
//   .txt-checkout p{
//     color: white;
//     font-size: 16px;
//     font-weight: 700;
//     font-family: 'Raleway';
//   } */
</style>

<!-- <template>
    <div v-if="kreditPopup.value" class="popup">
        <div class="inner-Popup">
            <div class="nav-popup">
                asdwasdwasdwasdd
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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

	.popup-inner {
		background: #ffffff;
		
		width: 536px;
		height: 302px;
		border-radius: 10px;
    }
}

</style> -->