class Level < ActiveRecord::Base
  attr_accessible :data_processing, :data_sound, :description, :number, :score_id
  
  has_many :scores
end
