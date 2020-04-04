<template>
  <div>
    <p>movie text</p>
    <p>{{msg}}</p>
    <button @click="clickbtn" data-id="333">btn</button>
    <p>btnValue: {{btnValue}}</p>
    <p v-show="displayP">shencang</p>
    <input v-model="username" />
    <p>myname: {{username}}</p>
    <p>点击次数: {{countd}}</p>
    <button @click="countd+=1">Click</button>
    <li v-for="item,index in itemlist">{{index}} {{item}}</li>
    <br />
    <hr />
    <productItem 
    :product-list="productList" 
    v-on:childproductitem="getchildvalid"
    ></productItem>
    <hr />
    {{childval}}
  </div>
</template>

<script>
import productItem from "../productItem/productItem";

export default {
  name: "movie",
  data() {
    return {
      msg: "this is msg",
      btnValue: 0,
      displayP: false,
      countd: 0,
      username: "",
      itemlist: ["time1", "time2", "time3", "time4"],
      productList: [
        {
          name: "牙刷",
          price: 23
        },
        {
          name: "刮胡刀",
          price: 12.2
        },
        {
          name: "西瓜",
          price: 333.1
        }
      ],
      childval: ''
    };
  },
  components: {
    productItem
  },
  created() {
    console.log(this);
  },
  methods: {
    clickbtn(e) {
      console.log("--e:");
      console.log(e);
      this.btnValue = parseInt(e.target.dataset.id);
      if (this.btnValue > 10) {
        this.btnValue = this.btnValue - 1;
        this.displayP = true;
      }
    },
    getchildvalid(val) {
      console.log(' -- get val form child:')
      console.log(val)
      this.childval = val
    }
  }
};
</script>

<style>
</style>