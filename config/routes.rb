BurningAirlines::Application.routes.draw do
  root to: "airplanes#index"
  get '/airplane', to: 'airplanes#airplane'

  devise_for :users

  resources :airplanes
  resources :flights,{shallow: true} do
    resources :reservations
  end

  resources :users,only: [:index] do
    resources :flights do
      resources :reservations
    end
  end

end
