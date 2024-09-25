<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div>
          <navbar :isAdmin="false" />

          <div class="q-ma-xl"><h5>Tiket Janji Temu Keluarga Keraton</h5></div>
          <div class="flex w-full row q-ma-md">
            <div
              class="q-pa-md col h-fit q-mx-xl"
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
                        v-model="text"
                        label="Nama Lengkap"
                        stack-label
                        :dense="dense"
                      />
                    </div>
                    <div class="col q-ma-sm">
                      <q-input
                        outlined
                        v-model="text"
                        label="Email"
                        stack-label
                        :dense="dense"
                      />
                    </div>
                  </div>
                  <div class="col q-ma-sm">
                    <q-input
                      outlined
                      v-model="number"
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
                  icon="create_new_folder"
                  :done="step > 2"
                >
                  <div class="q-pa-md">
                    <q-date v-model="date" default-year-month="1964/08" />
                  </div>
                </q-step>

                <q-step
                  :name="3"
                  icon="add_comment"
                  title="Cek Detail Pemesanan"
                >
                  Try out different ad text to see what brings in the most
                  customers, and learn how to enhance your ads using features
                  like ad extensions. If you run into any problems with your
                  ads, find out how to tell if they're running and how to
                  resolve approval issues.
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn
                      @click="$refs.stepper.next()"
                      color="primary"
                      :label="step === 4 ? 'Finish' : 'Continue'"
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
            <div class="q-pa-md q-mx-xl col">
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
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>Kontak Pemesan</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>Keluarga Keraton</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>Hari & Tanggal</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>Jam</td>
                    <td>:</td>
                  </tr>
                </table>
              </q-card>
            </div>
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
    return {
      step: ref(1),
      date: ref(null),
    };
  },
};
</script>

<style lang="scss" scoped></style>
