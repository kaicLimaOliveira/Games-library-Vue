<template>
  <div>
    <RouterLink to="/Games" />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Games from "@/components/Games.vue";

export default {
  name: "App",
  components: {
    Games,
  },
};
</script>
