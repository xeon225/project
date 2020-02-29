<template>
  <div class="login bg-white" style="overflow:hidden;">
    会员
    <div>
      <div v-if="loginUser">已登录</div>
      <div v-else>未登录</div>
    </div>
    <div @click="loginOut()">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      loginUser: window.sessionStorage.getItem('user')
        ? window.sessionStorage.getItem('user')
        : false
    }
  },
  methods: {
    loginOut () {
      // this.$q.dialog({
      //   title: '删除',
      //   message: '确定退出',
      //   position: 'right',
      //   ok: {
      //     push: true,
      //     label: '确定'
      //   },
      //   cancel: {
      //     push: true,
      //     color: 'negative',
      //     label: '取消'
      //   }
      // }).then(() => {

      // })

      this.loginUser = false
      this.$store.commit('LOGOUT')
      // this.$router.push({ path: '/login' })
      this.$router.go()
    }
  }
}
</script>

<style scoped></style>
