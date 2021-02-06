<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link id="brandElement" class="navbar-item" :to="{ name: 'Home' }" exact>
        <h1 class="title is-4">Simply Donate</h1>
      </router-link>

      <a role="button" id="navbarBurger" class="navbar-burger"
         aria-label="menu" aria-expanded="false"
         data-target="navMenu" @click.stop="toggleNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'HowToDonate' }" active-class="is-primary" exact class="navbar-item">
          Wie wird gespendet?
        </router-link>

        <router-link :to="{ name: 'WhereToDonate' }" active-class="is-primary" exact class="navbar-item">
          Wo kann ich spenden?
        </router-link>
      </div>
      <div class="navbar-end">
        <router-link :to="{ name: 'Account' }" active-class="is-primary" exact class="navbar-item">
          Profil
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggleNavbar() {
      const burger = document.getElementById('navbarBurger');
      const targetId = burger.getAttribute('data-target');
      const $target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    },
  },
};
</script>

<style scoped>
#brandElement {
  color: inherit;
  text-decoration: none;
}
</style>
