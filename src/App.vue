<template>
  <div>
    <SidebarMenu />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarMenu from "./components/SideBarMenu.vue";

export default {
  components: {
    SidebarMenu
  }
};
</script>

<style>
/* Agregamos estilos al body para que ocupe todo el alto */
body {
  height: 100%;
  margin: 0;
}

/* Agregamos estilos al contenedor principal */
.container {
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-left: 200px;
  width: calc(100% - 200px);
}
</style>
