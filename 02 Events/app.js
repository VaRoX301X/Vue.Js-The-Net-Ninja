new Vue({
  el: '#vue-app',
  data: {
    age: 0,
    x: 0,
    y: 0,
    name: "",
    tecla: "",
    idTecla: ""
  },
  methods:{
    subtract: function(decrement){
      this.age= this.age - decrement;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickLink: function(){
      alert("You clicked the link");
    },
    teclaPresionada: function(event){
      console.log(event);
      this.tecla = event.key;
      this.idTecla = event.keyCode;
    }

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
