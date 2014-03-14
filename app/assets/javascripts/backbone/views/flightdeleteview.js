/**
 * Created by pranavaswaroop on 14/03/2014.
 */
App.FlightDeleteView = Backbone.View.extend({
    el: '.flights',
    render: function(options){
        if(options.id){
            var flight = new App.FlightModel({id: options.id});
            flight.destroy({
                success:function(){
                    //App.airplaneRouter.navigate('',{trigger:true});
                    App.flightList.render();
                }
            });
        }
    }
});