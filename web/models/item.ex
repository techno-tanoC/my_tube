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

  def title_url(url) do
    id =
      url
      |> String.split("?")
      |> List.last
      |> URI.decode_query
      |> Map.get("v")
    "https://noembed.com/embed?url=https://www.youtube.com/watch?v=" <> id
  end
end
