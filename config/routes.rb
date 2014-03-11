BurningAirlines::Application.routes.draw do
  root to: "static_pages#about"

  resources :flights

  resources :airplanes

  devise_for :users

end
