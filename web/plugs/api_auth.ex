defmodule MyTube.Plug.ApiAuth do
  import Plug.Conn

  alias MyTube.{Repo, ApiKey}

  def init(default), do: default

  def call(conn, _ \\ []) do
    token =
      conn.req_headers
      |> Enum.find_value(fn {key, val} -> key == "x-access-token" && val end)

    if token && Repo.get_by(ApiKey, token: token) do
      conn
    else
      send401(conn)
    end
  end

  defp send401(conn) do
    conn
    |> put_resp_content_type("text/plain")
    |> send_resp(401, "Unauthorized")
    |> halt
  end
end
