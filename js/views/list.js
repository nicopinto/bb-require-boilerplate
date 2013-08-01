define([
  'jquery',
  'underscore',
  'backbone',
  'text!/templates/list.html?' + (new Date()).getTime()
], function ($, _, Backbone, listTemplate) {
    
  var ListView = Backbone.View.extend({
    el: $('#mainContainer'),
    render: function(){
      var data = {title:'titulo'},
        compiledTemplate = _.template(listTemplate, data);
      this.$el.append( compiledTemplate );
    }
  });

  return ListView;

});