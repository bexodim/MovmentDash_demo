class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.integer :level_id
      t.integer :user_id
      t.integer :value

      t.timestamps
    end
  end
end
