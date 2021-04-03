<template>
  <div class="header">
    <!--/*顶部条*/-->
    <div class="nav-topbar">
      <div class="container">
        <!--/*容器左边的菜单: '松果出行, 云服务, MIUI...'*/-->
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <!--/*容器右边的菜单: '登录, 注册...'*/-->
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <!--/*顶部条下面的导航*/-->
    <div class="nav-header">

    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    /*设置字体颜色*/
    color: #B0B0B0;

    .container {
      width: 1226px;
      /*让container居中*/
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: space-between; /*两边对齐*/
      align-items: center; /*定义项目在交叉轴上如何对齐*/
      a {
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain; /*缩放背景图片以完全装入背景区，可能背景区部分空白*/
          margin-right: 4px;
        }
      }
    }
  }
}

</style>