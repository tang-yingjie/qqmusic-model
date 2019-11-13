<template>
  <div class="home">
    <hh></hh>
    <div class="nav">
      <router-link to="/recommend" active-class="active">推荐</router-link>
      <router-link to="/rank" active-class="active">排行</router-link>
      <router-link to="/search" active-class="active">搜索</router-link>
    </div>
    <div class="bar wrap">
      <a href="#">安装QQ音乐 发现更多精彩</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import hh from "./homeHead";
export default {
  name: "home",
  components: {
    hh,
  }
};
</script>

<style scoped>

.nav {
  height: 40px;
  line-height: 39px;
  width: 7.5rem;
  border-top: 1px solid black;
  background: #fff;
  padding-top: 80px;
  display: flex;
  margin-bottom: 2px
}
.nav a {
  /* display: inline-block; */
  flex: 1;
  /* width: 2.3rem; */
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid transparent;
  text-align: center;
  color: #666;
  font-size: 16px;
}
.nav .active {
  border-bottom: 2px solid #31c27c;
  color: #31c27c;
}
.bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .84rem /* 63/75 */;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 110;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  padding: 15px 0;
}
.bar a {
  display: block;
  /* position: absolute;
  top: 0;left: 0;right: 0;bottom: 0; */
  margin:0 auto;
  padding: 0 .2rem /* 15/75 */ ;
  border-radius: .33rem /* 25/75 */;
  background-color: #30c27c;
  color: #fff;
  height: .44rem /* 33/75 */;
  line-height: .44rem ;
  text-align: center;
  font-size: .19rem /* 14/75 */;
}
</style>
