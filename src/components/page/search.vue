<template>
  <div class="search">
    <div class="searchBox">
      <div class="inp">
        <span></span>
        <input type="text" @click="focus" />
      </div>
      <div v-show="del" @click="cancle">取消</div>
    </div>
    <div class="result">
      <div class="main" v-show="!del">
        <h3>热门搜索</h3>
        <div v-for="(item,i) in hots" :key="i" @click='getInfo(item.first)'>{{item.first}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import  '../../assets/js/search'
export default {
  name: "search",
  data(){
    return {
      del:false,
      hots: [],
      songurl:'',
      
    }
  },
  methods:{
   
         focus(){
            if(this.del==false){
                this.del=true
            }
            
         },
         cancle(){
            this.del=!this.del
         },
        getInfo(name){
          this.$router.push('/play?name='+name)
          
        /*     this.$http({
        url: "http://localhost:3000/search",
            params:{
                keywords:name
            }
       
        })
        .then(res => {
            console.log(res, "d");
            this.d = res.data.result.songs;
            console.log(this.d, "ds");
        })
        .catch(err => {
            console.log(err, "d");
        }); */
        },
     
  },
  mounted() {
    this.$http({
      url: "http://localhost:3000/search/hot"
    })
      .then(res => {
        console.log(res, "hot");
        this.hots = res.data.result.hots;
        console.log(this.hots, "hots");
      })
      .catch(err => {
        console.log(err, "hot");
      });
  }
};
</script>

<style scoped>
@import '../../assets/css/search.css';
</style>
