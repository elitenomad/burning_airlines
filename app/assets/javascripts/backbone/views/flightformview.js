/**
 * Created by pranavaswaroop on 14/03/2014.
 */

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
App.FlightFormView = Backbone.View.extend({
    el: '.flights',
    render: function(options){
        var that = this;
        if(options.id){
            console.log("I am in the edit plateus")
            var flight = new App.FlightModel({id: options.id});
            flight.fetch({
                success: function(flight){
                    var template = _.template($('#flight-form-template').html(),{flight:flight});
                    that.$el.html(template);
                }
            });
        }else{
            var template = _.template($('#flight-form-template').html(),{flight:null});
            this.$el.html(template);
        }
    },
    events: {
        'submit .edit-flight-form': 'saveFlight'
    },
    saveFlight: function(ev){
        var flightFormDetails = $(ev.currentTarget).serializeObject();
        var flightModel = new App.FlightModel();
        flightModel.save(flightFormDetails,{
            success: function(){
                //App.airplaneRouter.navigate("flight",{trigger: true});
                App.flightList.render();
            }
        });
        return false;
    }

});