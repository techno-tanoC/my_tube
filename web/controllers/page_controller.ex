defmodule MyTube.PageController do
  use MyTube.Web, :controller

  def index(conn, _params) do
    token = MyTube.Auth.cookie_token(conn)
    if token && MyTube.Repo.get_by(MyTube.ApiKey, token: token) do
      render conn, "index.html"
    else
      redirect(conn, to: "/login")
    end
  end
end
