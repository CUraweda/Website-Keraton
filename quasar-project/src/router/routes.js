import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import SejarahLP from "../pages/SejarahKeraton.vue";
import beritaterkini from "../pages/BeritaTerkini.vue";
import HistoryTransaksi from "../pages/HistoryTransaksi.vue";
import AreaKeraton from "../pages/AreaKeraton.vue";
import Museum from "../pages/MuseumPage.vue";
import CheckoutKeraton from "../pages/CheckoutKeraton.vue";
import Checkout from "../pages/CheckOut.vue";
import PilihanPaket from "../pages/PilihanPaket.vue";
import BeranDa from "../pages/BeranDa.vue";
import EventGratis from "../pages/EventGratis.vue";
import Booking from "../pages/BookingPage.vue";
import FilterBayar from "../pages/FilterBayar.vue";
import AgungDalem from "../pages/AgungDalem.vue";
import sejarahSilsilah from "../pages/sejarahSilsilah.vue";
import silsilahDesktop from "../pages/silsilahDesktop.vue";
import AdminHomePage from "../pages/Admin/HomePage.vue";
import AdminAddPage from "../pages/Admin/AddPage.vue";
import NyobaAdmin from "../pages/nyobaAdmin.vue";
import Cart from "../pages/CartPage.vue";
import Template from "../pages/TicketTemplate.vue";

const routes = [
  {
    path: "/admin/home",
    name: "AdminHomePage",
    component: AdminHomePage,
  },
  {
    path: "/admin/add/:id",
    name: "AdminAddPage",
    component: AdminAddPage,
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
    path: "/checkoutkeraton",
    name: "checkoutkeraton",
    component: CheckoutKeraton,
  },
  {
    path: "/pilihanpaket",
    name: "pilihanpaket",
    component: PilihanPaket,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/",
    name: "beranda",
    component: BeranDa,
  },
  {
    path: "/user/transaction",
    name: "historytransaksi",
    component: HistoryTransaksi,
  },
  {
    path: "/booking/events",
    name: "eventgratis",
    component: EventGratis,
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking,
  },
  {
    path: "/filterbayar",
    name: "filterbayar",
    component: FilterBayar,
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
    path: "/silsilahdesktop",
    name: "silsilahktop",
    component: silsilahDesktop,
  },
  {
    path: "/nyobaAdmin",
    name: "nyobaAdmin",
    component: NyobaAdmin,
  },
  {
    path: "/user/carts",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/beritaterkini",
    name: "beritaterkini",
    component: beritaterkini,
  },
  {
    path: "/template",
    name: "Template",
    component: Template,
  },
];

export default routes;
