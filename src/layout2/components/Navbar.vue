<template>
  <div class="navbar">
    <img src="@/assets/common/logoone.png" class="nav-logo">
    <!-- <div class="right-menu">
      <div class="avatar-wrapper">
        <img src="http://destiny001.gitee.io/image/monkey_02.jpg" class="user-avatar">
        <span>替换用户名</span>
        <i class="el-icon-caret-bottom" />
      </div>
    </div> -->
    <div class="right-menu">
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img src="http://destiny001.gitee.io/image/monkey_02.jpg" class="user-avatar">
          <span>欢迎您，</span><span>admin</span>
          <span style="padding-left: 30px " @click="loginOut">退出<i class="el-icon-caret-bottom" /></span>

        </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async loginOut() {
      await this.$store.dispatch('user/loginOutAction')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.right-menu{
  // background-color: #fff;
  width: 330px;
  height: 60px;
  padding-right:30px ;
}
.navbar {
  background:url("~@/assets/common/backgroundone.png");
  // height: 50px;
  height: 60px;
  width: 100%;
  overflow: hidden;
   position: fixed;
   font-size: 20px;
    top: 0;
    left: 0;
    z-index: 1001;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .nav-logo{
    width: 88px;
    height: 36px;
    margin: 10px;
  }
  .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        position: relative;
        // 开启flex
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 20px;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 15px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 18px;
          font-size: 12px;
        }
      }
    }
}
</style>
