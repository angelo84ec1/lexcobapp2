<template>
  <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="~/assets/images/banner_chica.png" class=" " alt="...">
        </div>
        <div class="swiper-slide">
            <img src="~/assets/images/banners_news_home.png" class=" " alt="...">
        </div>
        <div class="swiper-slide">
            <img src="~/assets/images/banner_chica.png" class=" " alt="...">
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
  <swiper
    :slides-per-view="3"
    :space-between="1"
    :pagination="{ clickable: true }"
    :modules="modules"
    :mousewheel="false"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
  >
  <swiper-slide>
    <a href="https://www.bancodelpacifico.com" target="_blank">
        
    <img src="~/assets/images/logopacifico-150x110.png" class="rounded-image" alt="...">

  </a>
</swiper-slide>
    <swiper-slide>
    <a href="https://www.bancopichincha.com" target="_blank">
        
      <img src="~/assets/images/logopichincha-150x110.png" class="rounded-image" alt="..."
    />
</a>
    </swiper-slide>
    <swiper-slide>
        <a href="https://www.bancoprodubanco.com.com" target="_blank">
        
      <img src="~/assets/images/logoprodubanco-150x110.png" class="rounded-image" alt="..."
    />
</a>
    </swiper-slide>
    <swiper-slide>
      <a href="https://www.uafe.gob.ec/" target="_blank">
        
      <img src="~/assets/images/logounidadanalisisfinanciero-150x110.png" class="rounded-image" alt="..."
    />
</a>
    </swiper-slide>
   
  </swiper>
</template>

<script>
// import Swiper from 'swiper/bundle';
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/vue";
import "swiper/css/pagination";
import "swiper/css";

// import SwiperCore, { Autoplay } from 'swiper/core';
// import 'swiper/swiper-bundle.css';

// SwiperCore.use([Autoplay]);

export default {
  data() {
    return {
      modules: [Mousewheel, Pagination, Autoplay],
    };
  },
  // mounted() {
  //   const swiper = new Swiper(".swiper-container", {
  //     // Configuración de Swiper (ajusta según tus necesidades)
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //   });
  // },
};
</script>

<style scoped>
/* Estilo personalizado para las flechas */
.custom-prev,
.swiper-slide {
  color: black; /* Color negro */
  font-size: 12px; /* Tamaño de fuente personalizado */
  /* Otros estilos personalizados si es necesario */
}
</style>

<style>
.swiper-pagination-bullet-active {
  background: #e00003 !important;
  top: -20px;
}

.text-overlay {
  position: absolute;
  display: flex;
  align-items: center; /* Centra verticalmente en el eje Y */
  justify-content: center; /* Centra horizontalmente en el eje X */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 250;
  font-size: 1vw; /* Establece el tamaño del texto a 8px */
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 2px 2px;
  border-radius: 3px;
}

@media screen and (min-width: 600px) {
  /* Aplica un tamaño de texto mayor para pantallas más grandes */
  .text-overlay {
    display: flex;
    text-align: center;
    font-size: 0.9vw;/* O ajusta el tamaño que desees */
    
  }
}

.rounded-image {
  border-radius: 4px;
}

@media screen and (min-width: 350px) {
  .text-overlay {
    display: flex;
    justify-content: center; /* Centra los elementos horizontalmente */
    align-items: center; /* Centra los elementos verticalmente */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en múltiples filas */
    font-size: 0.9vw; /* O ajusta el tamaño que desees */
  }

  .text-overlay img {
    width: 100px; /* Ajusta el ancho de los logos según tus necesidades */
    margin: 10px; /* Ajusta el espacio entre los logos */
  }
}

.rounded-image img{
  display: flex;
  align-items: center; /* Centra los elementos verticalmente */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en múltiples filas */
  border-radius: 4px;
}

</style>
