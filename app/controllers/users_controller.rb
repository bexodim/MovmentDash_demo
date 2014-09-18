class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    ##authorize! :index, @user, :message => 'Not authorized as an administrator.'
    @users = User.all
    @levels = Level.all
  end

  def show
    if params[:id].nil? # if there is no user id in params, show current one
      @user = current_user
    else # if there is the user id in params just use it, 
      # maybe get 'authorization failed'
      @user = User.find(params[:id])
    end
    @levels = Level.all ##change to be levels user has played
  end
  
  def update
    authorize! :update, @user, :message => 'Not authorized as an administrator.'
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user], :as => :admin)
      redirect_to users_path, :notice => "User updated."
    else
      redirect_to users_path, :alert => "Unable to update user."
    end
  end
    
  def destroy
    authorize! :destroy, @user, :message => 'Not authorized as an administrator.'
    user = User.find(params[:id])
    unless user == current_user
      user.destroy
      redirect_to users_path, :notice => "User deleted."
    else
      redirect_to users_path, :notice => "Can't delete yourself."
    end
  end
end