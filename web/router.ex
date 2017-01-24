defmodule MyTube.Router do
  use MyTube.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :auth do
    plug :accepts, ["json"]
    plug MyTube.Plug.ApiAuth
  end

  scope "/", MyTube do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/login", SessionController, :new
  end

  scope "/api", MyTube do
    pipe_through :auth

    resources "/items", ItemController, only: [:index, :create, :show, :delete]
  end

  scope "/api", MyTube do
    pipe_through :api

    post "/session", SessionController, :create
    delete "/session", SessionController, :delete
    get "/export", PageController, :export
  end
end
