<template>
  <div>
    <p>item page</p>
    <li v-for="item,index in productList">
      {{ index}}
      {{item.name}}
    </li>
    <button @click="getthename">what?</button>
    <br>
    {{ num }}
  </div>
</template>

<script>
export default {
  name: "productItem",
  props: ["productList"],
  data() {
    return {
     num: 0
    };
  },
  created() {
    //console.log(productList)
  },
  methods: {
    getthename() {
      console.log(this.productList);
      this.num += 1
      console.log(this.num)
      this.$emit("childproductitem",this.num)
    }
  }
};
</script>

<style>
</style>