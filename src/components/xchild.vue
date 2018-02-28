<template>
  <div>
    <button @click="jumpRouter" class="child_btn">{{value}}</button>
  </div>
</template>

<script>
    export default {
      name: 'xchild',
      props: {
        value: {
          type: String,
          default () {
            return 'index'
          }
        },
        linkUrl: ''
      },
      methods: {
        jumpRouter () {
          // console.dir()
          console.log(this.$root)
          console.log(this.$parent)
          this.$router.push({ name: this.linkUrl })
        }
      }
    }
</script>

<style lang="less" scoped>
  .child_btn{
    width: 100%;
    display: block;
    background: #fffefe;
    color: #000;
    font-size:0.4rem;
    text-align: center;
    line-height: 48px;
    border-radius: 4px;
    box-shadow: inset 3px 3px 3px #313131;
    outline: none;
  }
</style>
