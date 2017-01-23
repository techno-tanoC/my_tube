defmodule MyTube.Auth do
  def header_token(conn) do
    conn.req_headers
    |> Enum.find_value(fn {key, val} ->
      key == "x-access-token" && val
      end)
  end

  def cookie_token(conn) do
    conn.req_cookies["access_token"]
  end
end
