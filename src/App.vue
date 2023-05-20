<template>
  <main-nav />
  <the-hero />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import TheHero from "@/components/JobSearch/TheHero.vue";

export default {
  name: "App",
  components: {
    MainNav, //main-nav
    TheHero,
  },
};
</script>

<!-- kabbab case => main-nav -->
<!-- pascal case => MainNav -->
