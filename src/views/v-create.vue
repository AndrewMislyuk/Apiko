<template>
  <div>
    <createHeader />
    <createForm />
  </div>
</template>

<script>
import createHeader from "@/components/v-create-header.vue";
import createForm from "@/components/v-create-form.vue";

export default {
  name: "create",
  components: {
    createHeader,
    createForm,
  },
};
</script>

<style lang="scss"></style>
