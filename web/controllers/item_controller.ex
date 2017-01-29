defmodule MyTube.ItemController do
  use MyTube.Web, :controller

  alias MyTube.Item

  def index(conn, _params) do
    items = Repo.all(Item)
    render(conn, "index.json", items: items)
  end

  def create(conn, %{"item" => %{"url" => url}}) do
    {:ok, id} = Item.youtube_id(url)
    title = Item.get_title(id)

    changeset = Item.changeset(%Item{}, %{"title" => title, "url" => Item.youtube_url(id)})

    case Repo.insert(changeset) do
      {:ok, item} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", item_path(conn, :show, item))
        |> render("show.json", item: item)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(MyTube.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    item = Repo.get!(Item, id)
    render(conn, "show.json", item: item)
  end

  def delete(conn, %{"id" => id}) do
    item = Repo.get!(Item, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(item)

    send_resp(conn, :no_content, "")
  end
end
