defmodule MyTube.SessionView do
  use MyTube.Web, :view

  def render("show.json", %{api_key: api_key}) do
    %{data: %{token: api_key.token}}
  end
end
