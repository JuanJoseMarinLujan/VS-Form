<template lang="">
  <section class="w-full flex flex-col justify-center items-center gap-5">
    <h2 class="text-center text-4xl text-mainColor">Paso 1</h2>
    <form
      action="submit"
      class="w-4/5 max-w-4xl grid justify-center items-center"
      v-on:submit.prevent="nextStep"
    >
      <article class="w-full grid grid-cols-2 gap-8">
        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="name" :class="['text-base', 'text-' + name.color]"
            >Nombre</label
          >
          <input
            placeholder="Nombre"
            v-model="name.input"
            v-on:keyup="validateFullName(name)"
            type="text"
            name="name"
            id="name"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + name.color,
            ]"
            minlength="2"
            required
          />
          <div
            v-text="name.msg"
            :class="['text-xs', 'text-' + name.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="surname" :class="['text-base', 'text-' + surname.color]"
            >Apellido</label
          >
          <input
            placeholder="Apellido"
            v-model="surname.input"
            v-on:keyup="validateFullName(surname)"
            type="text"
            name="surname"
            id="surname"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + surname.color,
            ]"
            minlength="2"
            required
          />
          <div
            v-text="surname.msg"
            :class="['text-xs', 'text-' + surname.color]"
          ></div>
        </div>
      </article>

      <article class="w-full grid grid-cols-2 gap-8">
        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="idType" :class="['text-base', 'text-' + idType.color]"
            >Tipo de documento</label
          >
          <select
            name="idType"
            id="idType"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + idType.color,
            ]"
            v-model="idType.input"
            v-on:click="validateSelect(idType)"
            required
          >
            <option disabled value="">Seleccione el tipo de documento</option>
            <option v-for="idType of idTypes">{{ idType }}</option>
          </select>
          <div
            v-text="idType.msg"
            :class="['text-xs', 'text-' + idType.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="idNumber" :class="['text-base', 'text-' + idNumber.color]"
            >Numero documento</label
          >
          <input
            placeholder="Numero de documento"
            v-model="idNumber.input"
            v-on:keyup="validateIdNumber(idNumber)"
            type="number"
            name="idNumber"
            id="idNumber"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + idNumber.color,
            ]"
            min="5"
            required
          />
          <div
            v-text="idNumber.msg"
            :class="['text-xs', 'text-' + idNumber.color]"
          ></div>
        </div>
      </article>

      <article class="w-full grid grid-cols-2 gap-8">
        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label
            for="dateBirth"
            :class="['text-base', 'text-' + dateBirth.color]"
            >Fecha de nacimiento</label
          >
          <input
            v-on:change="validateDateBirth(dateBirth)"
            v-on:click="validateDateBirth(dateBirth)"
            v-model="dateBirth.input"
            type="date"
            name="dateBirth"
            id="dateBirth"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + dateBirth.color,
            ]"
            required
          />
          <div
            v-text="dateBirth.msg"
            :class="['text-xs', 'text-' + dateBirth.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <label for="" :class="['text-base', 'text-' + genre.color]"
            >Genero</label
          >
          <select
            name="gender"
            id="gender"
            :class="[
              'border h-10 w-96 rounded-md px-2',
              'border-' + genre.color,
            ]"
            v-model="genre.input"
            v-on:click="validateSelect(genre)"
            required
          >
            <option disabled value="">Seleccione un genero</option>
            <option v-for="gender of genres">{{ gender }}</option>
          </select>
          <div
            v-text="genre.msg"
            :class="['text-xs', 'text-' + genre.color]"
          ></div>
        </div>
      </article>

      <article class="grid gap-2">
        <label for="countries" :class="['text-base', 'text-' + country.color]"
          >Pais</label
        >
        <select
          name="countries"
          id="countries"
          :class="['border h-10 rounded-md px-2', 'border-' + country.color]"
          v-model="country.input"
          v-on:click="validateSelect(country)"
          required
        >
          <option disabled value="">Seleccione un pais</option>
          <option v-for="country of countries">
            {{ country.name.common }}
          </option>
        </select>
        <div
          v-text="country.msg"
          :class="['text-xs', 'text-' + country.color]"
        ></div>
      </article>

      <article class="w-full grid grid-cols-2 gap-8 mt-10">
        <div class="w-full grid grid-rows-3 justify-start items-center">
          <span :class="['text-base', 'text-' + photoFront.color]"
            >Foto documento - Frente</span
          >
          <label
            :class="[
              'border h-16 w-96 rounded-md flex justify-center items-center text-3xl hover:bg-secundaryColor',
              'border-' + photoFront.color,
              'text-' + photoFront.color,
            ]"
          >
            <i class="uil uil-image-plus"></i>
            <input
              type="file"
              name="photoFront"
              id="photoFront"
              hidden
              v-on:change="changeInputPhotoFront"
              v-on:click="validateInputPhoto(photoFront)"
              required
            />
          </label>
          <div
            v-text="photoFront.msg"
            :class="['text-xs', 'text-' + photoFront.color]"
          ></div>
        </div>

        <div class="w-full grid grid-rows-3 justify-start items-center">
          <span :class="['text-base', 'text-' + photoBack.color]"
            >Foto documento - Reverso</span
          >
          <label
            :class="[
              'border h-16 w-96 rounded-md flex justify-center items-center text-3xl hover:bg-secundaryColor',
              'border-' + photoBack.color,
              'text-' + photoBack.color,
            ]"
          >
            <i class="uil uil-image-plus"></i>
            <input
              type="file"
              name="photoBack"
              id="photoBack"
              hidden
              v-on:change="changeInputPhotoBack"
              v-on:click="validateInputPhoto(photoBack)"
              required
            />
          </label>
          <div
            v-text="photoBack.msg"
            :class="['text-xs', 'text-' + photoBack.color]"
          ></div>
        </div>
      </article>

      <article class="w-full flex justify-center items-center mt-10">
        <button type="submit">
          <a
            class="h-12 w-36 flex justify-center items-center border border-mainColor bg-thirdColor rounded-md text-mainColor hover:bg-secundaryColor"
          >
            Siguiente
          </a>
        </button>
      </article>
    </form>
  </section>
