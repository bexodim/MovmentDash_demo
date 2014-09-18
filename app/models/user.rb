class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :role_ids, :as => :admin
  attr_accessible :name, :email, :password, :password_confirmation, :remember_me, :avatar, :score_id
  
  attr_accessible :avatar
  has_attached_file :avatar, 
    :styles => { :medium => "300x300>", :thumb => "100x100>" },
    :default_url => "profiles/default_:style.jpg"

  has_many :scores

end
