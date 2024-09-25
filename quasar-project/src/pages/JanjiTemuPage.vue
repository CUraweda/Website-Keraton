<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div>
          <navbar :isAdmin="false" />

          <div class="q-ma-xl"><h5>Tiket Janji Temu Keluarga Keraton</h5></div>
          <div class="flex w-full q-ma-md res">
            <div
              class="q-pa-md h-fit q-mx-sm res-card1"
              style="text-wrap: wrap; overflow: hidden"
            >
              <q-stepper
                v-model="step"
                ref="stepper"
                alternative-labels
                color="primary"
                animated
                style="width: 100%; box-shadow: none"
              >
                <q-step
                  :name="1"
                  title="Detail Pemesan"
                  icon="settings"
                  :done="step > 1"
                >
                  <div class="row">
                    <div class="col q-ma-sm">
                      <q-input
                        outlined
                        v-model="name"
                        label="Nama Lengkap"
                        stack-label
                        :dense="dense"
                      />
                    </div>
                    <div class="col q-ma-sm">
                      <q-input
                        outlined
                        v-model="email"
                        label="Email"
                        stack-label
                        :dense="dense"
                      />
                    </div>
                  </div>
                  <div class="col q-ma-sm">
                    <q-input
                      outlined
                      v-model="telp"
                      label="No Telp"
                      stack-label
                      :dense="dense"
                    />
                  </div>
                </q-step>

                <q-step
                  :name="2"
                  title="Cek & PIlih Jadwal"
                  caption="Optional"
                  icon="calendar_month"
                  :done="step > 2"
                >
                  <!-- <div class="q-pa-md">
                    <q-date v-model="dateRange" landscape range />
                  </div> -->
                  <div class="q-pa-md">
                    <div class="q-gutter-sm">
                      <!-- <q-badge color="teal"> Model: {{ dateTime }} </q-badge> -->
                      <!-- <q-badge
                        color="purple"
                        text-color="white"
                        class="q-ma-md"
                      >
                        Mask: YYYY-MM-DD HH:mm
                      </q-badge> -->
                    </div>

                    <div
                      class="q-gutter-sm row justify-around"
                      style="
                        width: 100%;
                        overflow-x: auto;
                        padding: 5px;
                        display: flex;
                      "
                    >
                      <q-date
                        v-model="dates"
                        mask="YYYY-MM-DD"
                        color="blue"
                        class="col"
                      />
                      <q-time
                        v-model="dateTime"
                        mask="HH:mm"
                        color="blue"
                        class="col"
                      />
                    </div>
                  </div>
                </q-step>

                <q-step :name="3" icon="history" title="Cek Detail Pemesanan">
                  <div class="q-pa-md q-mx-sm">
                    <q-card
                      class="my-card text-black q-pa-md"
                      style="background: white"
                    >
                      <q-card-section
                        class="q-pt-none"
                        style="font-size: larger; font-weight: bold"
                      >
                        Detail Pemesanan
                      </q-card-section>
                      <table style="gap: 5px; display: block">
                        <tr>
                          <td>Nama Lengkap</td>
                          <td>: {{ data.name }}</td>
                        </tr>
                        <tr>
                          <td>Kontak Pemesan</td>
                          <td>: {{ data?.telp }}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>: {{ data.email }}</td>
                        </tr>
                        <tr>
                          <td>Hari & Tanggal</td>
                          <td>
                            :
                            <!-- {{
                        data.date
                          ? data.date?.from + " s/d " + data.date?.to
                          : ""
                      }} -->
                            {{ data?.date }}
                          </td>
                        </tr>
                        <tr>
                          <td>Jam</td>
                          <td>: {{ data?.Time }}</td>
                        </tr>
                      </table>
                    </q-card>
                  </div>
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn
                      @click="$refs.stepper.next(), save()"
                      color="primary"
                      :label="step === 3 ? 'Finish' : 'Continue'"
                    />
                    <q-btn
                      v-if="step > 1"
                      flat
                      color="primary"
                      @click="$refs.stepper.previous()"
                      label="Back"
                      class="q-ml-sm"
                    />
                  </q-stepper-navigation>
                </template>
              </q-stepper>
            </div>
            <div class="q-pa-md q-mx-sm res-card2" v-if="step !== 3">
              <q-card
                class="my-card text-black q-pa-md"
                style="background: white"
              >
                <q-card-section
                  class="q-pt-none"
                  style="font-size: larger; font-weight: bold"
                >
                  Detail Pemesanan
                </q-card-section>
                <table style="gap: 5px; display: block">
                  <tr>
                    <td>Nama Lengkap</td>
                    <td>: {{ data.name }}</td>
                  </tr>
                  <tr>
                    <td>Kontak Pemesan</td>
                    <td>: {{ data?.telp }}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>: {{ data.email }}</td>
                  </tr>
                  <tr>
                    <td>Hari & Tanggal</td>
                    <td>
                      :
                      <!-- {{
                        data.date
                          ? data.date?.from + " s/d " + data.date?.to
                          : ""
                      }} -->
                      {{ data?.date }}
                    </td>
                  </tr>
                  <tr>
                    <td>Jam</td>
                    <td>: {{ data?.Time }}</td>
                  </tr>
                </table>
              </q-card>
            </div>
            <div v-else class="q-pa-md q-mx-sm res-card2"></div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";

