/**
 * Created by pranavaswaroop on 15/03/2014.
 */
App.FlightResrveSeatView = Backbone.View.extend ({
    el: '.srchflights',
//    events: {
//        'click a#reserveseat': 'reserveSeatOnFlight'
//    },
    reserveSeatOnFlight: function(options){
        console.log("I am here");
        var options = {
            url: '/reserve/'+options.flight_id+'/users/'+options.user_id+"/seats/"+options.seat_id,
            type: 'post',
            dataType: 'json'
        };
        $el = this.$el;
        $.ajax(options).done(function(){
//            var flight = new App.FlightModel({id: options.flight_id});
//            var template = _.template($("#flight-book-template").html(),{flight:flight});
//            $el.html(template);
            App.airplaneRouter.navigate("search-flight",{trigger:true});
        }).fail(function(){
            console.log('Operation failed')
        });

        //return false;
    }
});