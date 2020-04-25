<template>
  <div class="dashboard container flex-container">
    <Menu />
    <div class="right-container flex-container flex-column">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";

export default {
  name: "Dashboard",
  components: {
    Menu,
    Header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.right-container {
  flex: 1;
}
</style>
