class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|

     t.string :seatname
     t.boolean :status
     t.references :flight, index: true
     
      t.timestamps
    end
  end
end
