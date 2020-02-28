<template>
  <div class="login bg-white" style="overflow:hidden;">
  会员
    <div>
      <div v-if="loginUser">已登录</div>
      <div v-else @click="login()">未登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      loginUser: window.sessionStorage.getItem('user') ? window.sessionStorage.getItem('user') : false
    }
  },
  methods: {
    login () {
      console.log(window.sessionStorage.getItem('user'))
      this.loginUser = true
      this.$store.commit('GET_USER', true)
    }
  }
}
</script>

<style scoped></style>
