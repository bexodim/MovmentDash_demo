class HomeController < ApplicationController
	layout "welcome"
  def index
    @users = User.all
  end

  
end
