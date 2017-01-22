defmodule MyTube.ApiKey do
  use MyTube.Web, :model

  schema "api_keys" do
    field :token, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:token])
    |> unique_constraint(:token)
  end
end
