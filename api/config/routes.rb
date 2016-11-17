Rails.application.routes.draw do
  namespace :v1 do
    resources :records
  end
  resources :apidocs, only: [:index]
end
