<script setup>

</script>

<template>
   


  <div class="bg-gradient-to-r from-[#263e90] to-[#e00003] p-10  flex " style="overflow: hidden;">
 
  <p class="text-overlay ">
    EMPRESA
  </p>
</div>
<div class="spacer"></div>

<div class="flex flex-wrap mx-1" >
  <!-- Primera columna -->
  <div class="w-full md:w-1/4 px-2" >
    <div class="bg-[#FBF8FF] rounded-lg p-4 text-center">
       
      <img src="~/assets/images/iconoquienessomos-150x150.png" alt="Imagen 1" class="mx-auto mt-4 rounded-lg">  
      <p class="text-gray-800 text-justify px-3 py-3">Un equipo de primer nivel preocupado por la problemática actual. Con sólidos y amplios conocimientos en Contabilidad, de Costos, Servicios y Comercial con experiencia en Constructoras. Tenemos como principal objetivo, brindar soluciones integrales en las Área Contable, Tributaria, Laboral, Societaria. Ofreciendo un servicio de asesoría online externa contando con un software especializado que se adapta a las necesidades de cada empresa.</p>
      
    </div>
  </div>

  <!-- Segunda columna -->
  <div class="w-full md:w-1/4 px-2 ">
    <div class="bg-[#FBF8FF] rounded-lg p-4 text-center" >
      <img src="~/assets/images/iconomision-150x150.png" alt="Imagen 1" class="mx-auto mt-4 rounded-lg">  
     
      <p class="text-gray-800 text-justify px-3 py-3">Convertirnos en un Apoyo Administrativo, Financiero permanente con soluciones estratégicas rentables para nuestros clientes tomando en cuenta que el éxito de ambos está intimamente relacionado. Colocándonos de esta manera como un servicio de primer nivel en el mercado.</p>
      
    </div>
  </div>

  <!-- Tercera columna -->
  <div class="w-full md:w-1/4 px-2 " >
    <div class="bg-[#FBF8FF] rounded-lg p-4 text-center" >
      <img src="~/assets/images/iconovision-150x150.png" alt="Imagen 1" class="mx-auto mt-4 rounded-lg">  
      <p class="text-gray-800 text-justify px-3 py-3">Ser una empresa distinguida reconocida, que se desarrolle en forma segura, confiable, sólida, flexible, rentable, con la calidad humana y ética de nuestra gente, con una gestión que se anticipe y adapte al cambio, iinnovación continua y permanente de acuerdo a la experiencia obtenida.</p>
    </div>
  </div>


  <!-- cuarta columna -->
  <div class="w-full md:w-1/4 px-2 " >
    <div class="bg-[#FBF8FF] rounded-lg p-4 text-center">
      <img src="~/assets/images/iconosvalores-150x150.png" alt="Imagen 1" class="mx-auto mt-4 rounded-lg">  
    
      <li class="text-gray-800 text-justify px-3 py-1">Profesionalismo</li>
      <li class="text-gray-800 text-justify px-3 py-1">Pasión por lo que hacemos</li>
      <li class="text-gray-800 text-justify px-3 py-1">Experiencia</li>
      <li class="text-gray-800 text-justify px-3 py-1">Capacidad</li>
      <li class="text-gray-800 text-justify px-3 py-1">Ética</li>
      
    </div>


  
</div>
</div>




    <div class="spacer"></div>

</template>


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

