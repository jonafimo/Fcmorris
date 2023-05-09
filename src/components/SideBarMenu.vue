<template>
  <div class="sidebar-menu">
    <div class="sidebar-header">
      <img src="@/assets/imagen.jpg" alt="Logo">
    </div>
    <ul>
      <li v-for="(item, index) in menuItems" :key="index" :class="{ active: activeIndex === index }">
        <router-link :to="{ name: item.routeName }" @click="setActiveIndex(index)">
          <i :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          routeName: "home",
          text: "Home",
          icon: "fas fa-home"
        },
        {
          routeName: "roles",
          text: "Roles",
          icon: "fas fa-user"
        },
        {
          routeName: "anuncios",
          text: "Anuncios",
          icon: "fas fa-bullhorn"
        },
        {
          routeName: "usuarios",
          text: "Usuarios",
          icon: "fas fa-users"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 10%;
  background-color: #000000;
  color: #ffffff;
  overflow: auto;
}

.sidebar-header {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-header img {
  max-height: 90%;
  max-width: 100%;
}

.sidebar-menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 10px;
}

.sidebar-menu li {
  padding: 10px 20px;
  cursor: pointer;
}

.sidebar-menu li:hover {
  background-color: #333333;
}

.sidebar-menu li.active {
  background-color: #ff0000;
}

.sidebar-menu a {
  color: #ffffff;
  text-decoration: none;
}

.sidebar-menu i {
  margin-right: 10px;
}
</style>
