class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :flight_no
      t.string :origin
      t.string :destination
      t.datetime :start_time
      t.datetime :end_time
      t.references :airplane, index: true

      t.timestamps
    end
  end
end
