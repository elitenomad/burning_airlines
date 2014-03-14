class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json
  def index
    @flights = Flight.all
    respond_with @flights
  end

  def show
    @flight = Flights.find_by_id(params[:id])
  end

  def new
    @airplane = Airpline.find(params[:airplane_id])
    @flight = @airplane.flights.new
  end

  def edit
  end

  def create
    @airplane = Airplane.find(params[:airplane_id])
    @flight = @airplane.flights.new(flight_params)   

    respond_to do |format|
      if @flight.save
        format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render action: 'show', status: :created, location: @flight }
      else
        format.html { render action: 'new' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Airplane was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url }
      format.json { head :no_content }
    end
  end

  private

  def set_airplane
    @flight = Flight.find(params[:id])
  end

  def flight_params
    params.require(:flight).permit(:flight_no, :origin, :destination,:start_time,:end_time)
  end
end
