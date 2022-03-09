<template>
  <header>
    <div class="l-content ">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: white">首页</h3>
    </div>
    <div class="r-content">
      <el-Dropdown trigger="hover" size="mini">
        <span>
          <img :src="userImg" class="user" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-Dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
  data () {
    return {
      userImg: require('../assets/img/user.jpeg')
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="less" scoped>
  header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>
