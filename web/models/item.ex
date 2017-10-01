defmodule MyTube.Item do
  use MyTube.Web, :model

  schema "items" do
    field :title, :string
    field :url, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :url])
    |> validate_required([:title, :url])
  end

  def youtube_id(url) do
    case URI.parse(url) do
      %URI{host: "www.youtube.com", query: query} ->
        {:ok, query |> URI.decode_query |> Map.get("v")}
      %URI{host: "youtube.com", query: query} ->
        {:ok, query |> URI.decode_query |> Map.get("v")}
      %URI{host: "youtu.be", path: path} ->
        {:ok, path |> String.slice(1..-1)}
      _ ->
        {:error, "It is not URI"}
    end
  end

  def get_title(id) do
    with title_url = title_url(id),
         {:ok, %{body: body}} <- HTTPoison.get(title_url),
         {:ok, %{"items" => items}} <- Poison.decode(body)
      do
        items |> hd |> get_in(["snippet", "title"])
      else
        _ -> "Unknown title"
      end
  end

  defp title_url(id) do
    key = Application.get_env(:my_tube, MyTube.Auth)[:key]
    "https://www.googleapis.com/youtube/v3/videos?id=#{id}&key=#{key}&part=snippet&fields=items(snippet(title))"
  end

  def youtube_url(id) do
    "https://youtube.com/watch?v=" <> id
  end

end
