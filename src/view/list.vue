<template>
    <div>
      <router-link v-for="(item, index) in listData" :key="index" :to="{ name: 'product', query: { proId: item.proId}}">
        <list-child
          :title="item.title"
          :dataTime="item.dataTime"
          :worksInstr="item.worksInstr"
          :imgUrl="item.imgUrl"
        ></list-child>
      </router-link>
    </div>
</template>

<script>
    import { XButton } from 'vux'
    import listChild from '../components/listChild'
    export default {
      name: 'list',
      components: {
        XButton,
        listChild
      },
      data () {
        return {
          listData: [
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay1.jpg',
              proId: '01'
            },
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay2.jpg',
              proId: '02'
            },
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay3.jpg',
              proId: '03'
            },
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay4.jpg',
              proId: '04'
            },
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay5.jpg',
              proId: '05'
            },
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay6.jpg',
              proId: '06'
            },
            {
              title: '依然范特西',
              dataTime: '2003年06月25日发布',
              worksInstr: '列表：《开不了口》、《七里香》、《你听得到》、《你好吗》、《你比从前快乐》',
              imgUrl: './static/img/Jay3.jpg',
              proId: '07'
            }
          ]
        }
      },
      created () {
      },
      mounted () {
      }
    }
</script>
<style scoped>

</style>
