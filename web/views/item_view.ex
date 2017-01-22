defmodule MyTube.ItemView do
  use MyTube.Web, :view

  def render("index.json", %{items: items}) do
    %{data: render_many(items, MyTube.ItemView, "item.json")}
  end

  def render("show.json", %{item: item}) do
    %{data: render_one(item, MyTube.ItemView, "item.json")}
  end

  def render("item.json", %{item: item}) do
    %{id: item.id,
      title: item.title,
      url: item.url}
  end
end
