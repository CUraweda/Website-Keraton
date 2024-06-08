import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import SejarahLP from "../pages/SejarahKeraton.vue";
import HistoryTransaksi from "../pages/HistoryTransaksi.vue";
import AreaKeraton from "../pages/AreaKeraton.vue";
import Museum from "../pages/MuseumPage.vue";
import CheckoutKeraton from "../pages/CheckoutKeraton.vue";
import PilihanPaket from "../pages/PilihanPaket.vue";
import BerandaPage from "../pages/BerandaPage.vue";
import AgungDalem from "../pages/AgungDalem.vue";
import sejarahSilsilah from "../pages/sejarahSilsilah.vue";
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
import AdminSubsPage from "pages/admin/SubscribePage.vue";

const routes = [
  {
    path: "/admin/subs",
    name: "AdminSubsPage",
    component: AdminSubsPage,
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
    component: CheckoutKeraton,
    meta: {
      preventToken: true,
    },
  },
  {
    path: "/pilihanpaket",
    name: "pilihanpaket",
    component: PilihanPaket,
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
    component: sejarahSilsilah,
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

export default routes;
