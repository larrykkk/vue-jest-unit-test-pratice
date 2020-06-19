<template>
  <div>
    <button ref="logOutButton" v-if="loggedIn" @click="$emit('logout')">登出</button>
    <button ref="logInButton" v-else @click="$emit('login')">登入</button>
  </div>
</template>

<script>
export default {
  props: {
    loggedIn: Boolean
  }
};
</script>
