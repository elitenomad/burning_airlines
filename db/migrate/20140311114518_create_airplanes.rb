class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name, index:true
      t.integer :rows
      t.integer :columns

      t.timestamps
    end
  end
end
