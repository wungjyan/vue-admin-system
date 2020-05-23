<template>
  <div class="login-container">
    <div class="form">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item prop="nickName">
          <el-input v-model="form.nickName" placeholder="nickName">
              <i slot="prefix" class="el-input__icon iconfont icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" >
          <el-input v-model="form.password" type="password" placeholder="password">
              <i slot="prefix" class="el-input__icon iconfont icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nickName: '',
        password: ''
      },
      rules: {
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login () {
      const { nickName, password } = this.form
      this.$store
        .dispatch('user/login', { nickName, password })
        .then(res => {
          this.$message.success('登录成功！')
          this.$router.push({ path: this.redirect || '/' })
        })
        .catch(err => {
          console.log(err)
          this.$message.error(`登录失败：${err.data.error}`)
        })
    },
    handleLogin (form) {
      this.$refs[form].validate(vaild => {
        if (vaild) {
          this.login()
        } else {
          this.$message.error('输入有误')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    .form{
        width: 520px;
        margin: 100px auto;
        overflow: hidden;
    }
}
</style>
