<template>
  <div class="lg:w-1/2 p-6">
    <form @submit.prevent="sendMail"  class="p-1">
      <p style="font-size: 16px; font-weight: bold;"> Llena los siguientes campos para mayor información</p>
      <span style="display: block; margin-bottom: 20px;"></span>
      <label for="nombre" class="pt-500" >Nombre de la empresa:</label>
      <input v-model="formData.nombre" type="text" id="nombre" name="nombre" class="w-full mb-4 p-2 rounded-md border border-black">

      <label for="telefono">Teléfono:</label>
      <input v-model="formData.telefono" type="tel" id="telefono" name="telefono" class="w-full mb-4 p-2 rounded-md border border-black">

      <label for="correo">Correo:</label>
      <input v-model="formData.correo" type="email" id="correo" name="correo" class="w-full mb-4 p-2 rounded-md border border-black">

      <label for="requerimiento">Descripción del requerimiento:</label>
      <textarea v-model="formData.requerimiento" id="requerimiento" name="requerimiento"
        class="w-full mb-4 p-2 rounded-md border border-black"></textarea>

      <button type="submit" class="estil1 bg-[#FFF200]   rounded-md">Enviar</button>
    </form>
  </div>
</template>
  
<script>
import { useToast } from 'vue-toastification';


const toast = useToast();
export default {
  name: 'FormularioSoporte',
  data() {
    return {
      formData: {
        nombre: '',
        telefono: '',
        correo: '',
        requerimiento: ''
      }
    }
  },
  methods: {
    sendMail() {
      // All form data should be written as mail body

      if (
        !this.formData.nombre.trim() ||
        !this.formData.telefono.trim() ||
        !this.formData.correo.trim() ||
        !this.formData.requerimiento.trim()
      ) {
        toast.error('Completa todos los campos');
        return;
      }

      const emailData = {
        to: "websecuador.net@gmail.com",
        subject: 'Nueva Formulario Web Lexcob',
        text: `
          Nombre de la empresa: ${this.formData.nombre}
          Teléfono: ${this.formData.telefono}
          Correo: ${this.formData.correo}
          Descripción de la alianza: ${this.formData.requerimiento}
        `,
      };


    }
  }
};

</script>
<style>
/* Estilo inicial del botón */
.estil1 {
  background-color: #FFF200;
  color: #000000;
  /* Color del texto negro */
  transition: color 0.3s;
  /* Agrega una transición suave para el cambio de color */
  padding: 6px;
}

/* Efecto hover para cambiar el color del texto a blanco */
.estil1:hover {
  color: #FFFFFF;
  padding: 6px;
}

.p-1{

  margin-top: -24px;
}
</style>


