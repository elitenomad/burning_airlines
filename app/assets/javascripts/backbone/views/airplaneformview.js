/**
 * Created by pranavaswaroop on 12/03/2014.
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

App.AirplaneFormView = Backbone.View.extend({
    el: '.page',
    render: function(options){
        var that = this;
        if(options.id){
            var airplane = new App.AirplaneModel({id: options.id});
            airplane.fetch({
                success: function(airplane){
                    var template = _.template($('#airplane-form-template').html(),{airplane:airplane});
                    that.$el.html(template);
                }
            });
        }else{
            var template = _.template($('#airplane-form-template').html(),{airplane:null});
            this.$el.html(template);
        }

    },
    events: {
        'submit .edit-airplane-form': 'saveAirplane'

    },
    saveAirplane: function(ev){
        var airplaneFormDetails = $(ev.currentTarget).serializeObject();
        var airplaneModel = new App.AirplaneModel();
        airplaneModel.save(airplaneFormDetails,{
            success: function(){
                App.airplaneRouter.navigate("",{trigger: true});
            }
        });
        return false;
    }

});

