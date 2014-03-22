require.config({
  paths: {
    jquery: 'libs/jquery/jquery-2.1.0.min',
    underscore: 'libs/underscore/underscore-1.6.0.min',
    backbone: 'libs/backbone/backbone-1.1.2.min'
  },
  //prevent cache in all the files
  urlArgs: "bust=" + (new Date()).getTime(),
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require([
  'app'
], function(App){

  App.initialize();
  
});