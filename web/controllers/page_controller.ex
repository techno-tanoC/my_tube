defmodule MyTube.PageController do
  use MyTube.Web, :controller
  alias MyTube.{Repo, Auth, ApiKey, Item}

  def index(conn, _params) do
    token = Auth.cookie_token(conn)
    if token && Repo.get_by(ApiKey, token: token) do
      render(conn, "index.html")
    else
      redirect(conn, to: "/login")
    end
  end

  def export(conn, _params) do
    items = Item |> Repo.all
    json = Phoenix.View.render_many(items, MyTube.ItemView, "item.json") |> Poison.encode!
    conn
    |> put_resp_header("content-disposition", "attachment; filename=\"my_tube.json\"")
    |> send_resp(200, json)
  end
end
