<template>
  <div>
    <homeHeader />

    <div class="container">
      <homeContent />
    </div>

    <homeFooter />
  </div>
</template>

<script>
import homeHeader from "@/components/v-home-header.vue";
import homeFooter from "@/components/v-home-footer.vue";
import homeContent from "@/components/v-home-content.vue";

export default {
  name: "home",
  components: {
    homeFooter,
    homeHeader,
    homeContent,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 855px;
  margin: 185px auto 0;
  flex-grow: 1;
}
@media (max-width: 425px) {
  .container {
    margin: 120px auto 0 !important;
  }
}
</style>
