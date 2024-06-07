<template>
  <div>
    <navbar />

    <div class="q-mx-md q-mt-md flex items-center justify-between">
      <div>
        <div class="text-h6 text-semibold">Edit User</div>
        <div>Ubah dan atur user di halaman ini</div>
      </div>

      <q-btn icon="add" color="green" no-caps />
    </div>

    <div class="q-mt-md q-mx-md">
      <q-table
        bordered
        :rows="userDatas"
        :columns="columns"
        row-key="name"
        hide-bottom
        class="q-mt-md"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="Name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="Email" :props="props">
              {{ props.row.email }}
            </q-td>
            <q-td key="Role" :props="props">
              {{ props.row.role }}
            </q-td>
            <q-td class="q-gutter-x-sm flex items-center justify-center">
              <q-btn
                icon="edit"
                flat
                color="green"
                no-caps
                style="background-color: rgba(0, 255, 0, 0.102)"
              ></q-btn>
              <q-btn
                icon="delete"
                flat
                color="red"
                no-caps
                style="background-color: rgba(255, 0, 0, 0.102)"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/NavbarAdmin.vue";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import { ref } from "vue";

export default {
  components: { navbar },
  data() {
    return {
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
      userDialog: ref(false),
      currentId: ref(),
      userDatas: ref([]),
      userData: ref({
        name: "",
        email: "",
        password: "",
        role: "",
      }),
      userRoleOptions: [
        { label: "Super Admin", value: "SUPER_ADMIN" },
        { label: "Admin", value: "ADMIN" },
        { label: "Customer ", value: "CUSTOMER" },
        { label: "Cashier", value: "CASHIER" },
      ],
      columns: [
        { name: "Name", align: "center", label: "Name", field: "name" },
        { name: "Email", align: "center", label: "Email", field: "email" },
        // {
        //   name: "Password",
        //   align: "left",
        //   label: "Password",
        //   field: "password",
        // },
        { name: "Role", align: "center", label: "Role", field: "role" },
        { name: "Action", align: "center", label: "Action", field: "" },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$api.get("user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status != 200) throw Error(response.data.message);
        this.userDatas = response.data.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }));
      } catch (err) {
        console.log(err);
      }
    },
    async updateCreate() {
      try {
        const url = this.currentId ? `user/${this.currentId}` : "user";
        const response = await this.$api.post(url, this.userData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status != 200) throw Error(response.data.message);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteData(id) {
      try {
        const response = await this.$api.delete(`user/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status != 200) throw Error(response.data.message);
      } catch (err) {
        console.log(err);
      }
    },
    handleDialog(data) {
      this.userDialog = !this.userDialog;
      if (this.userDialog && data) {
        this.currentId = data.id;
        this.userData = data;
      }
    },
  },
};
</script>
