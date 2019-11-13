<template>
  <div class="play">
    <ul>
      <span @click="tolist"></span>
      <!-- <li class="title">{{this.$route.query.name}}</li> -->
      <h2 class="title">{{this.$route.query.name}}</h2>

      <li v-for=" (item,i) in d" :key="i" @click="goPlay(item.id)">
        <p>{{item.name}}</p> 
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "play",
  data() {
    return {
      songurl: "",
      d: [],
    };
  },
  methods: {
    tolist(){
      this.$router.go(-1)
    },
   /*  goPlay(id) {
      this.$http({
        url: "http://localhost:3000/song/url",
        params: {
          id: id
        }
      })
        .then(res => {
          console.log(res, "sss");
          this.songurl = res.data.data[0].url;
          console.log(this.songurl, "songurl");
        })
        .catch(err => {
          console.log(err, "sss");
        });
    } */
    goPlay(id){
      this.$router.push('/songDetail?id='+id)
    }
  },
  components: {},
  mounted() {
    this.$http({
      url: "http://localhost:3000/search",
      params: {
        keywords: this.$route.query.name
      }
    })
      .then(res => {
        console.log(res, "d");
        this.d = res.data.result.songs;
        console.log(this.d, "ds");
      })
      .catch(err => {
        console.log(err, "d");
      });
  }
};
</script>

<style scoped>
@import '../../assets/css/play.css';
</style>
