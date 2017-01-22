defmodule MyTube.ApiKeyTest do
  use MyTube.ModelCase

  alias MyTube.ApiKey

  @valid_attrs %{token: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = ApiKey.changeset(%ApiKey{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = ApiKey.changeset(%ApiKey{}, @invalid_attrs)
    refute changeset.valid?
  end
end
