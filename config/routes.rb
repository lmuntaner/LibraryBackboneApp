Rails.application.routes.draw do
  root :to => "sites#root"
  
  namespace :api, :defaults => {:format => :json } do
    resources :books
  end
end
