App.FlightShowView = Backbone.View.extend ({
	el: '.flights',
    render: function(options){
       var flight = new App.FlightModel({id: options.id});
        var that = this;
        // fetch the flight data
        flight.fetch({
            success: function(flight){
             	console.log(flight);
                var template = _.template($("#flight-show-template").html(),{flight:flight});
				that.$el.html(template);
            }
        });

    }

});



	