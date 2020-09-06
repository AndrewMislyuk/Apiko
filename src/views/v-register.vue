<template>
  <div>
    <formHeader />

    <div class="container">
      <formRegister />
    </div>

    <formFooter />
  </div>
</template>

<script>
import formHeader from "@/components/v-form-header.vue";
import formFooter from "@/components/v-home-footer.vue";
import formRegister from "@/components/v-form-register.vue";

export default {
  name: "register",
  components: {
    formHeader,
    formFooter,
    formRegister,
  },
};
</script>
<style lang="scss">
.container {
  flex-grow: 1;
  width: 100%;
  max-width: 425px;
  margin: 138px auto 50px;
}
</style>
