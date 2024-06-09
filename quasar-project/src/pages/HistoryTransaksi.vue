<script setup>
import { ref } from "vue";
import navbar from "../components/NavbarNew.vue";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

const detail = ref(false);
const cara = ref(false);
const selectedStatus = ref("sudahDigunakan");
const statusSelected = ref(false);

const closeDetailTransaksi = () => {
  detail.value = false;
};

const openMenungguPembayaran = () => {
  cara.value = !cara.value;
};

const closeMenungguPembayaran = () => {
  cara.value = false;
};
</script>

<template>
  <div class="all-content">
    <div>
      <nav class="navbar">
        <navbar />
      </nav>
      <div class="content">
        <div>
          <h1 class="title">History transaksi</h1>
        </div>
        <div class="container">
          <div class="form-input">
            <div class="search">
              <label for="search" class="search-label">
                <img src="../assets/svg/search.svg" class="search-icon" />
                <input
                  type="search"
                  v-model="search.s"
                  id="search"
                  name="search"
                  placeholder="Cari transaksi"
                  class="Pencarian"
                />
              </label>
            </div>
            <div class="date">
              <input
                type="date"
                v-model="search.d"
                class="tanggal"
                placeholder="Pilih tanggal"
              />
            </div>
            <div class="status">
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
        </div>
      </div>
      <div
        v-for="transaction in historyDatas"
        :key="transaction.status"
        class="tabel"
      >
        <div :class="transaction.cardClass">
          <div class="tiket">
            <div class="tiket__header-container">
              <img
                src="../assets/images/Vector.png"
                alt="icon-tiket"
                class="icon-tiket"
              />
              <p>Tiket</p>
              <label>{{ transaction.date }}</label>
              <p :class="transaction.class">{{ transaction.label }}</p>
            </div>
            <div class="tiket__content">
              <img src="../assets/images/img-1.jpg" alt="" />
              <div class="tiket__content-details">
                <h6>{{ transaction.detailDatas.titles }}</h6>
                <div class="flex items-center q-gutter-xs">
                  <q-badge
                    rounded
                    :color="badge.badgeColor"
                    v-for="(badge, i) in transaction.detailDatas.data"
                    :key="i"
                    >{{ badge.name }}</q-badge
                  >
                </div>
                <div class="label">
                  <label class="labelharga">{{
                    `${transaction.detailDatas.data[0].quantity} tiket x Rp. ${transaction.detailDatas.data[0].price}`
                  }}</label
                  ><br />
                  <label v-if="transaction.detailDatas.length - 1 != 0">{{
                    `+${transaction.detailDatas.length - 1} tiket lainnya`
                  }}</label>
                </div>
                <div class="total">
                  <div class="info">
                    <p class="total__belanja">Total belanja</p>
                    <p class="hrga">
                      Rp. {{ formatRupiah(transaction.total) }}
                    </p>
                  </div>
                  <div class="actions">
                    <a @click="openDetailDialog(transaction)">
                      <p class="bantu">Detail Transaksi</p>
                    </a>
                    <p class="bantu">|</p>
                    <a
                      @click="caraBayar = !caraBayar"
                      class="bantuan"
                      v-if="transaction.status === 'menungguPembayaran'"
                    >
                      <p class="bantu">Cara Bayar</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="display: none">
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
          <div
            class="flex q-mt-md q-gutter-x-md"
            v-for="(detailData, i) in detailData.details"
            :key="i"
          >
            <q-img :src="detailData.image" style="width: 10rem" />
            <div>
              <div>{{ detailData.name }}</div>
              <div>{{ detailData.price }}</div>
              <div>dsajkldsajlkdsa</div>
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

          <div class="flex items-center justify-between q-mt-xl">
            <div>Total Biaya</div>
            <div>{{ detailData.totalTransaction }}</div>
          </div>
        </div>
      </div>

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
                            fill="#DAA520"
                          >
                            <path
                              d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                            />
                          </svg>
                        </q-btn>
                      </div>

                      <div class="flex q-mt-md justify-between">
                        <div>
                          <div>Total Pembayaran</div>
                          <div>1892379812732189</div>
                        </div>

                        <q-btn flat>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#DAA520"
                          >
                            <path
                              d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                            />
                          </svg>
                        </q-btn>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                  group="somegroup"
                  icon="perm_identity"
                  label="BCA"
                  header-class="text-teal"
                >
                  <q-card>
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem, eius reprehenderit eos corrupti commodi magni
                      quaerat ex numquam, dolorum officiis modi facere maiores
                      architecto suscipit iste eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                  group="somegroup"
                  icon="shopping_cart"
                  label="Mandiri"
                  header-class="text-purple"
                >
                  <q-card>
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem, eius reprehenderit eos corrupti commodi magni
                      quaerat ex numquam, dolorum officiis modi facere maiores
                      architecto suscipit iste eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                  group="somegroup"
                  icon="bluetooth"
                  label="Dana"
                  header-class="bg-teal text-white"
                  expand-icon-class="text-white"
                >
                  <q-card class="bg-teal-2">
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem, eius reprehenderit eos corrupti commodi magni
                      quaerat ex numquam, dolorum officiis modi facere maiores
                      architecto suscipit iste eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="detailDialog">
        <q-card style="width: 50rem">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Detail Transaksi</div>
            <q-space />
            <q-btn icon="local_activity" flat round dense @click="printPDF" />
            <q-btn icon="mail" flat round dense @click="sendEmail" />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <div ref="data">
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
                <q-img :src="detailData.image" style="width: 10rem; height: 5rem" />
                <div>
                  <div>{{ detailData.name }}</div>
                  <div>{{ detailData.price }}</div>
                  <div>dsajkldsajlkdsa</div>
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

              <div class="flex items-center justify-between q-mt-xl">
                <div>Total Biaya</div>
                <div>{{ detailData.totalTransaction }}</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <section class="detail-transaksi" v-if="cara">
        <div class="popup">
          <div class="popup-content">
            <div class="header">
              <div class="Text-h2 text-bold">Cara Pembayaran</div>
              <span class="close" @click="closeMenungguPembayaran"
                ><img src="../assets/images/close.png" class="Icon"
              /></span>
            </div>
            <div class="isi">
              <div class="bjb">
                <h4>BJB Virtual Account</h4>
                <img src="../assets/svg/GKL7_Bank BJB Logo.svg" alt="" />
              </div>
              <div class="nomor-virtual-account">
                <div class="nva">
                  <h6>Nomor Virtual Account</h6>
                  <h5>8883xxxxxxxxxx</h5>
                </div>
                <div class="clipboard">
                  <p>
                    Salin <img src="../assets/svg/ClipboardText.svg" alt="" />
                  </p>
                </div>
              </div>
              <div class="nomor-virtual-account">
                <div class="nva">
                  <h6>Total Pembayaran</h6>
                  <h5>Rp. 33.500</h5>
                </div>
                <div class="clipboard">
                  <p>
                    Salin <img src="../assets/svg/ClipboardText.svg" alt="" />
                  </p>
                </div>
              </div>
              <div class="steps">
                <div class="atm-bjb">
                  <h5>ATM BJB</h5>
                  <img src="../assets/svg/CaretDown.svg" alt="" />
                </div>
                <div class="mobile-banking-bjb">
                  <h5>Mobile Banking BJB</h5>
                  <img src="../assets/svg/CaretDown.svg" alt="" />
                </div>
                <div class="internet-banking-bjb">
                  <h5>Internet Banking BJB</h5>
                  <img src="../assets/svg/CaretDown.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Notification
    v-if="notification.message"
    :message="notification.message"
    :type="notification.type"
  />
