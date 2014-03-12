App.Flights = Backbone.Collection.extend({
	
	model: App.Flight,

	url: 'airplanes/params[:airplane_id]/flights'
});