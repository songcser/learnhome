<template>
  <section class="zhou">
    <div id="robot">
      <div class="piston" v-for="(word, index) in words" :key="index">
        <div class="rotator"></div>
        <div class="block">
          {{word}}
          <div class="arm"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'axis-view',
  props: {
    words: {
      type: Array,
      default: () => ['F', 'I', 'V', 'O', 'E']
    }
  }
}
</script>
<style scoped>
@-webkit-keyframes piston {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 50px;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes piston {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 50px;
  }
  100% {
    margin-top: 0;
  }
}
@-webkit-keyframes arm {
  0% {
    -webkit-transform: rotate(0);
  }
  25% {
    -webkit-transform: rotate(-8deg);
  }
  50% {
    -webkit-transform: rotate(0);
  }
  75% {
    -webkit-transform: rotate(8deg);
  }
  100% {
    -webkit-transform: rotate(0);
  }
}
@keyframes arm {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(0);
  }
}
.zhou {
  width: 100%;
  text-align: center;
  /* background: linear-gradient(to bottom, coral, tomato); */
}
#robot {
  position: relative;
  top:0; left:0;
  z-index: 1;
  width: 360px;
  height: 250px;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #444;
  text-shadow: 0px -1px 1px rgba(0, 0, 0, 0.7),
    0px 1px 1px rgba(255, 255, 255, 0.4);
}

.piston {
  float: left;
  margin-right: 5px;
  position: relative;
  width: 18%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 50px 50px;
  box-shadow: 0 -4px 0 rgba(0, 0, 0, 0.2), 0 4px 0 rgba(255, 255, 255, 0.2);
}
.piston:last-child {
  margin: 0;
}
.piston .block {
  position: relative;
  width: 100%;
  height: 65px;
  line-height: 65px;
  background: #555;
  border-radius: 10px;
  -webkit-animation: piston 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation: piston 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
    inset 0 4px 0 rgba(255, 255, 255, 0.2);
}
.piston:nth-child(1) .block {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.piston:nth-child(2) .block {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.piston:nth-child(3) .block {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.piston:nth-child(4) .block {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.piston:nth-child(5) .block {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.piston .arm {
  position: absolute;
  top:50%;
  left:50%;
  margin: -10px 0 0 -10px;
  width: 20px;
  height: 180px;
  background: #555;
  border-radius: 10px;
  box-shadow: inset 0 -22px 0 rgba(0, 0, 0, 0.2);
  z-index: -1;
  -webkit-transform-origin: center 10px;
  -webkit-animation: arm 1.2s linear infinite;
  -webkit-animation-delay: inherit;
  transform-origin: center 10px;
  animation: arm 1.2s linear infinite;
  animation-delay: inherit;
}
.piston .arm:before,
.piston .arm:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  height: 16px;
  background: #eee;
  border-radius: 50%;
  margin: 2px;
}
.piston .arm:before {
  top: 0;
}
.piston .arm:after {
  bottom: 0;
}

.piston .rotator {
  position: absolute;
  bottom: 0;
  width: 65px;
  height: 65px;
  border-radius: 10px;
  border-radius: 50%;
  border: 20px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style>
