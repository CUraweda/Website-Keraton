<template>
  <div
    style="
      margin: 0 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    "
    class="background-footer"
  >
    <div class="flex q-gutter-sm">
      <q-img
        src="../assets/images/logo_keraton 1.png"
        style="width: 5rem; height: 5rem"
      />

      <div class="text-black" style="width: 1rem; font-size: 1.1rem">
        KERATON KESEPUHAN CIREBON
      </div>
    </div>

    <div style="display: flex; justify-content: space-between">
      <div style="display: flex" class="q-gutter-lg">
        <div class="q-gutter-y-sm">
          <div class="text-h6">Quick Links</div>
          <div>Beranda</div>
          <div>Sejarah</div>
          <div>Booking</div>
          <div>Objek Wisata</div>
        </div>

        <div class="q-gutter-y-sm">
          <div class="text-h6">Socials</div>
          <div>Whatsapp</div>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Threads</div>
        </div>

        <div class="q-gutter-y-sm">
          <div class="text-h6">Company</div>
          <div>About Us</div>
          <div>Partners</div>
          <div>Contact</div>
        </div>
      </div>

      <div>
        <div>Subscribes your email for updates!</div>
        <form @submit.prevent="subscribeToKeraton">
          <input
            type="email"
            placeholder="Enter your email"
            class="email-input"
            v-model="email"
          />

          <q-btn
            no-caps
            v-if="false"
            type="submit"
            label="Submit"
            style="width: 7rem; margin-left: 4vw"
          />
        </form>
      </div>
    </div>

    <div>Jalan Kasepuhan 43 Cirebon, Jawa Barat 45114</div>

    <div
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <div>@ 2024 Keraton Kasepuhan Cirebon</div>
      <div style="display: flex; gap: 1rem">
        <div>
          <img
            src="../assets/images/logo_keraton.png"
            alt=""
            class="img-collab"
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
</template>

<script>
export default {};
</script>

<style>
.email-input {
  width: 35vw;
  height: 3.5rem;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #123b32;
  color: white;
  font-size: 14px;
  text-align: left;
}

.email-input::placeholder {
  color: white; /* White placeholder color */
  font-weight: 600; /* Full opacity for the placeholder text */
}

.background-footer {
  background-image: url("../assets/images/batik.png");
}
</style>
