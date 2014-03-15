/**
 * Created by pranavaswaroop on 15/03/2014.
 */
App.FlightBookView = Backbone.View.extend ({
    el: '.srchflights',
    render: function(options){
        var flight = new App.FlightModel({id: options.id});
        var that = this;
        // fetch the flight data
        flight.fetch({
            success: function(flight){
                console.log(flight);
                var template = _.template($("#flight-book-template").html(),{flight:flight});
                that.$el.html(template);
            }
        });

    }

});



