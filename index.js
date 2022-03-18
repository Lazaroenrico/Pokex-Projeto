import express from "express"
const app = express()
import path from "path"

app.set("view engine", "ejs")

const dirname = path.resolve(path.dirname(""))

app.use(express.static(path.join(dirname, "public")))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const port = 4900

const pokedex = [
  {
    id: 1,
    nome: "Arceus",
    descricao:
      "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
    tipo: "Type: Normal",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png",
  },
  {
    id: 2,
    nome: "Charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Type: Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    nome: "Dialga",
    descricao:
      "A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.",
    tipo: "Type:  Stell and Dragon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png",
  },
]

app.get("/", (req, res) => {

  res.render("index", { pokedex })

})

app.get("/add", (req, res) => {
  const pokemon = req.body

  console.log(pokemon)

  res.redirect("/")
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
