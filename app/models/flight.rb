class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :seats, dependent: :destroy
  has_many :reservations, dependent: :destroy
  has_many :users, through: :reservations, source: :user

  validates :flight_no, presence: true, uniqueness: true
  validates :origin, presence: true
  validates :destination, presence: true
  validates :start_time, presence: true

  after_create :generate_seats



  def generate_seats
  	self.airplane.rows.times do |row|
      self.airplane.columns.times do |column|
        self.seats.create(seatname: "#{row}-#{column}", status: false)
      end
    end
  end
end
