<template>
  <div>
    <div :style="{height:pageHeight}" class="content">
      <div class="rotateAll">
        <div class="faceOne">
          <img src="../images/Jay1.jpg" alt="">
        </div>
        <div class="faceTwo">
          <img src="../images/Jay2.jpg" alt="">
        </div>
        <div class="faceThree">
          <img src="../images/Jay3.jpg" alt="">
        </div>
        <div class="faceFour">
          <img src="../images/Jay4.jpg" alt="">
        </div>
        <div class="faceFive">
          <img src="../images/Jay5.jpg" alt="">
        </div>
        <div class="faceSix">
          <img src="../images/Jay6.jpg" alt="">
        </div>
      </div>
    </div>
    <xchild class="fixed_bottom" value="INTO" link-url="list"></xchild>
  </div>

</template>

<script>
    import $ from 'jquery'
    import { XButton } from 'vux'
    import request from '../config/ajax'
    import xchild from '../components/xchild'
    export default {
      components: {
        XButton,
        xchild
      },
      data () {
        return {
          pageHeight: ''
        }
      },
      created () {
        this.pageHeight = `${window.innerHeight}px`
        console.dir($)
        console.dir(request)
      }
    }
</script>

<style lang="less" scoped>
    .content{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1500px;
      perspective-origin: 50% 100px;

      @keyframes spin {
        0% { transform: rotateX(0) rotateZ(0); }
        to { transform: rotateX(360deg) rotateZ(360deg); }
      }


      .rotateAll{
        width:4rem;
        height: 4rem;
        position: relative;
        transform-style: preserve-3d;
        animation: spin 10s infinite linear;
        div{
          position: absolute;
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            height: 4rem;
            width: 4rem;
          }
        }
        .faceOne{
          transform: translateZ(-2rem) rotateY(180deg);
        }
        .faceTwo{
          transform: rotateY(-270deg) translateX(2rem);
          transform-origin: top right;
        }
        .faceThree{
          transform: translateZ(2rem);
        }
        .faceFour{
          transform: rotateY(270deg) translateX(-2rem);
          transform-origin: center left;
        }
        .faceFive{
          transform: rotateX(-90deg) translateY(-2rem);
          transform-origin: top center;
        }
        .faceSix{
          transform: rotateX(90deg) translateY(2rem);
          transform-origin: bottom center;
        }
      }
    }
    .fixed_bottom{
      position: fixed;
      bottom: 0;
      left:0;
      width:100%;
    }
</style>
