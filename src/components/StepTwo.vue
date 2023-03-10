<template lang="">
    <section class="w-full flex flex-col justify-center items-center gap-5">
        <h2 class=" text-center text-4xl text-mainColor">Paso 2</h2>
        <form 
        action="submit"
        class="w-4/5 max-w-4xl grid grid-rows-4 justify-center items-center gap-8"
        v-on:submit.prevent="nextStep"
        >
            <article class="grid grid-rows-2">
                <label for="email" class="text-grayColorTwo text-base">Correo electrónico</label>
                <input type="email" name="email" id="email" class="border border-mainColor h-10 w-full rounded-md px-2" required>
            </article>

            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="password" class="text-grayColorTwo text-base">Contraseña</label>
                    <input type="password" name="password" id="password" class="border border-mainColor h-10 w-96 rounded-md px-2" minlength="8" required>
                </div>

                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="passwordConfirmed" class="text-grayColorTwo text-base">Comfirmación de contraseña</label>
                    <input type="password" name="passwordConfirmed" id="passwordConfirmed" class="border border-mainColor h-10 w-96 rounded-md px-2" minlength="8" required>
                </div>
            </article>

            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="phone" class="text-grayColorTwo text-base">Teléfono</label>
                    <input type="number" name="phone" id="phone" class="border border-mainColor h-10 w-96 rounded-md px-2" min="6" required>
                </div>
                
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="cellPhone" class="text-grayColorTwo text-base">Celular</label>
                    <input type="number" name="cellPhone" id="cellPhone" class="border border-mainColor h-10 w-96 rounded-md px-2" min="9" required>
                </div>
            </article>

            <article class="w-full flex justify-between items-center">
                <a href="/" class="h-12 w-36 flex justify-center items-center border border-mainColor bg-secundaryColor rounded-md text-mainColor">Atras</a>
                <button type="submit">
                    <a class="h-12 w-36 flex justify-center items-center border border-mainColor bg-secundaryColor rounded-md text-mainColor">Siguiente</a>
                </button>
            </article>
        </form>
    </section>
</template>
<script>
import router from "../router/index.js";
export default {
    data() {
        return {
            newData: {
                email: "",
                password: "",
                passwordConfirmed: "",
                phone: "",
                cellPhone: ""
            }
        }
    },
    methods: {
        nextStep(e) {
            if (e.target.password.value === e.target.passwordConfirmed.value) {
                this.newData = {
                    email: e.target.email.value,
                    password: e.target.password.value,
                    phone: e.target.phone.value,
                    cellPhone: e.target.cellPhone.value
                }
                console.log(this.newData);
                console.log(this.$route);
                router.push("Paso3");
            }
        }
    }
}
</script>
<style lang="">
    
</style>