<template lang="">
    <section class="w-full flex flex-col justify-center items-center gap-5">
        <h2 class=" text-center text-4xl text-mainColor">Paso 3</h2>
        <form action="submit"
        class="w-4/5 max-w-4xl grid grid-rows-2 justify-center items-center gap-10"
        v-on:submit.prevent="nextStep"
        >
            <article class="w-full grid grid-cols-2 gap-8">
                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="address" class="text-grayColorTwo text-base">Dirección residencia</label>
                    <input type="text" name="address" id="address" class="border border-mainColor h-10 w-96 rounded-md pl-2" minlength="5" required>
                </div>

                <div class="w-full grid grid-rows-2 justify-start items-center">
                    <label for="zipCode" class="text-grayColorTwo text-base">Código postal</label>
                    <input type="number" name="zipCode" id="zipCode" class="border border-mainColor h-10 w-96 rounded-md pl-2" minlength="3" required>
                </div>
                
            </article>

            <article class="w-full flex justify-between items-center">
                <a href="/Paso2" class="h-12 w-36 flex justify-center items-center border border-mainColor bg-secundaryColor rounded-md text-mainColor">Atras</a>
                <button type="submit" class="h-12 w-36 flex justify-center items-center border border-green rounded-md text-green">Enviar</button>
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
            newData: {
                address: "",
                zipCode: ""
            }
        }
    },
    methods: {
        nextStep(e) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.newData = {
                        address: e.target.address.value,
                        zipCode: e.target.zipCode.value
                    }
                    console.log(this.newData);

                    Swal.fire(
                        'TERMINASTE',
                        'Formulario enviado con exito.',
                        'success'
                    )
                    router.push("/")
                }
            })
        }
    }
}
</script>
<style lang="">
    
</style>