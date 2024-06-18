<template>
  <div>
    <navbar :isAdmin="true" />

    <div class="q-mx-md q-mt-md flex items-center justify-between">
      <div>
        <div class="text-h6 text-semibold">Edit User</div>
        <div>Ubah dan atur user di halaman ini</div>
      </div>

      <q-btn icon="add" color="green" no-caps @click="handleDialog" />
    </div>

    <div class="q-mt-md q-mx-md">
      <q-table
        bordered
        :rows="userDatas"
        :columns="columns"
        row-key="name"
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
                @click="handleDialog(props.row)"
                style="background-color: rgba(0, 255, 0, 0.102)"
              ></q-btn>
              <!-- <q-btn icon="delete" flat color="red" no-caps style="background-color: rgba(255, 0, 0, 0.102)" /> -->
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="addUserDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ currentId ? "Edit User" : titleDialog }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-gutter-y-md">
          <q-input
            filled
            v-model="userData.name"
            label="Name"
            color="black"
            bg-color="gray"
          />
          <q-input
            v-model="userData.email"
            filled
            type="email"
            label="Email"
            color="black"
            bg-color="gray"
          />

          <q-input
            v-if="!this.currentId"
            v-model="userData.password"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            color="black"
            bg-color="gray"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-select
            filled
            v-model="userData.role"
            :options="userRoleOptions"
            label="Role"
          />

          <q-btn no-caps :label="labelButton" @click="updateCreate" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import navbar from "../../components/NavbarNew.vue";
import cookieHandler from "src/cookieHandler";
import env from "stores/environment";
import { ref } from "vue";
import SimpleNotify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

export default {
  components: { navbar },
  data() {
    return {
      labelButton: ref("Submit"),
      isPwd: ref(true),
      titleDialog: ref("Add User"),
      addUserDialog: ref(false),
      token: cookieHandler.getCookie(env.TOKEN_STORAGE_NAME),
      userDialog: ref(false),
      currentId: ref(),
      userDatas: ref([]),
      defaultUserData: ref({}),
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
    showNotif(msg, status) {
      new SimpleNotify({
        text: `${msg}`,
        status: `${status}`,
      });
    },
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
        const response = await this.$api.post(
          url,
          {
            name: this.userData.name,
            ...(this.defaultUserData ? this.defaultUserData.email === this.userData.email ? {} : { email: this.userData.email } : { email: this.userData.email }),
            role: this.userData.role?.value ? this.userData.role.value : this.userData.role,
            ...(this.userData && { password: this.userData.password }),
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status != 200) throw Error(response.data.message);
        this.showNotif(response.data.message, "success");
        this.handleDialog();
        this.fetchData();
      } catch (err) {
        this.showNotif(err.response ? err.response.data.message : err.message, "error");
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
        this.showNotif(response.data.message, "success");
        this.handleDialog();
        this.fetchData();
      } catch (err) {
        this.showNotif(err.response ? err.response.data.message : err.message, "error");
        console.log(err);
      }
    },
    handleDialog(data) {
      this.addUserDialog = !this.addUserDialog;
      if (this.addUserDialog && data) {
        this.currentId = data.id;
        this.defaultUserData = { ...data }
        this.userData = { ...data };
      }
    },
  },
};
</script>
