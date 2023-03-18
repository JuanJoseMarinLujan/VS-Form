<template lang="">
  <section class="w-full flex flex-col justify-center items-center gap-5">
    <h2 class="text-center text-4xl text-mainColor">Paso 2</h2>
    <form
      action="submit"
      class="w-4/5 max-w-4xl grid grid-rows-4 justify-center items-center gap-8"
      v-on:submit.prevent="nextStep"
    >
      <article class="grid grid-rows-3 items-center">
        <label for="email" :class="['text-base', 'text-' + email.color]"
          >Correo electrónico</label
        >
        <input
          v-model="email.input"
          v-on:keyup="validateEmail(email)"
          type="email"
          name="email"
          id="email"
          :class="[
            'border h-10 w-full rounded-md px-2',
            'border-' + email.color,
          ]"
          required
        />
        <div
          v-text="email.msg"
          :class="['text-xs', 'text-' + email.color]"
        ></div>
      </article>

      <article class="w-full grid grid-cols-2 gap-8">
        <div class="w-full grid grid-rows-3 items-center">
          <label for="password" :class="['text-base', 'text-' + password.color]"
            >Contraseña</label
          >
          <input
            v-model="password.input"
            v-on:keyup="validatePassword(password)"
            type="password"
            name="password"
            id="password"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + password.color,
            ]"
            minlength="8"
            required
          />
          <div
            v-text="password.msg"
            :class="['text-xs', 'text-' + password.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label
            for="passwordConfirmed"
            :class="['text-base', 'text-' + passwordConfirmed.color]"
            >Comfirmación de contraseña</label
          >
          <input
            v-model="passwordConfirmed.input"
            v-on:keyup="validateConfirmed(passwordConfirmed)"
            type="password"
            name="passwordConfirmed"
            id="passwordConfirmed"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + passwordConfirmed.color,
            ]"
            minlength="8"
            required
          />
          <div
            v-text="passwordConfirmed.msg"
            :class="['text-xs', 'text-' + passwordConfirmed.color]"
          ></div>
        </div>
      </article>

      <article class="w-full grid grid-cols-2 gap-8">
        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="phone" :class="['text-base', 'text-' + phone.color]"
            >Teléfono</label
          >
          <input
            v-model="phone.input"
            v-on:keyup="validateNumber(phone)"
            type="number"
            name="phone"
            id="phone"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + phone.color,
            ]"
            min="6"
            required
          />
          <div
            v-text="phone.msg"
            :class="['text-xs', 'text-' + phone.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label
            for="cellPhone"
            :class="['text-base', 'text-' + cellPhone.color]"
            >Celular</label
          >
          <input
            v-model="cellPhone.input"
            v-on:keyup="validateNumber(cellPhone)"
            type="number"
            name="cellPhone"
            id="cellPhone"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + cellPhone.color,
            ]"
            min="9"
            required
          />
          <div
            v-text="cellPhone.msg"
            :class="['text-xs', 'text-' + cellPhone.color]"
          ></div>
        </div>
      </article>

      <article class="w-full flex justify-between items-center">
        <a
          href="/"
          class="h-12 w-36 flex justify-center items-center border border-mainColor bg-secundaryColor rounded-md text-mainColor"
          >Atras</a
        >
        <button type="submit">
          <a
            class="h-12 w-36 flex justify-center items-center border border-mainColor bg-secundaryColor rounded-md text-mainColor"
            >Siguiente</a
          >
        </button>
      </article>
    </form>
  </section>
</template>
<script>
import Swal from "sweetalert2";
import router from "../router/index.js";
export default {
  data() {
    return {
      email: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      password: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      passwordConfirmed: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      phone: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      cellPhone: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
    };
  },
  methods: {
    nextStep(e) {
      if (
        this.email.validate == true &&
        this.password.validate == true &&
        this.passwordConfirmed.validate == true &&
        this.phone.validate == true &&
        this.cellPhone.validate == true
      ) {
        const newData = {
          name: this.email.input,
          surname: this.password.input,
          idType: this.passwordConfirmed.input,
          idNumber: this.phone.input,
          dateBirth: this.cellPhone.input,
        };
        console.log(newData);
        Swal.fire("Paso 2", "Completado correctamente", "success");
        router.push("Paso3");
      }
    },
    validateEmail(e) {
      if (!e.input.trim()) {
        (e.msg = "El campo se encuentra en blanco"),
          (e.color = "yellow"),
          (e.validate = false);
      } else if (
        e.input.search(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        (e.msg = "El correo no cumple el formato"),
          (e.color = "red"),
          (e.validate = false);
      } else {
        (e.msg = "El correo es valido"),
          (e.color = "green"),
          (e.validate = true);
      }
    },
    validatePassword(e) {
      if (!e.input.trim()) {
        (e.msg = "El campo se encuentra en blanco"),
          (e.color = "yellow"),
          (e.validate = false);
      } else if (
        e.input.search(
          /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
        )
      ) {
        (e.msg =
          "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos."),
          (e.color = "red"),
          (e.validate = false);
      } else {
        (e.msg = "La contraseña es valida"),
          (e.color = "green"),
          (e.validate = true);
      }
    },
    validateConfirmed(e) {
      if (!e.input.trim()) {
        (e.msg = "El campo se encuentra en blanco"),
          (e.color = "yellow"),
          (e.validate = false);
      } else if (this.passwordConfirmed.input !== this.password.input) {
        (e.msg = "Las contraseñas no coinciden"),
          (e.color = "red"),
          (e.validate = false);
      } else {
        (e.msg = "Las contraseñas coinciden"),
          (e.color = "green"),
          (e.validate = true);
      }
    },
    validateNumber(e) {
      if (e.input == "") {
        e.msg = "El campo se encuentra en blanco";
        e.color = "yellow";
        e.validate = false;
      } else if (/^[0-9]+$/.test(e.input)) {
        e.msg = "El campo es correcto";
        e.color = "green";
        e.validate = true;
      } else if (e.input.length < 10) {
        e.msg = "Debe tener minimo 10 numeros";
        e.color = "yellow";
        e.validate = false;
      } else {
        e.msg = "Solo se permiten numeros";
        e.color = "red";
        e.validate = false;
      }
    },
  },
};
</script>
<style lang=""></style>
