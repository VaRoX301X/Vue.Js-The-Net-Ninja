var data = {
  name: 'Yoshi'
}

Vue.component('greeting',{
  template:'<p>re-usable component, I am {{name}}<button v-on:click="changeName">ChangeName</button></p>',
  data: function(){ //must be a function
    return {
      name: 'JoJo'
    }
  },
  methods:{
    changeName: function(){
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods:{

  },
  computed:{

  }
});
new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods:{

  },
  computed:{

  }
});
