import "vue-toastification/dist/index.css";
import Toast, { PluginOptions } from "vue-toastification";
export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
  };
  nuxtApp.vueApp.use(Toast, options);
});
