<template>
  <div id="app">
    <TreeView :node='root' />
  </div>
</template>

<script>
import TreeView from './components/TreeView.vue'

export default {
  name: 'app',
  data (){
    return {
      root:{
        name:'1 - الأصول',
        children:[
          {
            name:'11 - الأصول الثابتة ',
            children: [
              {name:'111- العقارات والمباني'},
              {name:'112- المعدات'},
              {name:'113- الأجهزة والأثاث'},
            ]
          },
          {
            name:'12 - الأصول المتداولة',
            children:[
              {name:'121 - مخزون البضاعة'},
              {name:'122 - البنوك'}
            ]

          }

        ]
      }
    }
  },
  components: {
    TreeView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
  background-color:#eee;
  width:400px;
  direction: rtl;
  margin:0 auto;
  border:4px solid red;
}
</style>
