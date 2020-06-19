<template>
  <div class="about">
    <Header :isLoggedIn="isLoggedIn"></Header>
    <br>
    <FormSubmitter></FormSubmitter>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FormSubmitter from "@/components/FormSubmitter.vue";

export default {
  components: {
    Header,
    FormSubmitter
  },
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>