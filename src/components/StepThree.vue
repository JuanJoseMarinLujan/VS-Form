<template lang="">
  <section class="w-full flex flex-col justify-center items-center gap-5">
    <h2 class="text-center text-4xl text-mainColor">Paso 3</h2>
    <form
      action="submit"
      class="w-4/5 max-w-4xl grid grid-rows-2 justify-center items-center gap-10"
      v-on:submit.prevent="nextStep"
    >
      <article class="w-full grid grid-cols-2 gap-8">
        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="address" :class="['text-base', 'text-' + address.color]"
            >Dirección residencia</label
          >
          <input
            v-model="address.input"
            v-on:keyup="validateAddress(address)"
            type="text"
            name="address"
            id="address"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + address.color,
            ]"
            minlength="5"
            required
          />
          <div
            v-text="address.msg"
            :class="['text-xs', 'text-' + address.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="zipCode" :class="['text-base', 'text-' + zipCode.color]"
            >Código postal</label
          >
          <input
            v-model="zipCode.input"
            v-on:keyup="validateNumber(zipCode)"
            type="number"
            name="zipCode"
            id="zipCode"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + zipCode.color,
            ]"
            minlength="3"
            required
          />
          <div
            v-text="zipCode.msg"
            :class="['text-xs', 'text-' + zipCode.color]"
          ></div>
        </div>
      </article>

      <article class="w-full flex justify-between items-center">
        <a
          href="/Paso2"
          class="h-12 w-36 flex justify-center items-center border border-mainColor bg-secundaryColor rounded-md text-mainColor"
          >Atras</a
        >
        <button
          type="submit"
          class="h-12 w-36 flex justify-center items-center border border-green rounded-md text-green"
        >
          Enviar
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
      address: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      zipCode: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
    };
  },
  methods: {
    nextStep(e) {
      /* console.log(this.address, this.zipCode); */
      /* if (this.address.validate != true && this.zipCode != true) {
        
      } */
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      }).then((result) => {
        if (result.isConfirmed) {
          const newData = {
            address: this.address.input,
            zipCode: this.zipCode.input,
          };
          console.log(newData);

          Swal.fire("TERMINASTE", "Formulario enviado con exito.", "success");
          router.push("/");
        }
      });
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
      } else if (e.input.length < 5) {
        e.msg = "Debe tener minimo 5 numeros";
        e.color = "yellow";
        e.validate = false;
      } else {
        e.msg = "Solo se permiten numeros";
        e.color = "red";
        e.validate = false;
      }
    },
    validateAddress(e) {
      if (e.input == "") {
        e.msg = "El campo se encuentra en blanco";
        e.color = "yellow";
        e.validate = false;
      } else {
        e.msg = "El campo es correcto";
        e.color = "green";
        e.validate = true;
      }
    },
  },
};
</script>
<style lang=""></style>