</template>

<script>
import Notification from "components/NotificationAlert.vue"; // Make sure to adjust the path
export default {
  components: { navbar },
  data() {
    return {
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
    printPDF() {
      const element = this.$refs.data;

      html2pdf(element, {
        margin: 2,
        filename: `Report ${new Date().toISOString().split("T")[0]}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          putOnlyUsedFonts: true,
          // Sesuaikan skala jika diperlukan
          scale: 0.8,
        },
      });
      this.openDetailDialog();
    },
    async fetchData() {
      try {
        let endpointLink = "trans?";
        if (this.search.s) endpointLink += `s=${this.search.s}&`;
        if (this.search.d) endpointLink += `d=${new Date(this.search.d).toISOString()}&`;
        if (this.search.stat && this.search.stat != "ALL") endpointLink += `stat=${this.search.stat}&`;

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
          `Email sedang dikirimkan ke ${this.user.email}, mohon ditunggu`
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
      this.detailData = {
        transactionNo: rowData.id,
        status: this.simplifyStatus(rowData.status),
        totalAmount: rowData.amount,
        planDate: rowData.plannedDate,
        createdDate: rowData.createdDate,
        payMethod: rowData.method,
        total: this.formatRupiah(total),
        fee: this.formatRupiah(rowData.additionalFee),
        totalTransaction: this.formatRupiah(total + rowData.additionalFee),
        details: rowData.detailTrans.map((detail) => {
          const itemData = detail.order ? detail.order : detail.event;
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
      };
    },
    openDetailTransaksi(row) {
      detail.value = !detail.value;
    },
    simplifyDetail(detail) {
      let detailDatas = {
        length: 0,
        data: [],
        titles: '',
      };
      for (let detailData of detail) {
        let contentToPush = {};
        if (detailData.order) {
          const orderData = detailData.order;
          contentToPush["price"] = this.formatRupiah(orderData.price)
          contentToPush["quantity"] = detailData.amount
          contentToPush["name"] = orderData.name;
          contentToPush["badgeColor"] = orderData.orderSubTypeId ? "blue" : "orange";
          detailDatas.titles += orderData.name + " + "
          } else {
            const eventData = detailData.event;
          contentToPush["price"] = this.formatRupiah(eventData.price)
          contentToPush["quantity"] = detailData.amount
          contentToPush["name"] = eventData.name;
          contentToPush["badgeColor"] = "green";
          detailDatas.titles += eventData.name + " + "
        }
        detailDatas.data.push(contentToPush);
      }
      detailDatas.titles = detailDatas.titles.slice(0, -2)
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
    showNotif(mes, type) {
      this.notification.message = mes;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = "";
        this.notification.type = "";
      }, 4000);
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

.bantu {
  color: #000000;
}

body {
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

.all-content {
  font-family: raleway;
}

.content {
  padding-top: 100px;
}

p.bantuan {
  color: #000000;
}

h1.title {
  text-align: center;
  margin-top: 50px;
  color: #333;
}

nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
}

.Pencarian {
  width: 246px;
  height: 48px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.tanggal {
  width: 247px;
  height: 48px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

select {
  width: 247px;
  padding: 12px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
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

.Pencarian::placeholder,
.tanggal::placeholder {
  color: #999;
}

img {
  width: 200px;
  height: 98.95px;
}

.tabel {
  width: 779px;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 0 9px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  /* Mengatur margin horizontal secara otomatis untuk memusatkan */
  margin-top: 48px;
  padding: 10px;
  margin-bottom: 23px;
}

.icon-tiket {
  width: 18px;
  height: 13px;
}

.form-input {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.container {
  text-align: center;
  margin-top: 50px;
}

.tiket__header-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tiket__content {
  display: flex;
  gap: 1rem;
}

.tiket p {
  font-size: 16px;
  font-weight: 700;
  font: bold;
}

.tiket label {
  padding-left: 9px;
  font-size: 14px;
  line-height: 22px;
  color: #5e5e5e;
}

.tiket__content h6 {
  font-size: 20px;
  padding-top: 20px;
  line-height: 28px;
  padding-bottom: 10px;
}

p.sudah__digunakan {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9ffd6;
  color: #149b5a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

p.dapat__digunakan {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9d1ff;
  color: #146a9b;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

p.expired {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #e4e4e4;
  color: #828180;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

p.menunggu__pembayaran {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #ffcda9;
  color: #9b5514;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
}

.tiket__content img {
  padding-left: 29px;
  margin-top: 13px;
  width: 215px;
  height: 98.95px;
}

.custom-select option {
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.custom-select option:hover {
  background-color: #007bff;
  color: #fff;
}

.label label {
  padding-right: 100px;
}

label.labelharga {
  font-weight: 400;
  line-height: 22px;
}

.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Mendorong elemen ke tepi kiri dan kanan */
}

.info {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}

.actions {
  color: #333;
  padding-top: 45px;
  display: flex;
  gap: 0.5rem;
  /* Jarak antara paragraf */
}

.detail {
  color: #daa520;
  text-decoration: none;
  cursor: pointer;
}

.cara {
  cursor: pointer;
}

.search-label {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  /* Sesuaikan posisi gambar */
  transform: translateY(-50%);
  width: 15px;
  /* Sesuaikan lebar gambar */
  height: auto;
  /* Sesuaikan tinggi gambar jika diperlukan */
}

.Pencarian {
  padding-left: 30px;
  /* Sesuaikan padding kiri agar input tidak tumpang tindih dengan gambar */
}

.bantuan {
  color: black;
  text-decoration: none;
  size: 16;
  font-weight: 400;
}

p.total__belanja {
  font-size: 12px;
  font-weight: 400;
}

p.hrga {
  font-size: 16px;
}

/* popup1 */

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
}

.popup-content {
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 671px;
  height: 512px;
  overflow-x: auto;
  position: relative;
  overflow-y: hidden;
  max-height: calc(100vh - 100px);
}

.popup-content .isi {
  overflow-y: auto;
  max-height: calc(100vh - 340px);
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.isi {
  padding: 30px;
  margin-left: 15px;
}

small.label-card1 {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9ffd6;
  color: #149b5a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
}

.info__details {
  display: grid;
  grid-template-columns: 2 200px;
}

.header {
  box-shadow: 0 1px rgba(0, 0, 0, 0.2);
  background: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.2rem;
}

.header h1 {
  font-weight: 700;
  z-index: 1000;
}

.Icon {
  width: 20px;
  height: 20px;
}

.info__details {
  display: flex;
  flex-direction: column;
}

.flex-container {
  padding-top: 15px;
}

.flex-container > div {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.flex-container h6 {
  font-weight: 400;
  font-size: 20px;
}

.flex-container p {
  font-weight: 700;
  font-size: 16px;
}

.detail-tiket {
  align-items: center;
}

.detail-tiket h6 {
  font-size: 20px;
  font-weight: 700;
  padding-top: 25px;
}

.detail-tiket img {
  width: 158px;
  height: 71.72px;
  margin: 18px;
}

.info-detail-tiket p,
.info-detail-tiket label {
  display: flex;
  flex-direction: column;
}

.info-detail-tiket {
  display: flex;
  flex-direction: column;
  /* Menyusun elemen dalam satu kolom */
}

.info-detail-tiket p,
.info-detail-tiket label {
  margin-right: auto;
  /* Memindahkan teks ke pinggir kanan */
}

.info-detail-tiket label {
  background-color: white;
  color: hsl(0, 0%, 0%);
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
}

.info-detail-tiket p {
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
}

.detail-tiket {
  display: flex;
}

h6.detailtiket {
  font-size: 20px;
  font-weight: 700;
  padding-top: 30px;
}

.all-tiket img {
  width: 13.75px;
  height: 7.5px;
}

.all-tiket small {
  color: #daa520;
  font-weight: 700;
  font-size: 12px;
}

.info-pembayaran {
  font-size: 20px;
  font-weight: 700;
  padding-top: 35px;
  padding-bottom: 20px;
}

.status-pembayaran {
  display: flex;
  gap: 20rem;
  padding-bottom: 8px;
}

.status-pembayaran h6 {
  font-size: 20px;
  font-weight: 400;
  padding-right: 20px;
}

.status-pembayaran small {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #a9ffd6;
  color: #149b5a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
}

.pemesan {
  display: flex;
  gap: 15.8rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.pemesan h6 {
  font-size: 20px;
  font-weight: 400;
}

.pemesan label {
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
}

.pemesan p {
  font-size: 16px;
  font-weight: 700;
}

.metode-pmbayaran {
  display: flex;
  gap: 14.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.metode-pmbayaran h6 {
  font-size: 20px;
  font-weight: 400;
}

.metode-pmbayaran p {
  font-size: 16px;
  font-weight: 700;
}

.total-harga-3-Tiket {
  display: flex;
  gap: 20rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.total-harga-3-Tiket h6 {
  font-size: 20px;
  font-weight: 400;
}

.total-harga-3-Tiket p {
  font-size: 16px;
  font-weight: 700;
}

.biaya-layanan {
  display: flex;
  gap: 23.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.biaya-layanan h6 {
  font-size: 20px;
  font-weight: 400;
}

.biaya-layanan p {
  font-size: 16px;
  font-weight: 700;
}

.line {
  height: 2px;
  width: 100%;
  margin: 20px auto;
  background-image: repeating-linear-gradient(
    to right,
    #d9d9d9,
    #d9d9d9 7px,
    transparent 5px,
    transparent 10px
  );
}

.total-biaya {
  display: flex;
  gap: 24.5rem;
}

.total-biaya h6 {
  font-size: 20px;
  font-weight: 700;
}

.total-biaya p {
  font-size: 16px;
  font-weight: 700;
}

/* popup2 */

.bjb {
  display: flex;
  gap: 14.5rem;
  font-size: 30px;
}

.bjb img {
  width: 57.24px;
  height: 28.05px;
}

.nomor-virtual-account {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nva {
  padding-top: 15px;
}

.nva h6 {
  font-size: 24px;
  font-weight: 400;
  color: #5e5e5e;
}

.nva h5 {
  font-size: 24px;
  padding-top: 5px;
}

.clipboard {
  padding-top: 30px;
  padding-right: 35px;
}

.clipboard img {
  width: 32px;
  height: 32px;
}

.clipboard p {
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  color: #daa520;
}

.clipboard img {
  display: inline-block;
  vertical-align: middle;
}

.steps img {
  width: 32px;
  height: 32px;
}

.steps h5 {
  font-size: 24px;
  font-weight: 400;
}

.atm-bjb {
  padding-top: 40px;
  padding-bottom: 10px;
  display: flex;
  gap: 27rem;
  border-bottom: 1px solid #d0d5dd;
}

.mobile-banking-bjb {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 19.4rem;
  border-bottom: 1px solid #d0d5dd;
}

.internet-banking-bjb {
  padding-top: 10px;
  display: flex;
  gap: 18.8rem;
  border-bottom: 1px solid #d0d5dd;
}
</style>
