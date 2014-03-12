BurningAirlines::Application.routes.draw do
  root to: "airplanes#index"

  devise_for :users

  resources :airplanes,{shallow: true} do
    resources :flights
  end

  resources :users, {shallow: true, only:[:index]} do
    resources :reservations
  end

end
