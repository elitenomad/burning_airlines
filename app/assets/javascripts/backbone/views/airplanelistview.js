/**
 * Created by pranavaswaroop on 12/03/2014.
 */
App.AirplaneListView = Backbone.View.extend({
    el: '.page',
    render: function(){
        var airplanes = new App.Airplanes();
        var that = this;
        airplanes.fetch({
            success: function(){

                var template = _.template($("#airplane-list-template").html(),{airplanes:airplanes.models});
                that.$el.html(template);
            }
        });

    }
});