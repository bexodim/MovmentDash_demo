MovementDash::Application.routes.draw do
  resources :levels, :has_many => :scores
  post 'levels/score' => 'levels#score', :as => 'score'


  authenticated :user do
    root :to => 'users#show'
  end
  root :to => 'home#index'
  devise_for :users
  resources :users

  get "/mainmenu" => 'home#menu', :as => 'main_menu'
  get '/learn' => 'levels#learn', :as => 'learn'

  get '/testold' => 'levels#testold', :as => 'testold'
  get '/testtumblr' => 'levels#testtumblr', :as => 'testtumblr'
  ##get '/show_beta' => 'levels#show_beta', :as => 'show_beta'
end