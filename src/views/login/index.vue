<template>
  <div class="login-container">
    <div class="login-form">
      <img class="diy-img" src="@/assets/common/logo.png">
      <el-form ref="form" class="loginform" :model="loginFormData" :rules="loginrules">
        <el-form-item prop="loginName">
          <span
            class="svg-container el-icon-mobile-phone"
          />
          <el-input v-model="loginFormData.loginName" type="text" placeholder="请输入用户名/手机号" />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container el-icon-lock" />
          <el-input v-model="loginFormData.password" :type="passwordType" placeholder="请输入密码" />
          <span>
            <svg-icon :icon-class="passwordType==='password'? 'eye':'eye-open'" @click="showPwd" />
          </span>
        </el-form-item>

        <el-form-item prop="code">
          <el-row>
            <el-col :span="17">
              <span class="svg-container el-icon-user-solid" />
              <el-input v-model="loginFormData.code" placeholder="请输入验证码" />
            </el-col>
            <el-col :span="7"> <img class="diy-code-image" :src="imageData" alt="xxx"></el-col>
          </el-row>

        </el-form-item>

        <el-button class="loginBtn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { imageVerificationCodeApi } from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      loginFormData: {
        loginName: 'admin',
        password: 'admin',
        code: ''
      },
      passwordType: 'password',
      imageData: '',
      loading: false,
      // 表单校验规则
      loginrules: {
        loginName: [{ required: true, message: '请输入账号' }],
        password: [{ required: true, message: '请输入密码' }],
        code: [{ required: true, message: '请输入验证码' }]

      }
    }
  },
  computed: {
    clientToken() {
      return Math.random()
    }
  },
  created() {
    this.getImgCode()
  },
  methods: {
    showPwd() {
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async getImgCode() {
      const { data } = await imageVerificationCodeApi(this.clientToken)
      this.imageData = window.URL.createObjectURL(data)
      console.log(this.imageData)
    },
    // 点击登录事件
    login() {
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  display: flex;
  align-items: center;
  justify-content: center;
  .loginform{
    width: 518px;
    height: 388px;
    background: #fff;
    border-radius: 10px;
    padding: 76px 35px 0;
  }
  .diy-img{
      position: absolute;
      width: 96px;
      height: 96px;
      left: 50%;
      transform: translate(-50%,-50%);
  }

  .loginBtn{
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }
}

</style>

<style lang="scss">

$bg:#283443;
$light_gray:#999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
   background-image: url('~@/assets/common/background.png'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  background-repeat: no-repeat;
    background-size: cover;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    color: #454545;
      width: 100%;
    height: 52px;
    margin-bottom: 24px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
  .el-form-item__content{
    line-height: 50px;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    font-size: 16px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
