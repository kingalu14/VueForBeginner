new Vue ({
  el:'#vue-app',
  data:{
    name:'Kassim Kingalu',
    job:'Web developer',
    website:'http://www.kinginfotech.net',
    websiteTag:'<a href="http://www.kinginfotech.net"> King İnfo Tech </a>',
    age:34,
    x:0,
    y:0,
  },
  methods:{
    greet:function(time){
            return 'Good' +' '+ time + ' ' + this.name
    },

    add:function(inc){
          return this.age+=inc;
    },

   subtract:function(dec){
          return this.age-=dec
    },

    updateCoordinate:function(event){
            this.x=event.offsetX
            this.y=event.offsetY
     },
  }
});
