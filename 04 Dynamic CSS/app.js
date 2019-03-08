new Vue({
  el: '#vue-app',
  data: {
    available: false,
    nearby: false
  },
  methods:{

  },
  computed:{
    compClasses: function(){
      console.log(this.available);
      console.log(this.nearby);
      return{
        availableClass: this.available,
        nearbyClass: this.nearby
      }
    }
  }
});
