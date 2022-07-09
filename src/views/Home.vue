<template>
  <div>
    <!-- Cargamos el componente bounce de VueSpinners -->
    <!-- loading: ¿Cuando se va a cargar? -->
    <!-- color: en formato texto -->
    <!-- size: tamañoque le asignamos -->
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <!-- la tabla solo se muestra si isLoading es false, para no sobreponer el loading -->
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api"; // Importamos la API
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      assets: [], // Creamos array vacio para almacenar los datos del API
      isLoading: false,
      interval: null, // ACTUALIZACION EN VIVO DE PRECIOS SIN REFRESCAR LA PÁGINA
    };
  },
  // Creamos un created ya que se ejecuta al *cargar el componente* y asi hacer la interaccion con la api
  // y poder setear nuestro array de assets
  created() {
    //Al cargar los componentes activa isLoading
    this.isLoading = true;

    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false)); //finally: Al finalizar la carga de los componentes desactiva isLoading

    this.refreshFetch();
  },

  methods: {
    // ACTUALIZACION EN VIVO DE PRECIOS SIN REFRESCAR LA PÁGINA
    refreshFetch() {
      this.interval = setInterval(async () => {
        this.assets = await api.getAssets();
      }, 1000);
    },
  },

  // ACTUALIZACION EN VIVO DE PRECIOS SIN REFRESCAR LA PÁGINA
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