</template>
<script>
import Swal from "sweetalert2";
import axios from "axios";
import router from "../router/index.js";
export default {
  data() {
    return {
      idTypes: ["Cédula de ciudadanía", "Pasaporte", "Cédula de extranjería"],
      genres: ["No especificar", "Hombre", "Mujer"],
      countries: [],
      name: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      surname: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      idType: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      idNumber: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      dateBirth: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      genre: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      country: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      photoFront: {
        input: "",
        msg: "",
        color: "grayColorTwo",
        validate: false,
      },
      photoBack: {
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
        this.name.validate == true &&
        this.surname.validate == true &&
        this.idType.validate == true &&
        this.idNumber.validate == true &&
        this.dateBirth.validate == true &&
        this.genre.validate == true &&
        this.country.validate == true &&
        this.photoFront.validate == true &&
        this.photoBack.validate == true
      ) {
        const newData = {
          name: this.name.input,
          surname: this.surname.input,
          idType: this.idType.input,
          idNumber: this.idNumber.input,
          dateBirth: this.dateBirth.input,
          genre: this.genre.input,
          country: this.country.input,
          photoFront: this.photoFront.input,
          photoBack: this.photoBack.input
        };
        console.log(newData);
        Swal.fire("Paso 1", "Completado correctamente", "success");
        router.push("Paso2");
      }
    },
    changeInputPhotoFront(e) {
      const file = e.currentTarget.files;
      this.photoFront.input = file;
      this.photoFront.msg = "Imagen subida";
      this.photoFront.color = "green";
      this.photoFront.validate = true;
    },
    changeInputPhotoBack(e) {
      const file = e.currentTarget.files;
      this.photoBack.input = file;
      this.photoBack.msg = "Imagen subida";
      this.photoBack.color = "green";
      this.photoBack.validate = true;
    },
    validateFullName(e) {
      if (!e.input.trim()) {
        e.msg = "El campo se encuentra en blanco";
        e.color = "yellow";
        e.validate = false;
      } else if (e.input.search(/^[a-zA-Z\s]*$/)) {
        e.msg = "Solo se permiten letras";
        e.color = "red";
        e.validate = false;
      } else if (e.input.length < 2) {
        e.msg = "Debe tener minimo 2 caracteres";
        e.color = "red";
        e.validate = false;
      } else {
        e.msg = "El campo es correcto";
        e.color = "green";
        e.validate = true;
      }
    },
    validateSelect(e) {
      if (e.input === "") {
        e.msg = "Seleccione un campo";
        e.color = "yellow";
        e.validate = false;
      } else {
        e.msg = "El campo es correcto";
        e.color = "green";
        e.validate = true;
      }
    },
    validateInputPhoto(e) {
      if (!e.input.trim()) {
        e.msg = "Selecciona una imagen";
        e.color = "yellow";
        e.validate = false;
      }
    },
    validateIdNumber(e) {
      if (e.input == "") {
        e.msg = "El campo se encuentra en blanco";
        e.color = "yellow";
        e.validate = false;
      } else if (/^[0-9]+$/.test(e.input)) {
        e.msg = "El campo es correcto";
        e.color = "green";
        e.validate = true;
      } else {
        e.msg = "Solo se permiten numeros";
        e.color = "red";
        e.validate = false;
      }
    },
    validateDateBirth(e) {
      const dateLimit = "2005-01-01";
      if (e.input == "") {
        e.msg = "El campo se encuentra en blanco";
        e.color = "yellow";
        e.validate = false;
      } else if (e.input > dateLimit) {
        e.msg = "Debe ser mayor de 18 años";
        e.color = "red";
        e.validate = false;
      } else {
        e.msg = "La fecha es correcta";
        e.color = "green";
        e.validate = true;
      }
    },
  },
  created() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => (this.countries = res.data));
  },
};
</script>
<style lang=""></style>
