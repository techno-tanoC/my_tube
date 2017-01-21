defmodule MyTube.SessionController do
  use MyTube.Web, :controller

  def new(conn, _params) do
    render conn, "new.html"
  end

  def create(conn, _params) do
    conn
    |> put_flash(:info, "Login successfully.")
    |> redirect(to: page_path(conn, :index))
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "Logout successfully.")
    |> redirect(to: page_path(conn, :index))
  end
end
