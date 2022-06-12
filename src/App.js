import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    let randomArray = [];
    while (randomArray.length < 20) {
      let num = Math.floor(Math.random() * 150 + 1);
      if (!randomArray.includes(num)) {
        randomArray.push(num);
      }
    }
    async function getPokemons(pokemonArray) {
      const pokemons = await Promise.all(
        pokemonArray.map(async (pokeId) => {
          const result = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + pokeId
          );
          const data = await result.json();
          return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
          };
        })
      );
      return pokemons;
    }
    getPokemons(randomArray).then((data) => setPokemons(data));
  }, []);

  console.log(pokemons);
  return (
    <div>
      <header>This is header content</header>
      <main>This is main content</main>
      <footer>Copyright &copy; Asad Mahmood</footer>
    </div>
  );
}

export default App;
