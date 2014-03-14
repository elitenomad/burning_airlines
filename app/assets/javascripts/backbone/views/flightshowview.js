	

App.FlightShowView = Backbone.View.extend ({

	el: '.page',
    render: function(){
    // get the clicked on flight
       var flight = new App.Flight();
        var that = this;
        // fetch the flight data
        flights.fetch({
            success: function(){
                var template = _.template($("#flight-show-template").html(),{airplanes:airplanes.models});
                that.$el.html(template);
            
					var row_letters = ['A', 'B', 'C', 'D'];
					// how do i put this into template?
					// how to draw along one part of the template? (ul) before moving to the next ul?
					var row_template = '<ul class="row"></ul>';
					var col_template = '<li class="col"></li>';
		
					// var rows = 
					// var cols = 

					// for collection use $.each
					//should create row A - draw each seat, showing taken or available.
					// create row B

					// generate rows
					for(var i=0; i < settings.rows; i++){
						$('#seats').append(row_letters[i] + row_template);
					}
					// generate columns
					for (var c=0; c < settings.cols; c++){
						$('.row').append(col_template + (c+1));
					}

					// click event for selecting a seat
					$('.col').on('click', selectSeat);

					function selectSeat(){

						$(this).toggleClass('selected');
						console.log('clicked');
					}

				

            }
        });

    }

});



	