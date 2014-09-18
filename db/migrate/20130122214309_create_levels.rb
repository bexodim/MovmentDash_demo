class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.integer :number
      t.string :data_sound
      t.string :data_processing
      t.text :description

      t.timestamps
    end
  end
end
