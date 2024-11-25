<script setup>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

const detail = ref(false);
const cara = ref(false);
const selectedStatus = ref("sudahDigunakan");
const statusSelected = ref(false);
</script>

<template>
  <div>
    <navbar />
    <div>
      <h1 class="text-h3 text-center">History transaksi</h1>
    </div>
    <div class="flex items-center justify-center q-mt-md">
      <div class="flex wrap items-center justify-center q-gutter-md">
        <q-input
          outlined
          v-model="search.s"
          type="search"
          label="Search"
          style="width: 15rem"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-input outlined v-model="search.d" type="date" style="width: 15rem" />

        <select
          v-model="search.stat"
          @change="statusSelected = true"
          class="custom-select"
        >
          <option value="ALL">Semua Status</option>
          <option value="SUDAH_DIGUNAKAN">Sudah digunakan</option>
          <option value="DAPAT_DIGUNAKAN">Dapat digunakan</option>
          <option value="EXPIRED">Expired</option>
          <option value="MENUNGGU_PEMBAYARAN">Menunggu pembayaran</option>
        </select>
      </div>
    </div>

    <div
      v-for="transaction in historyDatas"
      :key="transaction.status"
      class="card-history shadow-2"
    >
      <div class="q-mt-xl">
        <q-card class="my-card q-mt-md" flat bordered>
          <q-card-section>
            <div class="flex items-center q-gutter-sm">
              <q-icon name="local_activity" color="orange" size="1.2rem" />
              <div class="text-bold">Tiket</div>
              <div style="color: #5e5e5e">{{ transaction.date }}</div>
              <q-badge :color="transaction.class">{{
                transaction.label
              }}</q-badge>
            </div>
          </q-card-section>

          <q-card-section horizontal class="q-py-md">
            <q-img src="../assets/images/img-1.jpg" class="image-card" />

            <div class="q-mx-md" style="width: 100%">
              <div>
                <div class="text-h6 title-card">
                  {{ transaction.detailDatas.titles }}
                </div>
                <q-badge
                  rounded
                  :color="badge.badgeColor"
                  v-for="(badge, i) in transaction.detailDatas.data"
                  :key="i"
                  >{{ badge.name }}</q-badge
                >
                <div>
                  {{
                    `${transaction.detailDatas.data[0]?.quantity} tiket x Rp. ${transaction.detailDatas.data[0]?.price}`
                  }}
                </div>

                <div v-if="transaction.detailDatas.length - 1 != 0">
                  {{ `+${transaction.detailDatas.length - 1} tiket lainnya` }}
                </div>
              </div>

              <div class="q-mt-lg">
                <div>Total belanja</div>
                <div class="flex items-center justify-between">
                  <div class="text-bold">
                    Rp. {{ formatRupiah(transaction.paidTotal) }}
                  </div>

                  <div class="flex items-center q-gutter-md">
                    <div
                      style="color: #daa520"
                      class="cursor-pointer"
                      @click="openDetailDialog(transaction)"
                    >
                      Detail Transaksi
                    </div>
                    <div
                      class="cursor-pointer"
                      @click="caraBayar = !caraBayar"
                      v-if="transaction.status === 'menungguPembayaran'"
                    >
                      Cara Bayar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div ref="printSection" style="display: none">
      <div ref="data" v-if="detailData.transactionNo">
        <div class="flex items-center justify-between">
          <div>No. Transaksi</div>
          <div>{{ detailData.transactionNo }}</div>
        </div>
        <div class="flex items-center justify-between q-mt-md">
          <div>Status Transaksi</div>
          <div>
            <q-badge color="blue" ref="pdfContainer">
              {{ detailData.status.label }}
            </q-badge>
          </div>
        </div>
        <div class="flex items-center justify-between q-mt-md">
          <div>Tanggal Pemesanan</div>
          <div>{{ formatDate(detailData.planDate) }}</div>
        </div>

        <div class="text-h6 text-bold q-mt-xl">Detail Tiket</div>
        <div class="q-mt-md">
          <!-- <img :src="detailData.image" style="width: 10rem; height: 10rem" /> -->
          <div>
            <!-- <div>{{ detailData.name }}</div>
            <div>{{ detailData.price }}</div> -->

            <q-table
              bordered
              :rows="detailData.details"
              :columns="columns"
              hide-bottom
              :rows-per-page-options="[0]"
              row-key="name"
              class="q-mt-md"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="Name" :props="props">
                    {{ props.row.name }}
                  </q-td>
                  <q-td key="Price" :props="props">
                    {{ props.row.price }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>

        <div class="text-h6 text-bold q-mt-xl">Info Pembayaran</div>
        <div class="flex items-center justify-between q-mt-md">
          <div>Pemesanan</div>
          <div>{{ formatDate(detailData.createdDate) }}</div>
        </div>

        <div class="flex items-center justify-between q-mt-md">
          <div>Metode Pembayaran</div>
          <div>{{ detailData.payMethod }}</div>
        </div>

        <div class="flex items-center justify-between q-mt-md">
          <div>Total Harga({{ detailData.totalAmount }} Tiket)</div>
          <div>{{ detailData.total }}</div>
        </div>

        <div class="flex items-center justify-between q-mt-md">
          <div>Biaya Layanan</div>
          <div>{{ detailData.fee }}</div>
        </div>

        <div class="flex items-center justify-between q-mt-md">
          <div>Potongan Diskon</div>
          <div>{{ detailData.discountCutTotal }}</div>
        </div>

        <div class="flex items-center justify-between q-mt-md">
          <div>Sisa Bayar</div>
          <div>{{ detailData.unpaidTotal }}</div>
        </div>

        <div style="color: red" class="text-subtitle2">*Dibayar Ditempat</div>

        <div class="flex items-center justify-between q-mt-xl">
          <div class="text-bold">Total Biaya</div>
          <div>{{ detailData.paidTotal }}</div>
        </div>

        <div class="flex column justify-center items-center">
          <div>Affiliated By:</div>
          <div
            class="flex items-center q-gutter-md justify-center q-mt-md q-mx-md"
          >
            <div>
              <img src="../assets/images/bjb.svg" alt="" class="img-collab" />
            </div>
            <div>
              <img src="../assets/images/1 931.svg" alt="" class="img-collab" />
            </div>
            <div>
              <img
                src="../assets/images/telkom.svg"
                alt=""
                class="img-collab"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-dialog v-model="detailDialog">
      <q-card style="width: 50rem">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Detail Transaksi</div>
          <q-space />
          <q-btn icon="local_activity" flat round dense @click="printPDF">
            <q-tooltip> Generate PDF </q-tooltip>
          </q-btn>
          <q-btn icon="mail" flat round dense @click="sendEmail">
            <q-tooltip> Send to Email </q-tooltip>
          </q-btn>
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            <div class="flex items-center justify-between">
              <div>No. Transaksi</div>
              <div>{{ detailData.transactionNo }}</div>
            </div>
            <div class="flex items-center justify-between q-mt-md">
              <div>Status Transaksi</div>
              <div>
                <q-badge color="blue" ref="pdfContainer">
                  {{ detailData.status.label }}
                </q-badge>
              </div>
            </div>
            <div class="flex items-center justify-between q-mt-md">
              <div>Tanggal Pemesanan</div>
              <div>{{ formatDate(detailData.planDate) }}</div>
            </div>

            <div class="text-h6 text-bold q-mt-xl">Detail Tiket</div>
            <div
              class="flex q-mt-md q-gutter-x-md"
              v-for="(detailData, i) in detailData.details"
              :key="i"
            >
              <img
                :src="detailData.image"
                style="width: 10rem; height: 10rem"
              />
              <div>
                <div>{{ detailData.name }}</div>
                <div>{{ detailData.price }}</div>
              </div>
            </div>

            <div class="text-h6 text-bold q-mt-xl">Info Pembayaran</div>
            <div class="flex items-center justify-between q-mt-md">
              <div>Pemesanan</div>
              <div>{{ formatDate(detailData.createdDate) }}</div>
            </div>

            <div class="flex items-center justify-between q-mt-md">
              <div>Metode Pembayaran</div>
              <div>{{ detailData.payMethod }}</div>
            </div>

            <div class="flex items-center justify-between q-mt-md">
              <div>Total Harga({{ detailData.totalAmount }} Tiket)</div>
              <div>{{ detailData.total }}</div>
            </div>

            <div class="flex items-center justify-between q-mt-md">
              <div>Biaya Layanan</div>
              <div>{{ detailData.fee }}</div>
            </div>

            <div class="flex items-center justify-between q-mt-md">
              <div>Potongan Diskon</div>
              <div>{{ detailData.discountCutTotal }}</div>
            </div>

            <div class="flex items-center justify-between q-mt-md">
              <div>Sisa Bayar</div>
              <div>{{ detailData.unpaidTotal }}</div>
            </div>
            <div style="color: red" class="text-subtitle2">
              *Dibayar Ditempat
            </div>

            <div class="flex items-center justify-between q-mt-xl">
              <div>Total Biaya</div>
              <div>{{ detailData.paidTotal }}</div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="caraBayar">
      <q-card style="width: 50rem">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h4">Cara Pembayaran</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="q-pa-md">
            <q-list bordered>
              <q-expansion-item
                group="somegroup"
                label="BJB Virtual Account"
                default-opened
              >
                <q-card>
                  <q-card-section>
                    <div class="flex justify-between">
                      <div>
                        <div>Nomor Virtual Account</div>
                        <div>1892379812732189</div>
                      </div>

                      <q-btn flat>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          @click="salinNomor('1892379812732189')"
                          fill="#DAA520"
                        >
                          <path
                            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                          />
                        </svg>
                      </q-btn>
                    </div>

                    <!-- <div class="flex q-mt-md justify-between">
                      <div class="flex items-center">
                        <q-icon name="mdi-help-circle" />
                        <p class="text-caption text-grey q-ml-xs">
                          Nomor Virtual Account adalah...
                        </p>
                      </div>
                      <q-btn flat class="text-red">Salin</q-btn>
                    </div> -->
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item group="somegroup" label="Bank Mandiri">
                <q-card>
                  <q-card-section>
                    <div class="flex justify-between">
                      <div>
                        <div>Nomor Virtual Account</div>
                        <div>1892379812732189</div>
                      </div>

                      <q-btn flat>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          @click="salinNomor('1892379812732189')"
                          fill="#DAA520"
                        >
                          <path
                            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                          />
                        </svg>
                      </q-btn>
                    </div>

                    <!-- <div class="flex q-mt-md justify-between">
                      <div class="flex items-center">
                        <q-icon name="mdi-help-circle" />
                        <p class="text-caption text-grey q-ml-xs">
                          Nomor Virtual Account adalah...
                        </p>
                      </div>
                      <q-btn flat class="text-red">Salin</q-btn>
                    </div> -->
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="somegroup"
                label="Bank Permata"
                :default-opened="false"
              >
                <q-card>
                  <q-card-section>
                    <div class="flex justify-between">
                      <div>
                        <div>Nomor Virtual Account</div>
                        <div>1892379812732189</div>
                      </div>

                      <q-btn flat>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          @click="salinNomor('1892379812732189')"
                          fill="#DAA520"
                        >
                          <path
                            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                          />
                        </svg>
                      </q-btn>
                    </div>

                    <!-- <div class="flex q-mt-md justify-between">
                      <div class="flex items-center">
                        <q-icon name="mdi-help-circle" />
                        <p class="text-caption text-grey q-ml-xs">
                          Nomor Virtual Account adalah...
                        </p>
                      </div>
                      <q-btn flat class="text-red">Salin</q-btn>
                    </div> -->
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  components: { navbar },
  data() {
    return {
      columns: [
        { name: "Name", align: "left", label: "Name", field: "name" },
        {
          name: "Price",
          align: "left",
          label: "Qty - Price",
          field: "price",
        },
      ],
      user: JSON.parse(localStorage.getItem(env.USER_STORAGE_NAME)),
      caraBayar: false,
      detailDialog: ref(false),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
      historyDatas: ref([]),
      rawHistoryDatas: ref({}),
      detailData: ref({}),
      search: ref({
        s: undefined,
        d: undefined,
        stat: "ALL",
      }),
      notification: {
        message: "",
        type: "info",
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  components: {
    Notification,
  },
  watch: {
    "search.s": "fetchData",
    "search.d": "fetchData",
    "search.stat": "fetchData",
  },
  methods: {
    showNotif(msg, status) {
      new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
      });
    },
    printPDF() {
      const element = this.$refs.data;
      const options = {
        margin: 2,
        filename: `Report ${new Date().toISOString().split("T")[0]}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          putOnlyUsedFonts: true,
          scale: 0.8,
        },
      };
      html2pdf()
        .from(element)
        .set(options)
        .outputPdf()
        .get("pdf")
        .then((pdfObj) => {
          pdfObj.autoPrint();
          window.open(pdfObj.output("bloburl"));
        });
    },
    salinNomor(payload) {
      try {
        navigator.clipboard.writeText(payload).then(() => {
          this.showNotif("Nomor Virtual telah disalin", "success");
        });
      } catch (err) {
        console.log(err);
      }
    },
    async fetchData() {
      try {
        let endpointLink = "trans?";
        if (this.search.s) endpointLink += `s=${this.search.s}&`;
        if (this.search.d)
          endpointLink += `d=${new Date(this.search.d).toISOString()}&`;
        if (this.search.stat && this.search.stat != "ALL")
          endpointLink += `stat=${this.search.stat}&`;

        // Menghapus karakter & terakhir jika ada
        if (endpointLink.endsWith("&")) {
          endpointLink = endpointLink.slice(0, -1);
        }

        const response = await this.$api.get(endpointLink, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        if (response.status != 200) throw Error(response.data.message);

        // Reset historyDatas sebelum mengisinya kembali
        this.historyDatas = [];

        for (let transaction of response.data.data) {
          let planDate = new Date(transaction.plannedDate);
          planDate = new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(planDate);

          this.rawHistoryDatas[transaction.id] = transaction.detailTrans;
          this.historyDatas.push({
            ...this.simplifyDetail(transaction.detailTrans),
            ...this.simplifyStatus(transaction.status),
            date: planDate,
            total: transaction.total,
            raw: transaction,
            paidTotal: transaction.paidTotal,
            // actions: [
            //   { label: "Lihat detail", handler:() },
            //   { label: "|" },
            //   { label: "Cara Pembayaran", handler: openMenungguPembayaran() },
            // ]
          });
        }
        console.log(this.historyDatas);
      } catch (err) {
        console.log(err);
      }
    },
    async sendEmail() {
      try {
        if (!this.detailData.transactionNo) throw Error("Specify Transaction");
        const response = await this.$api.get(
          `email/invoice/${this.detailData.transactionNo}`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status != 200) throw Error(response.data.message);
        this.showNotif(
          `Email sedang dikirimkan ke ${this.user.email}, mohon ditunggu`,
          "success"
        );
        this.openDetailDialog();
      } catch (err) {
        console.log(err);
      }
    },

    openDetailDialog(rowData) {
      this.detailDialog = !this.detailDialog;
      if (!this.detailDialog) return (this.detailData = {});
      rowData = rowData.raw;
      const total = parseFloat(rowData.total);
      let totalAmount = 0;
      this.detailData = {
        transactionNo: rowData.id,
        status: this.simplifyStatus(rowData.status),
        planDate: rowData.plannedDate,
        createdDate: rowData.createdDate,
        payMethod: rowData.method,
        total: this.formatRupiah(total - rowData.additionalFee),
        fee: this.formatRupiah(rowData.additionalFee),
        discountCutTotal: rowData.discountCutTotal,
        unpaidTotal: rowData.unpaidTotal,
        paidTotal: this.formatRupiah(rowData.paidTotal),
        totalTransaction: this.formatRupiah(total),
        details: rowData.detailTrans.map((detail) => {
          const itemData = detail.order ? detail.order : detail.event;
          console.log(detail);
          totalAmount += detail.amount;
          return {
            image: itemData.image,
            name: itemData.name,
            price: `${detail.amount} x ${
              itemData.price < 1
                ? "Free"
                : "Rp" + this.formatRupiah(itemData.price)
            }`,
          };
        }),
        totalAmount,
      };
      console.log(this.detailData);
    },
    openDetailTransaksi(row) {
      detail.value = !detail.value;
    },
    simplifyDetail(detail) {
      let detailDatas = {
        length: 0,
        data: [],
        titles: "",
      };
      for (let detailData of detail) {
        let contentToPush = {};
        if (detailData.order) {
          const orderData = detailData.order;
          contentToPush["price"] = this.formatRupiah(orderData.price);
          contentToPush["quantity"] = detailData.amount;
          contentToPush["name"] = orderData.name;
          contentToPush["badgeColor"] = orderData.orderSubTypeId
            ? "blue"
            : "orange";
          detailDatas.titles += orderData.name + " + ";
        } else {
          const eventData = detailData.event;
          contentToPush["price"] = this.formatRupiah(eventData.price);
          contentToPush["quantity"] = detailData.amount;
          contentToPush["name"] = eventData.name;
          contentToPush["badgeColor"] = "green";
          detailDatas.titles += eventData.name + " + ";
        }
        detailDatas.data.push(contentToPush);
      }
      detailDatas.titles = detailDatas.titles.slice(0, -2);
      detailDatas.length = detail.length;
      return { detailDatas };
    },
    simplifyStatus(status) {
      let dataToReturn = {};
      switch (status) {
        case "SUDAH_DIGUNAKAN":
          dataToReturn["status"] = "sudahDigunakan";
          dataToReturn["label"] = "Sudah Digunakan";
          dataToReturn["class"] = "sudah__digunakan";
          dataToReturn["cardClass"] = "card-1";
          break;
        case "DAPAT_DIGUNAKAN":
          dataToReturn["status"] = "dapatDigunakan";
          dataToReturn["label"] = "Dapat Digunakan";
          dataToReturn["class"] = "dapat__digunakan";
          dataToReturn["cardClass"] = "card-2";
          break;
        case "EXPIRED":
          dataToReturn["status"] = "expired";
          dataToReturn["label"] = "Expired";
          dataToReturn["class"] = "expired";
          dataToReturn["cardClass"] = "card-3";
          break;
        case "MENUNGGU_PEMBAYARAN":
          dataToReturn["status"] = "menungguPembayaran";
          dataToReturn["label"] = "Menunggu Pembayaran";
          dataToReturn["class"] = "menunggu__pembayaran";
          dataToReturn["cardClass"] = "card-4";
          break;
        default:
          break;
      }
      return dataToReturn;
    },
    formatRupiah(price) {
      if (price === 0) return "Free";
      return (price / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3,
      });
    },
    formatDate(date) {
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

div {
  font-family: Raleway;
}

select {
  width: 15rem;
  height: 3.6rem;
  border: 1px solid rgb(188, 188, 188);
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
}

option {
  padding: 10px;
  background-color: #ffffff;
  color: #333;
}

option:hover {
  background-color: #ddd;
}

option:selected {
  font-weight: bold;
}

.image-card {
  width: 15rem;
  height: 7rem;
  margin: 0 1rem;
}

.title-card {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 25rem;
}

.card-history {
  margin: 0 16.5rem;
}

@media screen and (max-width: 1200px) {
  .image-card {
    width: 10rem;
    height: 5rem;
  }

  .title-card {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10rem;
  }

  .card-history {
    margin: 0 1rem;
  }
}
</style>
