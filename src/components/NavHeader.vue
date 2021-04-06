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
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">

            </div>
          </div>
          <div class="item-menu">
            <span>RedMid红米</span>
            <div class="children">

            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">

            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">
@import "../assets/scss/base";
@import "../assets/scss/mixin";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    /*设置字体颜色*/
    color: #B0B0B0;

    .container {
      /*base.scss -> container*/
      @include flex();


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
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          //tag::由mixin函数替换
          /*display: inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain; !*缩放背景图片以完全装入背景区，可能背景区部分空白*!*/
          //end::由mixin函数替换
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      /*base.scss -> container*/
      height: 112px;
      @include flex();
      //tag::由mixin函数替换
      /*display: flex;
      justify-content: $hov; !*两端对齐*!
      align-items: $col; !*在交叉轴的维度*!*/
      //end::由mixin函数替换
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;

        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &:before { /*scss的伪类*/
            content: ' '; /*content是占位的, 如果不加, 伪类就无法正常显示*/
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            //tag::由mixin函数替换
            /*display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;*/
            //end::由mixin函数替换
            transition: margin 0.2s;
          }

          &:after { /*scss的伪类*/
            content: ' ';
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px)
            //tag::由mixin函数替换
            /* display: inline-block;
             width: 55px;
             height: 55px;
             background: url("/imgs/mi-home.png") no-repeat center;
             background-size: 55px;*/
            //end::由mixin函数替换
          }

          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;

        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }

          &:hover { /*控制item-menu的hover*/

          }
        }
      }

      .header-search {
        width: 319px;

        .wrapper {
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center; /*设置交叉轴向的对齐方式*/
          input {
            border: none;
            box-sizing: border-box; /*设置宽度包含padding值, 否则宽度会变成264 + 14*/
            border-right: 1px solid #E0E0E0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }

          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            //tag::由mixin函数替换
            /*display: inline-block; !*一般背景图片都会控制为inline-block*!
            width: 18px; !*注意是按钮的宽度*!
            height: 18px; !*注意是按钮的高度*!
            background: url("/imgs/icon-search.png") no-repeat center; !*背景图片基本上都是这样去写的*!
            background-size: contain; !*contain是让背景图片充满这个元素*!*/
            //end::由mixin函数替换
            margin-left: 17px;
          }

        }
      }
    }
  }
}

</style>