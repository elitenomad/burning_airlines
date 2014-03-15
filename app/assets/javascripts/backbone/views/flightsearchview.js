/**
 * Created by pranavaswaroop on 15/03/2014.
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

App.FlightSearchView = Backbone.View.extend({
    el: '.srchflights',
    render: function(){
        var template = _.template($('#flight-search-template').html(),{});
        this.$el.html(template);
    },
    events: {
        'submit .search-flight-form': 'searchFlight'
    },
    searchFlight: function(ev){
        var flightFormDetails = $(ev.currentTarget).serializeObject();
        console.log(flightFormDetails);

        var options = {
            url: '/search',
            type: 'get',
            dataType: 'json',
            data: flightFormDetails
        };
        $el = this.$el;
        $.ajax(options).done(function(flights){
            console.log(flights)
            var template = _.template($('#flight-search-list-template').html(),{flights:flights});
            $el.html(template);
        }).fail(function(){
            console.log('Operation failed')
        });

        return false;
    }

});