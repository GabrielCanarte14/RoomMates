Rails.application.routes.draw do
  
  namespace :api do
    root "rooms#index"
    resources :rooms, only:[:index, :show, :create, :update, :destroy]
  end 
end
