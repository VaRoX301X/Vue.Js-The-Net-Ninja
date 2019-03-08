new Vue({
  el: '#vue-app',
  data: {
    name:'Varox',
    job:'Ninja',
    website: 'https://xorav.xyz', 
    website2: 'https://www.thenetninja.co.uk/',
    websiteTag: '<a href="https://www.thenetninja.co.uk/"> WebsiteTag: The Net Ninja Website</a>',
  },
  methods: {
    greet: function(time){

      return 'Good ' + time + ', ' + this.name;
    }
  }
});
