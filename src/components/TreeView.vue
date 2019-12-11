
<template>
  <div class="account-tree">
    <div v-if="!editing" @click="nodeClicked" :style="{'margin-left': `${depth * 15}px`}" class="node">
      <span v-if="hasChildren" class="type">{{expanded ? '&#9660;' : '&#9668;'}}</span>
      <span :style="getStyle(node)" @click="enableEditing">{{node.name}}</span>
      <button @click='addNodes'>إضافة</button>
       <button @click='DeleteNodes'>حذف</button>

    </div>
     <div v-if="editing">
      <input v-model="tempValue" v-on:keyup.enter="saveEdit" class="input" />
    </div>
    <ul v-if="expanded">
      <TreeBrowser v-for="child in node.children" :key="child.name" :node="child" :depth="depth + 1" @onClick="(node) => $emit('onClick', node)" />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TreeBrowser',
    props: {
      node: Object,
      depth: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        expanded: false,
        tempValue: null,
        editing: false
      }
    },
    methods: {
      nodeClicked() {
        this.expanded = !this.expanded;
        if (!this.hasChildren) {
          this.$emit('onClick', this.node);
        }
      },
      getStyle() {
        let color = 'red';

        return {
          color,
        }
      },
      addNodes() {
        return this.node.children.push({
          'name': '13-child'
        });

      },
      enableEditing() {
        this.tempValue = this.node.name;
        this.editing = true;
      },
      disableEditing() {
        this.tempValue = null;
        this.editing = false;
      },
      saveEdit() {
        this.node.name = this.tempValue;
        this.disableEditing();
      },
      DeleteNodes() {
        return this.node.children.remove()
      }

    },
    computed: {
      hasChildren() {
        return this.node.children;
      }


    }
  }
</script>

<style scoped>

  .node {
    text-align: right;
    font-size: 18px;
  }

  .type {
    margin-right: 10px;
  }
  button{
  background-color: white;
  color: black;
  border: 2px solid red;
  margin:5px;
  }
 .account-tree{margin-top:15px;}
</style>
