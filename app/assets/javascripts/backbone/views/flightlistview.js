/**
 * Created by pranavaswaroop on 13/03/2014.
 */
App.FlightListView = Backbone.View.extend({
    el: '.flights',
    render: function(){
        var flights = new App.Flights();
        var that = this;
        flights.fetch({
            success: function(){

                var template = _.template($("#flight-list-template").html(),{flights:flights.models});
                that.$el.html(template);
            }
        });
    }
});