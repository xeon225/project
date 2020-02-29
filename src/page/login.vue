<template>
  <div class="login">
    登录
    <div>
      <form class="form margin50 paddingh20" @submit.prevent="login">
        <div>
          用户名<input
            type="text"
            placeholder="请输入用户名"
            id="username"
            name="username"
            v-model="username"
          />
        </div>
        <button>登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return { username: '' }
  },
  mounted () {
    if (sessionStorage.getItem('user')) { // 判断当前用户的登录信息loginInfo是否存在
      this.$router.push({ path: '/mine' })
    }
  },
  methods: {
    login () {
      let _this = this
      if (!this.username) {
        return console.log('请填写用户名')
      }
      // } else if (!/^1\d{10}$/.test(this.username)) {
      //   console.log('请填写标准手机号')
      // }
      this.$axios({
        method: 'post',
        url: '',
        data: _this.username
      })
        .then(res => {
          var user = res.data.token
          var token = res.data.user
          this.$store.commit('GET_USER', user)
          this.$store.commit('GET_TOKEN', token)
          // _this.$router.push('/home')
          alert('登陆成功')
        })
        .catch(error => {
          alert('账号或密码错误')
          this.loginSuccess()
          console.log(error)
        })
    },
    loginSuccess () {
      this.$store.commit('GET_USER', this.username)
      this.$router.push({ path: '/mine' })
    }
  }
}
</script>

<style scoped></style>
