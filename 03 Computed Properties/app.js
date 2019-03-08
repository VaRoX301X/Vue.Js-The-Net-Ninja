new Vue({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  methods:{
    /* addToA: function(){
      return this.a + this.age;
      console.log(addToA);
    },
    addToB: function(){
      return this.b + this.age;
      console.log(addToB);
    }*/
  },
  computed:{
    addToA: function(){
      console.log("addToA");
      return this.a + this.age;
    },
    addToB: function(){
      console.log("addToB");
      return this.b + this.age;
    }
  }
});
