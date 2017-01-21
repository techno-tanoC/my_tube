# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :my_tube,
  ecto_repos: [MyTube.Repo]

# Configures the endpoint
config :my_tube, MyTube.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "GC0eAfz1rWdWcCQ6C/hXvlHoQq0FMxHFzhJb8bTY1SDig0uP0w+T9DhkBlHcqhIg",
  render_errors: [view: MyTube.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MyTube.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
