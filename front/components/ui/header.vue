<template>

    <header class="bg-[#263e90] p-4 flex justify-between items-center">
        <!-- Logo o título -->
        <nuxt-link to="https://www.lexcob.com.ec"  class="flex items-center active">
      
          <img src="https://hostluvi.com/lex/images/logolexcob_web.png" class="logo-svgmr-5 h-14 w-19"  style="margin-left: 20px; margin-top: 15px;" alt="AMC"  />
    </nuxt-link>
      
    
    <div class="flex px-4 py-2 hide-for-mobile">
    
          <div class=" space-x-5 hide-for-mobile">
          <a href="/"  class="active">
  <button class="bg-[#263e90] text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#e00003]  text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Poppins', sans-serif; font-size: 20px;">
    INICIO
  </button>
</a>
</div>
<div class=" space-x-5 hide-for-mobile">
          <a href="empresa"  class="active">
  <button class="bg-[#263e90] text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#e00003] text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Poppins', sans-serif; font-size: 20px;">
    EMPRESA
  </button>
</a>
</div>

      
        <div class="sub-menu-item hide-for-mobile">
          <a href="#"  class="active">
  <button class="bg-[#263e90] text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#e00003] text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Poppins', sans-serif; font-size: 20px;">
   SERVICIOS
  </button>
</a>
          <div class="submenu">
            <div class="flex-row items-center justify-center gap-60 p-10">
              <div class="sub-level-menu">
            
                <a href="gestiondecobranzas">Gestión de cobranzas</a>
                <a href="outsourcing-contable-quito-ecuador">Outsorcing contable</a>
                <a href="asesorialegal">Asesoría legal</a>
              </div>
              
            </div>
          </div>
        </div>


        <div class="hide-for-mobile">
        <a href="documentosinteres"  class="active">
  <button class="bg-[#263e90] text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#e00003] text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Poppins', sans-serif; font-size: 20px;">
    DOCUMENTOS DE INTERÉS
  </button>
</a>
</div>

<div class=" hide-for-mobile">

        <!-- Botón 4 -->
        <a href="contactenos"  class="active">
  <button class="bg-[#263e90] text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#e00003] text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Poppins', sans-serif; font-size: 20px;">
   CONTÁCTENOS
  </button>
</a>
</div>
</div>


       
      <!-- Links de inicio de sesión y registro -->
      <div class="space-x-4 hide-for-mobile">
          <!-- Link de Iniciar Sesión con icono -->
          <a
            href="https://www.crm.lexcob.com.ec"
            class="text-[#ffffff] hover:text-[#e00003] transition-colors duration-300"
            style="font-family: 'Poppins', sans-serif; font-size: 20px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
           CRM
          </a>
    
          <!-- Link de Registro con icono -->
         
        </div>
    
        <div class="mobile-menu">
          <button @click="toggleSubmenu">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
    
          <div class="menuList" v-if="isActive">
            <ul>
              <li>
                <a href="inicio"> INICIO </a>
              </li>
              <!-- Botón 2 -->
              <li>
                
                <a href="empresa">EMPRESA</a>
              </li>


              <li>
                
                <a href="#">SERVICIOS</a>
              </li>
    
              <li>
                <a href="documentosinteres"> DOCUMENTOS DE INTERÉS</a>
              </li>
              <li>
              <a href="contactenos"> CONTÁCTENOS</a>
            </li>
            </ul>
           
          </div>
        </div>
      </header>
      <div style="border-top: 4px solid #e00003"></div>
      
    </template>
    
    <script >
    
    
    
    export default {
      data() {
        return {
          isActive: false,
        };
      },
      methods: {
        toggleSubmenu() {
          this.isActive = !this.isActive
          console.log(">>>>>>> running ",this.isActive);
        }
      }
    };
    
    
    
    </script>
    
    <style scoped>
    /* Estilo para eliminar el margen inferior del encabezado */
    header {
      margin-bottom: 0;
      top: 0;
      z-index: 9999;
    }
    
    .active {
        color: #263e90; /* Cambia el color del texto cuando el enlace está activo */
        font-weight: normal !important; 
    
      }
    /* Clase para el texto con color blanco */
    .texto-blanco {
      color: #636363;
    }
    
    /* Clase para el hover con color gris claro */
    .hover-turquesa:hover {
      color: #9041ff; /* Color de texto gris claro para el hover */
      border-radius: 9px;
      width: 100%;
      height: 100%; /* Asegura que el fondo ocupe el 100% del alto */
      display: block; /* Asegura que el enlace se muestre como bloque y ocupe el 100% del ancho */
      position: relative; /* Asegura que el elemento contenedor tenga un contexto de posición para el borde redondeado */
    }
    
    nav {
      position: relative;
    }
    
    nav::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 10px;
      background-color: #e00003;
    }
    
    .nuxt-link-active {
      background-color: white; /* Establece el fondo blanco cuando el enlace está activo o se ha visitado */
      /* Otros estilos si es necesario */
    }
    header {
      position: relative;
    }
    
    
    .mobile-menu {
      display: none;
    }
    .mobile-menu button svg path {
      stroke: #ffffff;
    }
    .mobile-menu button:hover {
      background-color: transparent;
    }
    .mobile-menu .menuList {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      z-index: 999;
      background-color: #fff;
      display: block;
    }
    .mobile-menu .menuList.active {
      display: block;
    }
    .mobile-menu .menuList ul {
      margin: 0;
      padding: 0;
      border-bottom: solid 1px #ccc;
      padding: 10px;
    }
    .mobile-menu .menuList ul li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }
    .mobile-menu .menuList ul li a {
      text-decoration: none;
      color: #000;
      display: block;
    }
    
    @media only screen and (max-width: 1076px) {
      .mobile-menu {
        display: block;
      }
      .hide-for-mobile {
        display: none;
      }
    }
    .sub-menu-item {
      position: relative;
    }
    
    
    .submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
     
     
      transform: translate(-20%, 0%);
      background-color: rgb(255, 255, 255);
      padding: 10px;
      border-radius: 0 0 9px 9px; /* Aplicando un radio de borde de 9px en la parte inferior */
      z-index: 10;
    }
    
    
    .submenu a:hover {
      color: #e00003; /* Cambia el color al hacer hover, reemplaza con tu color preferido */
      
    }
    
    
    
    .sub-level-menu {
      width: max-content;
      display: flex;
      flex-direction: column;
    }
    
    .sub-level-menu a {
      margin-bottom: 10px;
    }
    
    .submenu > div {
      display: flex;
    }
    
    .sub-menu-item:hover .submenu {
      display: block;
    }
    
    .h-6:hover {
          transform: translateY(3px); /* Puedes ajustar la cantidad de desplazamiento vertical */
          transition: transform 0.3s ease-in-out; /* Añade una transición suave */
        }
    
    .mobile-submenu {
      width: max-content;
      display: flex;
      flex-direction: column;
      top: 100%;
      left: 50px;
    }
    
    .logo-svg {
            width: 100px; /* Ancho deseado */
            height: auto; /* Altura ajustada automáticamente */
        }
    
        .flex {
  display: flex;
  gap: 10px; /* Ajusta este valor según el espacio que desees entre los botones */
}
    
    </style>
    