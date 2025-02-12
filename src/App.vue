<template>
  <AdviceCard />
</template>

<script lang="ts">
import AdviceCard from "./components/AdviceCard.vue";

export default {
  name: "App",
  components: {
    AdviceCard,
  },

  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", serif;
  font-weight: 500;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #202733;
}
</style>
