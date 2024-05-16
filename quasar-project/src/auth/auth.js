import { ref } from "vue";
import axios from "axios";
import router from "../router/routes";
const isAuthenticated = ref(false);
const authToken = ref("");

const checkAuthentication = () => {
  isAuthenticated.value = !!authToken.value;

  return isAuthenticated.value;
};

const login = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/keraton/auth/login",
      {
        email: email,
        password: password,
      }
    );

    console.log("Login response:", response.data);
    console.log(response.data.success);
    router.push({ name: "beranda" });

    if (response.data.success == true) {
      authToken.value = response.data.token;
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export { isAuthenticated, checkAuthentication, login };
