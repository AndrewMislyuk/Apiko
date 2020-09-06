<template>
  <div>
    <formHeader />

    <div class="container">
      <formLogin />
    </div>

    <formFooter />
  </div>
</template>

<script>
import formHeader from "@/components/v-form-header.vue";
import formFooter from "@/components/v-home-footer.vue";
import formLogin from "@/components/v-form-login.vue";

export default {
  name: "login",
  components: {
    formHeader,
    formFooter,
    formLogin,
  },
};
</script>

<style lang="scss">
.container {
  flex-grow: 1;
  width: 100%;
  max-width: 425px;
  min-height: 72vh;
  margin: 138px auto 50px;
}
</style>
