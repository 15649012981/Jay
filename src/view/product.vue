<template>
  <div :style="{ height: pageHeight}" class="content">
    <div class="edit-content">
      <div class="">

      </div>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="30"
      shapeType="star"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>
<script>
    // import request from '../config/ajax'
    export default {
      name: 'product',
      data () {
        return {
          proId: this.$route.query.proId || '', // 对应id
          pageHeight: '' // 页面高度
        }
      },
      created () {
        this.pageHeight = `${window.innerHeight}px` // 动态读取窗口高度
        console.log(this.$data)
      },
      mounted () {
        console.dir(this.$el)
        // console.dir(this.$ref)
        // var arrAiame = () => {
        //   console.log(this)
        // }
        // arrAiame()
      },
      methods: {
        createdCanPage (a, b, cr, ct, canva) {
          let opac = 1
          let timer = setInterval(() => {
            cr < 60 ? cr += 5 : cr = 60
            ct.beginPath()
            ct.fillStyle = this.randomColor(opac)
            ct.arc(a, b, cr, 0, 2 * Math.PI)
            ct.fill()
            ct.closePath()
            if (cr === 60) {
              clearInterval(timer)
            }
          }, 100)
        },
        randomColor (a) {
          let r = 255 * Math.random()
          let g = 255 * Math.random()
          let b = 255 * Math.random()
          return `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${a})`
        }
      }
    }
</script>

<style lang="less" scoped>
  .content{
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/static/img/sky.jpg');
    background-position: -20% 10%;
    background-size: contain;
    #particles-js {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .edit-content{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    min-height: 100%;
    min-width: 100%;
    /*background: #fff;*/
  }
</style>
