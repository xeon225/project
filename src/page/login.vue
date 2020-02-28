<template>
  <div class="login">
    登录
    <div>
      <form class="form margin50 paddingh20" @submit.prevent="login">
      <div>用户名<input
              type="text"
              placeholder="请输入用户名"
              id="username"
              name="username"
              v-model="username"
            /></div>
            <button>登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {username: ''}
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
      }).then(res => {
        console.log(res.data)
        // _this.userToken = 'Bearer ' + res.data.data.body.token
        // // 将用户token保存到vuex中
        // _this.changeLogin({ Authorization: _this.userToken })
        // _this.$router.push('/home')
        alert('登陆成功')
      }).catch(error => {
        alert('账号或密码错误')
        this.success()
        console.log(error)
      })
    }
  }
}
</script>

<style scoped></style>
