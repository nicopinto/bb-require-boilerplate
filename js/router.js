define([
  'jquery',
  'underscore',
  'backbone',
  'views/list'
], function($, _, Backbone, RecipeListView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      'recipes': 'showRecipes',
      '*actions': 'defaultAction'
    },
    showRecipes: function(){
      console.log("showRecipes");
      var recipeListView = new RecipeListView();
      recipeListView.render();
    },
    defaultAction: function(){
      console.log("default!");
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start({pushState: false, root: "/"});
  };

  return {
    initialize: initialize
  };

});