FROM elixir:1.4.5

ENV MIX_ENV prod

RUN mkdir /app
WORKDIR /app

ADD mix.exs /app/mix.exs
ADD mix.lock /app/mix.lock
RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix deps.get
RUN mix deps.compile

ADD . /app
RUN mix compile
RUN mix phoenix.digest
