class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations, dependent: :destroy
  has_many :users, through: :reservations, source: :user
end
