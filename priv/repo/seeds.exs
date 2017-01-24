alias MyTube.{Repo, Item}

Repo.delete_all(Item)

%Item{title: "choco fondue", url: "https://www.youtube.com/watch?v=9u7itnyLFbc"} |> Item.changeset |> Repo.insert!
%Item{title: "Hotel Moonside", url: "https://www.youtube.com/watch?v=e76bgm5NM0k"} |> Item.changeset |> Repo.insert!
%Item{title: "Snail's House - Candy Dash (VIP) feat.ストロベリー症候群", url: "https://www.youtube.com/watch?v=oHbvkAVeD_M"} |> Item.changeset |> Repo.insert!
%Item{title: "THE IDOLM@STER CINDERELLA GIRLS - Hotel Moonside (N.Fu11ya Remix)", url: "https://www.youtube.com/watch?v=jGiAeD7Icuk"} |> Item.changeset |> Repo.insert!
%Item{title: "HD Hands Up!: Nigel Hard - Handzup! Will Never Die (Bassdropz Radio Edit)", url: "https://www.youtube.com/watch?v=Dkp7dyCNHb4"} |> Item.changeset |> Repo.insert!
