<template>
  <div class="container">
    <SideMenu />

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import SideMenu from "@/components/common/SideMenu";

export default {
  components: {
    SideMenu,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

aside {
  width: 30%;
}

main {
  flex: 1;
  overflow: auto;
}
</style>