export default {
  components: { navbar },
  setup() {
    const date = ref(null);
    const dateRange = ref({ from: null, to: null });
    const dates = ref();
    const dateTime = ref();
    const getCurrentDate = () => {
      const now = new Date();
      date.value = now.toISOString().substring(0, 10); // Format YYYY-MM-DD
      dateRange.value = { from: date.value, to: date.value };
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      dates.value = `${year}-${month}-${day}`;
      dateTime.value = ` ${hours}:${minutes}`;
    };
    getCurrentDate();
    return {
      date,
      dates,
      getCurrentDate,
      dateRange,
      dateTime,
      step: ref(1),
    };
  },
  data() {
    return {
      name: ref(""),
      email: ref(""),
      // dateRange: ref({ from: "", to: "" }),
      telp: ref(""),
      data: ref([]),
    };
  },
  mounted() {
    this.getCurrentDate();
    // Cek apakah ada user di sessionStorage
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.name = user.name;
      this.email = user.email;
      if (user.telp) this.telp = user.telp;
      if (user.date) this.dateRange = user.date;
    }
  },
  watch: {
    name(newName) {
      // Update nama di sessionStorage saat berubah
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {}; // Cek apakah user sudah ada atau tidak
      user.name = newName;
      localStorage.setItem("user", JSON.stringify(user)); // Simpan objek user yang diperbarui
      console.log(user.name);
    },
    email(newEmail) {
      // Update email di sessionStorage saat berubah
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {}; // Cek apakah user sudah ada atau tidak
      user.email = newEmail;
      localStorage.setItem("user", JSON.stringify(user)); // Simpan objek user yang diperbarui
      console.log(`Email: ${user.email}`);
    },
    // dateRange(newDate) {
    //   const user = sessionStorage.getItem("user")
    //     ? JSON.parse(sessionStorage.getItem("user"))
    //     : {};
    //   user.date = newDate;
    //   sessionStorage.setItem("user", JSON.stringify(user)); // Simpan objek user yang diperbarui
    //   console.log(`date: ${user.date}`);
    // },
  },
  methods: {
    reset() {
      this.name = "";
      this.email = "";
    },
    save() {
      const user = {
        name: this.name,
        email: this.email,
        date: this.dates,
        Time: this.dateTime,
        telp: this.telp,
      };
      this.data = user;

      sessionStorage.setItem("TemuItem", JSON.stringify(user));
      console.log(user);
      // this.reset();  // Reset jika diperlukan
    },
  },
};
</script>

<style lang="scss" scoped>
.res {
  display: block;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1022px) {
  .res {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .res-card1 {
    width: 50%;
  }
  .res-card2 {
    width: 40%;
  }
  .res-cardFull {
    width: 80%;
  }
}
</style>
