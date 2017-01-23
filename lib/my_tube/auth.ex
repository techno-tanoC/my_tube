defmodule MyTube.Auth do
  def access_token(conn) do
    conn.req_headers
    |> Enum.find_value(fn {key, val} ->
      key == "x-access-token" && val
      end)
  end
end
