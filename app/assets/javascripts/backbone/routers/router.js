App.Router = Backbone.Router.extend({

  routes: {

    'airplanes': 'listAirplanes'
  },

  initialize: function() {
    App.appView = new App.AppView({ collection: App.airplanes });
    App.appView.render();
  },

  // showQuote: function(paramSlug)
  listAirplanes: function(paramId) {
    // slug is like a permalink - turns it into a url friendly link
    // var quoteModel = App.quotes.findWhere({ slug: paramSlug });

    var airplaneModel = App.airplanes.get(paramId);

    // does nothing when you can't find it
    if (airplaneModel === undefined)
      return;
    
  }
})