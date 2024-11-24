import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import SejarahLP from "../pages/SejarahKeraton.vue";
import HistoryTransaksi from "../pages/HistoryTransaksi.vue";
import AreaKeraton from "../pages/AreaKeraton.vue";
import Museum from "../pages/MuseumPage.vue";
import BerandaPage from "../pages/BerandaPage.vue";
import AgungDalem from "../pages/AgungDalem.vue";
import SejarahSilsilah from "../pages/SejarahSilsilah.vue";
import AdminHomePage from "../pages/Admin/HomePage.vue";
import AdminAddPage from "../pages/Admin/AddPage.vue";
import AdminEventPage from "../pages/Admin/EventPage.vue";
import Cart from "../pages/CartPage.vue";
import Template from "../pages/TicketTemplate.vue";
import AdminNewsPage from "../pages/Admin/NewsPage.vue";
import QrCodePage from "../pages/QrCodePage.vue";
import EventPage from "../pages/EventPage.vue";
import BookingPage from "../pages/NewBookingPage.vue";
import AdminUserPage from "pages/Admin/UserPage.vue";
import SubsPage from "../pages/SubsPage.vue";
import CheckoutPage from "../pages/CheckoutPage.vue";
import BllArti from "../pages/NewBaluarti.vue";
import Musm from "../pages/NewMuseum.vue";
import Agng from "../pages/NewAgungDalem.vue";
import JanjiTemuPage from "../pages/JanjiTemu/JanjiTemuPage.vue";
import CheckoutJanjiPage from "../pages/JanjiTemu/CheckoutJanjiPage.vue";
import AdminJanjiTemu from "../pages/Admin/JanjiTemu.vue";
import DetailBerita from "../pages/DetailBerita.vue";
import Berita from "../pages/AllNews.vue";
import VoucherPage from "../pages/Admin/VoucherPage.vue";
import MuseumAi from "../pages/MuseumAi.vue";

const router = [
  {
    path: "/agungdalem",
    name: "AgungDalem",
    component: Agng,
  },
  {
    path: "/wisata/museumai",
    name: "MuseumAi",
    component: MuseumAi,
  },
  {
    path: "/detail-news/:id",
    name: "DetailBerita",
    component: DetailBerita,
  },
  {
    path: "/news",
    name: "Berita",
    component: Berita,
  },
  {
    path: "/museum",
    name: "Museum",
    component: Musm,
  },
  {
    path: "/baluarti",
    name: "Baluarti",
    component: BllArti,
  },
  {
    path: "/admin/subs",
    name: "SubsPage",
    component: SubsPage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/voucher",
    name: "Voucher",
    component: VoucherPage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/home",
    name: "AdminHomePage",
    component: AdminHomePage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/user",
    name: "AdminUserPage",
    component: AdminUserPage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/add/:id",
    name: "AdminAddPage",
    component: AdminAddPage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/news",
    name: "AdminNewsPage",
    component: AdminNewsPage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/event",
    name: "AdminEventPage",
    component: AdminEventPage,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/admin/janji-temu",
    name: "AdminJanjiTemu",
    component: AdminJanjiTemu,
    meta: {
      preventToken: true,
      onlyAdmin: true,
    },
  },
  {
    path: "/test/qr",
    name: "QrCodePage",
    component: QrCodePage,
    meta: {
      preventToken: true,
    },
  },

  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/sejarah",
    name: "sejarah",
    component: SejarahLP,
  },
  {
    path: "/wisata/keraton",
    name: "areakeraton",
    component: AreaKeraton,
  },
  {
    path: "/wisata/museum",
    name: "museum",
    component: Museum,
  },
  {
    path: "/user/checkout",
    name: "checkout",
    component: CheckoutPage,
    meta: {
      preventToken: true,
    },
  },
  {
    path: "/user/checkout/janji-temu",
    name: "checkoutjanji",
    component: CheckoutJanjiPage,
    meta: {
      preventToken: true,
    },
  },
  {
    path: "/user/information/janji-temu",
    name: "informasijanji",
    component: JanjiTemuPage,
    meta: {
      preventToken: true,
    },
  },
  {
    path: "/",
    name: "Beranda",
    component: BerandaPage,
  },
  {
    path: "/user/transaction",
    name: "historytransaksi",
    component: HistoryTransaksi,
    meta: {
      preventToken: true,
    },
  },
  {
    path: "/booking/event",
    name: "EventPage",
    component: EventPage,
  },
  {
    path: "/booking",
    name: "booking",
    component: BookingPage,
  },
  {
    path: "/wisata/dalemagung",
    name: "agungdalem",
    component: AgungDalem,
  },
  {
    path: "/sejarah/silsilah",
    name: "sejarahsilsilah",
    component: SejarahSilsilah,
  },
  {
    path: "/user/carts",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/template",
    name: "Template",
    component: Template,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/PageNotFound.vue"),
  },
];

export default router;
