new Vue({
  el: '#vue-app',
  data: {
    lastMsg: "",
  },
  methods:{
    readRefs: function(){
      console.log(this.$refs.input1.value);
      this.lastMsg = this.$refs.input1.value;
    },
    seeRefs: function(){
      console.log(this.$refs);
    }
  },
  computed:{

  }
});
