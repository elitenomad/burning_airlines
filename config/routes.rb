BurningAirlines::Application.routes.draw do
  root to: "static_pages#about"

  devise_for :users

  resources :airplanes,{shallow: true} do
    resources :flights,{shallow: true} do
        resources :reservations
    end
  end

  resources :users, {shallow: true, only:[:index,:show]} do
    resources :reservations
  end

end
