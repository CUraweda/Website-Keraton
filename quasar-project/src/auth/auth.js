import { BASE_URL } from "./config";

export async function verifyTokenBool() {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  try {
    const response = await fetch(BASE_URL() + "/keraton/auth/auth", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Failed to verify token:", error);
    localStorage.removeItem("token");
    return false;
  }
}

export async function verifyTokenAdmin() {
  const token = localStorage.getItem("token");
  if (!token) {
    // this.$router.push("/");
    console.log("im here 2")
    return false;
  }

  try {
    const response = await fetch(BASE_URL() + "/keraton/auth/auth", {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) {
      console.log("im here 1")
      return false;
    }
    const data = await response.json();
    if (data.data.role === "SUPER_ADMIN") return true;
    else {
      // this.$router.push("/");
      return false;
    }
  } catch (error) {
    console.error("Failed to verify token:", error);
    localStorage.removeItem("token");
    this.$router.push("/");
    return false;
  }
}
