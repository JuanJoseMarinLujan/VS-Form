<template lang="">
    <section class="w-full flex flex-col justify-center items-center gap-5">
        <h2 class=" text-center text-4xl text-mainColor">Paso 1</h2>
        <form
        action="submit"
        class="w-4/5 max-w-4xl grid justify-center items-center"
        v-on:submit.prevent="nextStep"
        >
            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="name" class="text-grayColorTwo text-base">Nombre</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    class="border border-mainColor h-10 w-96 rounded-md px-2"
                    minlength="2"
                    required
                    >
                </div>

                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="surname" class="text-grayColorTwo text-base">Apellido</label>
                    <input type="text" name="surname" id="surname" class="border border-mainColor h-10 w-96 rounded-md px-2" minlength="2" required>
                </div>
            </article>

            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="idType" class="text-grayColorTwo text-base">Tipo de documento</label>
                    <select name="idType" id="idType" class="border border-mainColor h-10 w-96 rounded-md px-2" v-model="idType" required>
                        <option v-for="idType of idTypes">{{idType}}</option>
                    </select>
                </div>
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="idNumber" class="text-grayColorTwo text-base">Numero documento</label>
                    <input type="number" name="idNumber" id="idNumber" class="border border-mainColor h-10 w-96 rounded-md px-2" min="5" required>
                </div>
            </article>

            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="dateBirth" class="text-grayColorTwo text-base">Fecha de nacimiento</label>
                    <input type="date" name="dateBirth" id="dateBirth" class="border border-mainColor h-10 w-96 rounded-md px-2" required>
                </div>

                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="" class="text-grayColorTwo text-base">Genero</label>
                    <select name="gender" id="gender" class="border border-mainColor h-10 w-96 rounded-md px-2" v-model="genre" required>
                        <option v-for="gender of genres">{{gender}}</option>
                    </select>
                </div>
            </article>

            <article class="grid gap-2">
                <label for="countries" class="text-grayColorTwo text-base">Pais</label>
                <select name="countries" id="countries" class="border border-mainColor h-10 w-full rounded-md px-2" v-model="country" required>
                    <option v-for="country of countries">{{country.name.common}}</option>
                </select>
            </article>

            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <span class="text-grayColorTwo text-base">Foto documento - Frente</span>
                    <label class="border border-mainColor h-16 w-96 rounded-md flex justify-center items-center text-mainColor text-3xl hover:bg-secundaryColor">
                        <i class="uil uil-image-plus"></i>
                        <input type="file" name="photoFront" id="photoFront" hidden v-on:change="changeInputPhotoFront" required>
                    </label>
                </div>

                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <span class="text-grayColorTwo text-base">Foto documento - Reverso</span>
                    <label class="border border-mainColor h-16 w-96 rounded-md flex justify-center items-center text-mainColor text-3xl hover:bg-secundaryColor">
                        <i class="uil uil-image-plus"></i>
                        <input type="file" name="photoBack" id="photoBack" hidden v-on:change="changeInputPhotoBack" required>
                    </label>
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
import axios from "axios";
import router from "../router/index.js";
export default {
    data() {
        return {
            idTypes: ["Cédula de ciudadanía", "Pasaporte", "Cédula de extranjería"],
            genres: ["No especificar", "Hombre", "Mujer"],
            countries: [],
            newData: {
                name: "",
                surname: "",
                idType: "",
                idNumber: "",
                dateBirth: "",
                genre: "",
                country: "",
                photoFront: "",
                photoBack: ""
            }
        }
    },
    methods: {
        nextStep(e) {
            const dateLimit = "2005-01-01";
            if (e.target.dateBirth.value < dateLimit) {
                this.newData = {
                    ...this.newData,
                    name: e.target.name.value,
                    surname: e.target.surname.value,
                    idType: e.target.idType.value,
                    idNumber: e.target.idNumber.value,
                    dateBirth: e.target.dateBirth.value,
                    genre: e.target.gender.value,
                    country: e.target.countries.value
                }
                console.log(this.newData);
                router.push("Paso2")
            }
        },
        changeInputPhotoFront(e) {
            const file = e.currentTarget.files;
            this.newData = { ...this.newData, photoFront: file }
        },
        changeInputPhotoBack(e) {
            const file = e.currentTarget.files;
            this.newData = { ...this.newData, photoBack: file }
        }
    },
    created() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => this.countries = res.data)
    }
}
</script>
<style lang="">
    
</style>