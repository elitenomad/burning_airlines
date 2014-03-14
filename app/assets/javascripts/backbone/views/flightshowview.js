

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

//
//                var row_letters = ['A', 'B', 'C', 'D'];
//                // how do i put this into template?
//                // how to draw along one part of the template? (ul) before moving to the next ul?
//
//                var row_template = '<ul class="seatrow"></ul>';
//                var col_template = '<li class="seatcol"></li>';
//
//                var rows = 2
//                var cols = 2
//
//				// 	// for collection use $.each
//				// 	//should create row A - draw each seat, showing taken or available.
//				// 	// create row B
//
//                // generate rows
//                for(var i=0; i < rows; i++){
//                    template.append(row_letters[i] + row_template);
//                }
//                // generate columns
//                for (var c=0; c < cols; c++){
//                    row_template.append(col_template + (c+1));
//                }
//
//				// 	// click event for selecting a seat
//				// 	$('.seatcol').on('click', selectSeat);
//
//				// 	function selectSeat(){
//
//				// 		$(this).toggleClass('selected');
//				// 		console.log('clicked');
//				// 	}

				
				that.$el.html(template);
            }
        });

    }

});



	