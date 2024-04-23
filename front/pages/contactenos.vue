<script setup>

</script>

<template>
   


  <div class="bg-gradient-to-r from-[#263e90] to-[#e00003] p-10  flex " style="overflow: hidden;">
 
  <p class="text-overlay ">
    CONTÁCTENOS
  </p>

</div>

<div class="spacer"></div>

<div class="flex flex-col lg:flex-row">
    <ImagenColumna />
    <FormularioSoporte />
  </div>





    <div class="spacer"></div>

</template>

<script>
import ImagenColumna from '~/components/ImagenColumna.vue';
import FormularioSoporte from '~/components/FormularioSoporte.vue';

export default {
  components: {
    ImagenColumna,
    FormularioSoporte
  },
};
</script>

<style scoped lang="scss">


.flex {
    overflow-x: hidden !important;
  position: relative;
}

.spacer {
  height: 15px; /* Altura del espacio entre los divs */
}

.image-container {
  position: relative;
  display: inline-block; /* Para asegurarse de que el contenedor se ajuste al tamaño de la imagen */
}

.image {
  max-width: 100%; /* Asegura que la imagen no sea más ancha que su contenedor */
}

.text-overlay {
   position: relative;
   font-size: 40px;
  color: white; /* Cambia el color del texto según tus preferencias */
 
  background: rgba(38, 63, 144, 0); /* Fondo transparente con opacidad del 50% */

}
h1.text-base {

  font-size: 22px;
}

</style>