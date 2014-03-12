BurningAirlines::Application.routes.draw do
  root to: "static_pages#about"

  devise_for :users

  resources :airplanes,{shallow: true} do
    resources :flights,{shallow: true} do
        resources :reservations
    end
  end

  resources :users,only: [:index] do
    resources :flights do
      resources :reservations
    end
  end

end
