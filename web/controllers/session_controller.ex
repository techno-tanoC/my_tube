defmodule MyTube.SessionController do
  use MyTube.Web, :controller

  alias MyTube.ApiKey

  def new(conn, _params) do
    render conn, "new.html"
  end

  def create(conn, %{"session" => params}) do
    auth = Application.get_env(:my_tube, MyTube.Auth)
    if params["name"] == auth[:name] && params["pass"] == auth[:pass] do
      token = SecureRandom.base64(64)
      changeset = ApiKey.changeset(%ApiKey{}, %{"token" => token})

      case Repo.insert(changeset) do
        {:ok, api_key} ->
          conn
          |> put_status(:created)
          |> render("show.json", api_key: api_key)
        {:error, changeset} ->
          conn
          |> put_status(:unprocessable_entity)
          |> render(MyTube.ChangesetView, "error.json", changeset: changeset)
      end
    else
      send_resp(conn, :unauthorized, "")
    end
  end

  def delete(conn, _params) do
    {_, token} = conn.req_headers |> Enum.find(&elem(&1, 0) == "x-access-token")
    api_key = Repo.get_by!(ApiKey, token: token)
    Repo.delete!(api_key)
    send_resp(conn, :no_content, "")
  end
end
