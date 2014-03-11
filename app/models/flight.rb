class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations, dependent: :destroy
  has_many :users, through: :reservations, source: :user

  validates :flight_no, presence: true, uniqueness: true
  validates :origin, presence: true
  validates :destination, presence: true
  validates :start_time, presence: true
end
