/**
 * Created by pranavaswaroop on 13/03/2014.
 */
App.AirplaneDeleteView = Backbone.View.extend({
    el: '.page',
    render: function(options){
        if(options.id){
            var airplane = new App.AirplaneModel({id: options.id});
            airplane.destroy({
                success:function(){
                    App.airplaneRouter.navigate('',{trigger:true});
                }
            });
        }
    }
});