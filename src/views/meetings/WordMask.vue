<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <div class="view view-eighth elevation-24">
          <img :src="require('@/assets/jingxuan/fadongji3.png')" />
          <div class="mask">
            <h2>300行业决策者</h2>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <div class="view view-eighth elevation-24">
          <img :src="require('@/assets/MAT_1264.jpg')" />
          <div class="mask">
            <h2>160优秀企业</h2>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <div class="view view-eighth elevation-24">
          <img :src="require('@/assets/MAT_1659.jpg')" />
          <div class="mask">
            <h2>100OEM+发动机厂商代表</h2>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <div class="view view-eighth elevation-24">
          <img :src="require('@/assets/MAT_0603.jpg')" />
          <div class="mask">
            <h2>40媒体合作</h2>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "word-mask"
};
</script>
<style lang='scss' scoped>
.view {
   margin: 10px;
   display:inline;
   border: 10px solid #fff;
   overflow: hidden;
   position: relative;
   text-align: center;
   -webkit-box-shadow: 1px 1px 2px #e6e6e6;
   -moz-box-shadow: 1px 1px 2px #e6e6e6;
   box-shadow: 1px 1px 2px #e6e6e6;
   cursor: default;
  //  background: #fff url(../images/bgimg.jpg) no-repeat center center;
}
.view .mask,.view .content {
   width: 100%;
   height: 100%;
   position: absolute;
   overflow: hidden;
   top: 0;
   left: 0;
}
.view img {
   width: 100%;
   height: 100%;
   display: block;
   position: relative;
}
.view h2 {
   text-transform: uppercase;
   color: #fff;
   text-align: center;
   position: relative;
   font-size: 17px;
   padding: 10px;
   background: rgba(0, 0, 0, 0.8);
   margin: 20px 0 0 0;
}
.view p {
   font-family: Georgia, serif;
   font-style: italic;
   font-size: 12px;
   position: relative;
   color: #fff;
   padding: 10px 20px 20px;
   text-align: center;
}
.view a.info {
   display: inline-block;
   text-decoration: none;
   padding: 7px 14px;
   background: #000;
   color: #fff;
   text-transform: uppercase;
   -webkit-box-shadow: 0 0 1px #000;
   -moz-box-shadow: 0 0 1px #000;
   box-shadow: 0 0 1px #000;
}
.view a.info:hover {
   -webkit-box-shadow: 0 0 5px #000;
   -moz-box-shadow: 0 0 5px #000;
   box-shadow: 0 0 5px #000;
}
.view-eighth .mask {
  background-color: rgba(255, 255, 255, 0.7);
  top: -200px;
  -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  -webkit-transition: all 0.3s ease-out 0.5s;
  -moz-transition: all 0.3s ease-out 0.5s;
  -o-transition: all 0.3s ease-out 0.5s;
  -ms-transition: all 0.3s ease-out 0.5s;
  transition: all 0.3s ease-out 0.5s;
}
.view-eighth h2 {
  -webkit-transform: translateY(-200px);
  -moz-transform: translateY(-200px);
  -o-transform: translateY(-200px);
  -ms-transform: translateY(-200px);
  transform: translateY(-200px);
  -webkit-transition: all 0.2s ease-in-out 0.1s;
  -moz-transition: all 0.2s ease-in-out 0.1s;
  -o-transition: all 0.2s ease-in-out 0.1s;
  -ms-transition: all 0.2s ease-in-out 0.1s;
  transition: all 0.2s ease-in-out 0.1s;
}
.view-eighth p {
  color: #333;
  -webkit-transform: translateY(-200px);
  -moz-transform: translateY(-200px);
  -o-transform: translateY(-200px);
  -ms-transform: translateY(-200px);
  transform: translateY(-200px);
  -webkit-transition: all 0.2s ease-in-out 0.2s;
  -moz-transition: all 0.2s ease-in-out 0.2s;
  -o-transition: all 0.2s ease-in-out 0.2s;
  -ms-transition: all 0.2s ease-in-out 0.2s;
  transition: all 0.2s ease-in-out 0.2s;
}
.view-eighth a.info {
  -webkit-transform: translateY(-200px);
  -moz-transform: translateY(-200px);
  -o-transform: translateY(-200px);
  -ms-transform: translateY(-200px);
  transform: translateY(-200px);
  -webkit-transition: all 0.2s ease-in-out 0.3s;
  -moz-transition: all 0.2s ease-in-out 0.3s;
  -o-transition: all 0.2s ease-in-out 0.3s;
  -ms-transition: all 0.2s ease-in-out 0.3s;
  transition: all 0.2s ease-in-out 0.3s;
}
.view-eighth:hover .mask {
  -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
  top: 0px;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  -ms-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-animation: bounceY 0.9s linear;
  -moz-animation: bounceY 0.9s linear;
  -ms-animation: bounceY 0.9s linear;
  animation: bounceY 0.9s linear;
}
.view-eighth:hover h2 {
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -o-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition-delay: 0.4s;
  -moz-transition-delay: 0.4s;
  -o-transition-delay: 0.4s;
  -ms-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
.view-eighth:hover p {
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -o-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  -ms-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.view-eighth:hover a.info {
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -o-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  -ms-transition-delay: 0s;
  transition-delay: 0s;
}
@keyframes bounceY {
  0% {
    transform: translateY(-205px);
  }
  40% {
    transform: translateY(-100px);
  }
  65% {
    transform: translateY(-52px);
  }
  82% {
    transform: translateY(-25px);
  }
  92% {
    transform: translateY(-12px);
  }
  55%,
  75%,
  87%,
  97%,
  100% {
    transform: translateY(0px);
  }
}
@-moz-keyframes bounceY {
  0% {
    -moz-transform: translateY(-205px);
  }
  40% {
    -moz-transform: translateY(-100px);
  }
  65% {
    -moz-transform: translateY(-52px);
  }
  82% {
    -moz-transform: translateY(-25px);
  }
  92% {
    -moz-transform: translateY(-12px);
  }
  55%,
  75%,
  87%,
  97%,
  100% {
    -moz-transform: translateY(0px);
  }
}
@-webkit-keyframes bounceY {
  0% {
    -webkit-transform: translateY(-205px);
  }
  40% {
    -webkit-transform: translateY(-100px);
  }
  65% {
    -webkit-transform: translateY(-52px);
  }
  82% {
    -webkit-transform: translateY(-25px);
  }
  92% {
    -webkit-transform: translateY(-12px);
  }
  55%,
  75%,
  87%,
  97%,
  100% {
    -webkit-transform: translateY(0px);
  }
}
</style>
