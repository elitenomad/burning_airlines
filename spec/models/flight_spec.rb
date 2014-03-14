require 'spec_helper'

describe Flight do
	let(:valid_arguments) {{flight_no:1,origin:'sydney',destination:'melbourne',start_time:Time.now}}
	let(:airplane) { Airplane.create(name:"ed",rows:2,columns:2)}

	context "#save" do
		it "should save with valid_arguments" do
			expect(airplane.flights.create(valid_arguments)).to be_true
		end
	end
	context "#generate_seats" do
		context "Airplane with 2 rows 2 columns" do
			let(:flight) {airplane.flights.create(valid_arguments)}

			it "should have 4 seats" do
				expect(flight).to have(4).seats
			end

			it "should have seats 00,01,10,11" do
				expect(flight.seats.map(&:seatname)).to include('0-0')
			end
		end 
	end
end
