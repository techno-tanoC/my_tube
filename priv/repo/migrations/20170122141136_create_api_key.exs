defmodule MyTube.Repo.Migrations.CreateApiKey do
  use Ecto.Migration

  def change do
    create table(:api_keys) do
      add :token, :string

      timestamps()
    end

    create unique_index(:api_keys, [:token])
  end
end
