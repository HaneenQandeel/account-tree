<template>
  <div id="app">
    <FormProfile></FormProfile>
  </div>
</template>

<script>
import FormProfile from './components/form-profile.vue';

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
    FormProfile
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
  width:700px;
  direction: ltr;
  margin:0 auto;
  border:4px solid #eee;
}
</style>
