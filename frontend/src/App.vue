<template>
  <div>
    <RouterLink to="/" />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Games from "@/components/layout/Games.vue";

export default {
  name: "App",
  components: {
    Games,
  },
};
</script>

<style scoped>
div {
  margin: 5px;
}
</style>
