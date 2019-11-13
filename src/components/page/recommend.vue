<template>
  <div class="recommend">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,i) in banners" :key="i">
            <img :src="item.imageUrl" alt="">
          </div>
         <!--  <div class="swiper-slide">
            <img src="../../assets/images/banner1.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner2.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner3.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner4.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/banner5.jpg" alt />
          </div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="bc wrap">
      <h3>电台</h3>
      <ul>
        <li v-for="(item,index) in dj" :key="index" v-if="2>index">
          <div>
            <img :src="item.picUrl" alt />
            <span></span>
          </div>
          <p>{{item.name}}</p>
        </li>
<!--         <li>
          <div>
            <img src="../../assets/images/every.jpg" alt />
            <span></span>
          </div>
          <p>每人一首成名曲</p>
        </li> -->
      </ul>
    </div>
    <div class="footer">
      <a href="#">查看电脑版网页</a>
      <img src="../../assets/images/logo_footer.png" alt />
      <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import '../../../node_modules/swiper/css/swiper.min.css'
import Swiper from 'swiper'
export default {
  name: "recommend",
  data() {
    return {
      banners:[],
      dj:[]
    }
  },
  methods:{
    myswiper(){
       var swiper = new Swiper('.swiper-container', {
        pagination: {
           el: '.swiper-pagination',
         },loop : true,
         autoplay: {
           delay: 1500,
           stopOnLastSlide: false,
           disableOnInteraction: true,
       }
      })
    }
  },
  mounted(){
     //banner
    this.$http({
      url:'http://localhost:3000/banner'
    })
    .then((res)=>{
      this.banners=res.data.banners
      this.$nextTick(()=>{
        // console.log(1)
         this.myswiper()
      })
     
    })
    .catch((err)=>{

    })
    //dj
       this.$http({
      url:'http://localhost:3000/personalized/djprogram'
    })
    .then((res)=>{
      // console.log(res,'res')
      this.dj=res.data.result
      // console.log(this.dj,'dj')
    })
    .catch((err)=>{
      console.log(err,'errr')
    })
  }    
};
</script>


<style >
@import '../../assets/css/recommend.css';
  
</style>
