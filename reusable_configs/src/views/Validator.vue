<template>
  <div class="form-demo">
    <div class="flex justify-content-center">
      <div class="card">
        <h5 class="text-center">Register</h5>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <InputText
                id="name"
                v-model="v$.name.$model"
                :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              />
              <label
                for="name"
                :class="{ 'p-error': v$.name.$invalid && submitted }"
                >Name*</label
              >
            </div>
            <small
              v-if="
                (v$.name.$invalid && submitted) || v$.name.$pending.$response
              "
              class="p-error"
              >{{ v$.name.required.$message.replace("Value", "Name") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <InputText
                id="email"
                v-model="v$.email.$model"
                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                aria-describedby="email-error"
              />
              <label
                for="email"
                :class="{ 'p-error': v$.email.$invalid && submitted }"
                >Email*</label
              >
            </div>
            <span v-if="v$.email.$error && submitted">
              <span
                id="email-error"
                v-for="(error, index) of v$.email.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
            <small
              v-else-if="
                (v$.email.$invalid && submitted) || v$.email.$pending.$response
              "
              class="p-error"
              >{{ v$.email.required.$message.replace("Value", "Email") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <Password
                id="password"
                v-model="v$.password.$model"
                :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                toggleMask
              >
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{ sp.level }}
                  <Divider />
                  <p class="mt-2">Suggestions</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </Password>
              <label
                for="password"
                :class="{ 'p-error': v$.password.$invalid && submitted }"
                >Password*</label
              >
            </div>
            <small
              v-if="
                (v$.password.$invalid && submitted) ||
                v$.password.$pending.$response
              "
              class="p-error"
              >{{
                v$.password.required.$message.replace("Value", "Password")
              }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <Calendar
                id="date"
                v-model="v$.date.model"
                :showIcon="true"
                :class="{ 'p-invalid': v$.date.$invalid && submitted }"
              />
              <label for="date">Birthday*</label>
            </div>
            <small
              v-if="
                (v$.date.$invalid && submitted) || v$.name.$pending.$response
              "
              class="p-error"
              >{{ "Este campo é obrigatório" }}</small
            >
          </div>
          <div class="field-checkbox">
            <Checkbox
              id="accept"
              name="accept"
              value="Accept"
              v-model="v$.accept.$model"
              :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
            />
            <label
              for="accept"
              :class="{ 'p-error': v$.accept.$invalid && submitted }"
              >I agree to the terms and conditions*</label
            >
          </div>
          <Button type="submit" label="Submit" class="mt-2" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import Divider from "primevue/divider";

export default {
  name: "Validator",
  components: {
    InputText,
    Password,
    Calendar,
    Checkbox,
    Button,
    Divider,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
    };
  },
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      date: {
        required,
      },
      accept: {
        required,
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.date = null;
      this.accept = null;
      this.submitted = false;
    },
  },
};
</script>

<style scoped>
.form-demo {
  max-width: 450px;
}

.form-demo .card {
  min-width: 450px;
}

.form-demo .card .form {
  margin-top: 2rem;
}

.form-demo .card .field {
  margin-bottom: 1.5rem;
}
</style>