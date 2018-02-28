<template>
    <div>
      <div class="only_list">
        <img :src="imgUrl" alt="">
        <div class="text_instr">
          <h3>{{title}}</h3>
          <p class="data">{{dataTime}}</p>
          <p class="have_list">{{worksInstr}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'listChild',
      props: {
        title: {
          type: String,
          default: '依然范特西'
        },
        dataTime: {
          type: String,
          default: '2003年06月25日发布'
        },
        worksInstr: {
          type: String,
          default: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》'
        },
        imgUrl: {
          type: String,
          default: '/static/img/Jay1.jpg'
        }
      }
    }
</script>

<style lang="less" scoped>
  .only_list{
    display: flex;
    flex-direction: row;
    height: 2rem;
    padding:0.1rem;
    border-bottom:1px solid #eee;
    box-shadow: inset 2px 2px 2px #feeeee;
    img{
      width: 2rem;
    }
    .text_instr{
      padding-left: 0.2rem;
      p{
        margin: 6px 0;
      }
      h3{
        font-size: 0.36rem;
        margin: 0;
      }
      .data{
        font-size: 0.30rem;
      }
      .have_list{
        font-size: .24rem;
        height: .72rem;
        line-height: .36rem;
        overflow: hidden;
      }
    }
  }
</style>
