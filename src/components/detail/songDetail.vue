<template>
  <div class="detail">
    <span @click="back"></span>
    <div class="album">
      <img :src="this.src" alt />
    </div>
    <div class="lrc">
      <div class="lrcmain" id="lrcmain">
        <p v-for="(item,i) in jsonL" :key="i">{{item}}</p>
      </div>
    </div>
    <div class="playAarea">
      <audio :src="songurl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      now:5,
      hight:20,
      songurl: "",
      src: "",
      lrc: "",
      jsonL: {},
      lrcTime:[]
    };
  },
  components: {},
  methods: {
    back() {
      this.songurl = "";
      this.$router.go(-1);
    },

  },
  mounted() {
    this.$http({
      url: "http://localhost:3000/song/url",
      params: {
        id: this.$route.query.id
      }
    })
      .then(res => {
        // console.log(res, "sss");
        this.songurl = res.data.data[0].url;
        console.log(this.songurl, "songurl");
      })
      .catch(err => {
        console.log(err, "sss");
      });
    //获取封面
    this.$http({
      url: "http://localhost:3000/song/detail",
      params: {
        ids: this.$route.query.id
      }
    })
      .then(res => {
        // console.log(res, "uuuuu");
        this.src = res.data.songs[0].al.picUrl;
        // console.log(this.src, "src");
      })
      .catch(err => {
        // console.log(err, "sss");
      });
    //获取歌词
    this.$http({
      url: "http://localhost:3000/lyric",
      params: {
        id: this.$route.query.id
      }
    })
      .then(res => {
        // console.log(res, "lll");
        this.lrc = res.data.lrc.lyric;
        let str = this.lrc.split("[");
        let arr1 = str.map((item, i) => {
          return item.split("]");
        });
        // let json = {};
        let json=[]
        let time=[]
        for (var i = 1; i < arr1.length - 1; i++) {
          var a = arr1[i]
          let b=a[0].substring(a[0].indexOf('.')+1)+a[0].substring(0,a[0].indexOf(':'))*60*1000+a[0].substring(a[0].indexOf(':')+1,a[0].indexOf('.'))*1000
          // console.log(b,'aaaaa') 
          time.push(b)
          // json[a[0]] = a[1] || "";
          json.push(a[1])
          // json[b] = a[1] || "";

        }
        this.jsonL=json
        this.lrcTime=time
        this.lrcTime.map((item,i)=>{
          this.hight =this.hight+20
          this.$jq('#lrcmain').animate({'top':'-'+(this.hight)+'px'},(this.lrcTime[i]-this.lrcTime[i-1]))
        })
        // console.log(this.jsonL , "this.jsonL ");
        // console.log(time, "time");
      })
      .catch(err => {
        console.log(err, "sss");
      });
  }
};
// let lyric=document.getElementById('lyric')
// let str=lyric.innerHTML
// let str1=str.split('[')
// console.log(str1,'str')
</script>

<style scoped>
@import "../../assets/css/detail.css";
</style>
