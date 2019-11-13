<template>
  <div class="hh">
     <div class="header wrap">
          <img src="../assets/images/logo_footer.png" alt="">
          <a href="#">下载app</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hh',

}
</script>

<style scoped>
.header {
  width: 7.1rem;
  height:50px;
  line-height: 50px;
  background: #fff;
  padding:30px 10px 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  top:0;
  left: 0;
  box-shadow: 0 5px 5px rgba(0,0,0,.02);
}
.header img {
  display: block;
  height: 35px;
  width: 126px;
}
.header a {
  display: block;
  min-width: 40px;
  height: 25px;
  line-height: 25px;
  padding: 0 0.1rem;
  text-align: center;
  font-size: 14px;
  color: #000;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
}
</style>
