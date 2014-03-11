BurningAirlines::Application.routes.draw do

  resources :flights

  resources :airplanes

  devise_for :users
  root to: "static_pages#about"
end
