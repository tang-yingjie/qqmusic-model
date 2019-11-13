<template>
  <div class="ranking">
    <ul>
      <li v-for="(item,index) in list" :key='index'>
        <a href="#">
          <img :src="item.coverImgUrl" alt />
        </a>
        <div>
          <dl>
            <dt>{{item.name}}</dt>
            <dd v-for="(i,index) in item.tracks" :key='index'>{{index+1}}、{{i.first}}-{{i.second}}</dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$http({
      url: "http://localhost:3000/toplist/detail"
    })
      .then(res => {
        // console.log(res, "rank");
        this.list = res.data.list;
        // console.log(this.list, "list");
      })
      .catch(err => {
        console.log(err, "rank err");
      });
  }
};
</script>
<style lang="">
@import '../../assets/css/rank.css';
</style>