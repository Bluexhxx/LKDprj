<template>
  <div class="login-container">
    <div class="login-form">
      <img class="diy-img" src="@/assets/common/logo.png">
      <el-form class="loginform">
        <el-form-item>
          <span
            class="svg-container el-icon-mobile-phone"
          />
          <el-input />
        </el-form-item>
        <el-form-item>
          <span class="svg-container el-icon-lock" />
          <el-input />
        </el-form-item>
        <el-form-item>
          <span class="svg-container el-icon-user-solid" />
          <el-input />
          <span>
            <svg-icon icon-class="eye" />
          </span>
        </el-form-item>
        <el-button class="loginBtn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login'
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
$light_gray:#fff;
$cursor: #fff;

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
