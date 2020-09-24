<template>
  <div class="page">
    <div class="username">
      <label for="name">用户名：</label>
      <input type="email" id="name" placeholder="输入邮箱" v-model="userName" autofocus />
    </div>
    <div class="password">
      <label for="pwd">密 码：</label>
      <input type="password" id="pwd" placeholder="输入密码" v-model="password" />
    </div>
    <button @click="login">登录</button>
    <!-- <button @click="registerUser">注册</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: null,
    }
  },
  methods: {
    registerUser() {
      if (!this.userName || !this.password) {
        alert('邮箱和密码不可为空')
        return
      }

      let userInfo = {
        name: this.userName,
        password: this.password,
      }
      this.$http.post('/register', userInfo).then(res => {
        if (res.data.rc === 0) {
          console.log('注册成功')
        }
      })
    },
    login() {
      if (!this.userName || !this.password) {
        alert('邮箱和密码不可为空')
        return
      }
      let userInfo = {
        name: this.userName,
        password: this.password,
      }
      this.$http.post('/login', userInfo).then(res => {
        if (res.data.rc === 0) {
          console.log('登录成功')
        }
      })
    },
  },
  components: {},
}
</script>

<style scoped lang="scss">
.page {
  margin-top: 100px;
  .username,
  .password {
    font-size: 32px;
    margin-top: 20px;
    input {
      font-size: 32px;
      border-radius: 10px;
    }
  }
  .password label {
    margin-right: 20px;
  }
  button {
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    margin-top: 40px;
    border-radius: 10px;
    transition-duration: 700ms;
    &:hover {
      background-color: #6699ff;
      color: #fff;
    }
  }
}
</style>
