<template>
  <div class="pull-container" @touchmove="pullDown($event)" @touchstart="pullStart($event)" @touchend="pullEnd()">
    <div id="pull-show-area">
      <div class="pull-spinner" v-show="isShowSpinner"></div>
    </div>
    <div class="content-wrap">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import log from '../util/log';

  export default {
    name: 'pull',
    props: ['pullConfig'],
    data() {
      return {
        pullShowArea: '',
        pullSpinner: '',
        pullContentWrap: '',
        pullStartY: 0,
        deltaY: 0,
        pullHeight: 100,
        isShowSpinner: false,
      };
    },
    created() {
      log('this is tk pull');
      log('config', this.pullConfig);
    },
    mounted() {
      log('mounted');
      this.pullShowArea = window.document.querySelector('#pull-show-area');
      this.pullSpinner = window.document.querySelector('.pull-spinner');
      this.pullContentWrap = window.document.querySelector('.content-wrap');
      if (this.pullConfig.height) {
        this.pullHeight = this.pullConfig.height;
        this.pullSpinner.style.margin = `${Math.ceil(this.pullHeight / 2) - 24}px -50%`;
      }
    },
    watch: {
      pullConfig: {
        handler(oldval, val) {
          log('oldval', oldval, 'val', val)
          if (this.pullConfig.suc) {
            this.closeLoading(0, 0.2)
          }
        },
        deep: true,
      }
    },
    methods: {
      pullStart(e) {
        log('st', e);
        // const target = e.target;
        // log(target);
        const finger = e.targetTouches[0];
        this.pullStartY = finger.pageY;
        this.pullContentWrap.style.transition = 'none';
        this.pullShowArea.style.transition = 'none';
        // this.pullShowArea.style.transform = `translateY(-${this.deltaY}px)`;
      },
      pullDown(e) {
        // log('pulldown');
        // const target = e.target;
        // log(target);
        const finger = e.targetTouches[0];
        const deltaY = finger.pageY - this.pullStartY;
        // log('deltaY', deltaY);
        if (deltaY > 46) {
          this.isShowSpinner = true;
        }
        if (deltaY >= 0) {
          this.deltaY = deltaY;
          this.pullShowArea.style.transform = `translate3d(0, ${deltaY}px, 0)`;
          this.pullContentWrap.style.transform = `translate3d(0, ${deltaY}px, 0)`;
        }
      },
      closeLoading(transY, time) {
        this.pullShowArea.style.transition = `${time}s all ease`;
        this.pullContentWrap.style.transition = `${time}s all ease`;
        this.pullShowArea.style.transform = `translate3d(0, ${transY}px, 0)`;
        this.pullContentWrap.style.transform = `translate3d(0, ${transY}px, 0)`;
      },
      pullEnd() {
        // const target = e.target;
        // log(target);
        // const finger = e.targetTouches[0];
        // this.pullContentWrap.style.transition = '0.8s all ease';
        if (this.deltaY > this.pullHeight) {
          this.closeLoading(this.pullHeight, 0.2)
          this.pullConfig.pullDownDone()
        } else {
          this.closeLoading(0, 0.2)
        }
        // this.pullShowArea.style.top = '-100px';
      },
    },
  };
</script>
<style lang="css" scoped>
.pull-container {
}
#pull-show-area {
  position: absolute;
  top: -100px;
  height: 100px;
  padding: 0 50%;
  /* background: orange; */
}
@keyframes rotate {
  0%,
  100% {
      -webkit-transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
  }
}
.pull-spinner{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-left: 2px solid rgb(101, 101, 228);
  background-color: #dedede;
  animation: rotate 1.5s linear infinite;
  margin: -50%;
}
</style>
