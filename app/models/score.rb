class Score < ActiveRecord::Base
  attr_accessible :level_id, :user_id, :value

  validates :level_id, :presence => true
  validates :user_id, :presence => true
  validates :value, :presence => true

  belongs_to :level, :foreign_key => :level_id
  belongs_to :user, :foreign_key => :user_id
end
