class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :edit, :update, :destroy]
  respond_to :html,:json
  def index
    @reservations = Reservation.all
  end

  def show

  end

  def new
    @reservation = Reservation.new
  end

  def edit
  end

  def reserve
    @user = User.find(params[:user_id])
    @flight = Flight.find(params[:flight_id])

    @reservation = @user.reservations.new(flight: @flight)

    # Flip the flight seat status in flight seats table to true
    @seat = @flight.seats.find(params[:seat_id])
    @seat.update(status:true)


    respond_with(@flight, include: [:seats, :airplane])
  end

  def create
    # Validation to make sure there are seats left
    # before creating new one
    @user = User.find(params[:user_id])
    @flight = Flight.find(params[:flight_id])

    @reservation = @user.reservations.new(flight: @flight)

    respond_to do |format|
      if @reservation.save
        format.html { redirect_to @reservation, notice: 'Reservation was successfully created.' }
        format.json { render action: 'show', status: :created, location: @reservation }
      else
        format.html { render action: 'new' }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @reservation.update(reservation_params)
        format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @flight = Flight.find(params[:flight_id])
    @reservation = @user.reservations.find(params[:id])

    @reservation.destroy
    respond_to do |format|
      format.html { redirect_to reservations_url }
      format.json { head :no_content }
    end
  end

  private
  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  def reservation_params
    params.require(:reservation).permit()
  end
end
