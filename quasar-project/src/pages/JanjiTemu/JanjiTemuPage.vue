<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div>
          <navbar :isAdmin="false" />

          <div class="q-ma-xl"><h5>Tiket Janji Temu Keluarga Keraton</h5></div>
          <div
            class="flex w-full q-ma-md res"
            style="overflow-x: auto; width: auto"
          >
            <div
              class="h-fit q-mx-sm res-card1"
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
                  <div class="q-pa-sm">
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
                    <div>
                      <q-select
                        v-model="selectedMonth"
                        :options="months"
                        label="Pilih Bulan"
                        style="width: 200px; padding: 0.5rem"
                      />
                      <q-select
                        v-model="selectedYear"
                        :options="years"
                        label="Pilih Tahun"
                        style="width: 200px; padding: 0.5rem"
                      />
                      <!-- <q-btn
                        label="Fetch Data"
                        @click="fetchData()"
                        color="primary"
                      /> -->
                    </div>
                    <q-select
                      outlined
                      v-model="selectTime"
                      :options="timeAvailible"
                      :dense="false"
                      style="width: fit-content"
                      :options-dense="false"
                    >
                      <template v-slot:prepend>
                        <q-icon name="event" />
                      </template>
                    </q-select>
                    <div
                      class="q-gutter-sm justify-around date"
                      style="width: 100%; justify-items: center; padding: 5px"
                    >
                      <q-date
                        v-model="dates"
                        mask="YYYY-MM-DD"
                        color="blue"
                        :readonly="true"
                      />
                      <q-time
                        v-model="dateTime"
                        mask="HH:mm"
                        color="blue"
                        :readonly="true"
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
                          <td>: {{ data.booker_name }}</td>
                        </tr>
                        <tr>
                          <td>Kontak Pemesan</td>
                          <td>: {{ data?.booker_phone }}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>: {{ data.booker_email }}</td>
                        </tr>
                        <tr>
                          <td>Hari & Tanggal</td>
                          <td>
                            :
                            {{
                              data?.datetime ? data?.datetime.split("T")[0] : ""
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td>Jam</td>
                          <td>
                            :
                            {{
                              data?.datetime
                                ? data?.datetime.split("T")[1].substring(0, 5)
                                : ""
                            }}
                          </td>
                        </tr>
                      </table>
                    </q-card>
                  </div>
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn
                      @click="
                        $refs.stepper.next(),
                          save(),
                          step === 3 ? goToCheckout() : null
                      "
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
                    <td>: {{ data.booker_name }}</td>
                  </tr>
                  <tr>
                    <td>Kontak Pemesan</td>
                    <td>: {{ data?.booker_phone }}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>: {{ data.booker_email }}</td>
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
                      {{ data?.datetime ? data?.datetime?.split("T")[0] : "" }}
                    </td>
                  </tr>
                  <tr>
                    <td>Pukul</td>
                    <td>
                      :
                      {{
                        data?.datetime
                          ? data?.datetime?.split("T")[1].substring(0, 5)
                          : ""
                      }}
                    </td>
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
import { ref, watch } from "vue";
import navbar from "../../components/NavbarNew.vue";

export default {
  components: { navbar },
  setup() {
    const date = ref(null);
    const dateRange = ref({ from: null, to: null });
    const dates = ref();
    const dateTime = ref("");
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
      // dateTime.value = ` ${hours}:${minutes}`;
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
      timeAvailible: ref([]),
      selectTime: ref("Pilih Jadwal"),
      in_used: ref(false),
      availabilityId: ref(),
      setDateSelect: ref(""),
      selectedMonth: ref(null),
      selectedYear: ref(null),
      months: [
        { label: "Januari", value: 1 },
        { label: "Februari", value: 2 },
        { label: "Maret", value: 3 },
        { label: "April", value: 4 },
        { label: "Mei", value: 5 },
        { label: "Juni", value: 6 },
        { label: "Juli", value: 7 },
        { label: "Agustus", value: 8 },
        { label: "September", value: 9 },
        { label: "Oktober", value: 10 },
        { label: "November", value: 11 },
        { label: "Desember", value: 12 },
      ],
      years: Array.from({ length: 10 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { label: year.toString(), value: year.toString() };
      }),
    };
  },
  mounted() {
    this.getCurrentDate();
    this.fetchData();
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
    selectedMonth(newMonth) {
      if (newMonth && this.selectedYear) {
        this.fetchData();
      }
    },
    selectedYear(newYear) {
      if (newYear && this.selectedMonth) {
        this.fetchData();
      }
    },
    name(newName) {
      // Update nama di sessionStorage saat berubah
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {}; // Cek apakah user sudah ada atau tidak
      user.booker_name = newName;
      localStorage.setItem("user", JSON.stringify(user)); // Simpan objek user yang diperbarui
    },
    email(newEmail) {
      // Update email di sessionStorage saat berubah
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {}; // Cek apakah user sudah ada atau tidak
      user.booker_email = newEmail;
      localStorage.setItem("user", JSON.stringify(user)); // Simpan objek user yang diperbarui
    },
    selectTime(newDate) {
      this.dates = newDate.value.split("T")[0];
      this.dateTime = newDate.value.split("T")[1].substring(0, 5);
      this.availabilityId = newDate.id;
    },
  },
  methods: {
    async fetchData() {
      try {
        const [year, month] = this.dates.split("-"); // Mengambil tahun dan bulan dari dates
        const response = await this.$api.get(
          `/availability-time?month=${this.selectedMonth.value}&year=${this.selectedYear.value}&only_active=0`
        );

        console.log(response.data.data);
        this.timeAvailible = response.data.data.map((item) => ({
          label:
            "Tanggal " +
            item.datetime.split("T")[0] +
            " Pukul " +
            item.datetime.split("T")[1].split(".")[0],
          value: item.datetime,
          id: item.id,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    reset() {
      this.name = "";
      this.email = "";
    },
    save() {
      const user = {
        booker_name: this.name,
        booker_email: this.email,
        datetime: this.selectTime?.value,
        booker_phone: this.telp,
        availabilityId: this.availabilityId,
      };
      this.data = user;
      console.log(user);

      sessionStorage.setItem("TemuItem", JSON.stringify(user));
      // this.reset();  // Reset jika diperlukan
    },
    goToCheckout() {
      this.$router.push("/user/checkout/janji-temu");
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
.date {
  display: block;
  margin: auto;
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
  .date {
    display: flex;
    margin: auto;
  }
}
</style>
