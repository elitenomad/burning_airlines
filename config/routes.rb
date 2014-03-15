BurningAirlines::Application.routes.draw do
  root to: "airplanes#airplane"
  get '/airplane', to: 'airplanes#airplane'

  devise_for :users

  resources :airplanes

  resources :flights,{shallow: true} do
    resources :reservations
  end

  get '/search', to: 'flights#search'
  post '/reserve/:flight_id/users/:user_id/seats/:seat_id', to: 'reservations#reserve'

  resources :users,only: [:index] do
    resources :flights do
      resources :reservations
    end
  end

end
