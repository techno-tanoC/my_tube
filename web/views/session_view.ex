defmodule MyTube.SessionView do
  use MyTube.Web, :view

  def render("show.json", %{api_key: api_key}) do
    %{data: render_one(api_key, MyTube.SessionView, "token.json")}
  end

  def render("api_key.json", %{api_key: api_key}) do
    %{token: api_key.token}
  end
end
