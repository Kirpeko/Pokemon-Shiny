/*  Roy's Helpful Resources  */

/*localStorage.setItem('pokemon', JSON.stringify(
[
{
   "name" : "charmander"
   "sprite_image" : "src.png"
   "number_seen": 2,
   "number_caught" : 3
},
{
   "name" : "pikachu"
   "sprite_image" : "src.png"
   "number_seen": 2,
   "number_caught" : 3
}
]))*/

let pokemon_list = localStorage.getItem('pokemon');
for(let item_index = 0; item_index <  pokemon_list.length; item_index++){
   let item = pokemon_list[item_index];
   let button = document.createElement('button')
   button.innerHTML = `${item['name']} ${item['number_seen']}`;
   button.addEventListener('click', function(){
      localStorage.setItem('selectedIndex', item_index);
      window.location.replace('pokemon.html');
   })
}
//js associated with pokemon.html
let index = localStorage.getItem('selectedIndex')
let pokemons = JSON.parse(localStorage.getItem('pokemon'));
let selected_mon = pokemons[index]


/*  Image Links  */
/*

// Bulbasaur \\

<a href="http://pokemondb.net/pokedex/bulbasaur"><img src="https://img.pokemondb.net/sprites/firered-leafgreen/shiny/bulbasaur.png" alt="Bulbasaur"></a>


// Charmander\\

<a href="http://pokemondb.net/pokedex/charmander"><img src="https://img.pokemondb.net/sprites/firered-leafgreen/shiny/charmander.png" alt="Charmander"></a>


// Squirtle \\

<a href="http://pokemondb.net/pokedex/squirtle"><img src="https://img.pokemondb.net/sprites/firered-leafgreen/shiny/squirtle.png" alt="Squirtle"></a>


// Pikachu \\

<a href="http://pokemondb.net/pokedex/pikachu"><img src="https://img.pokemondb.net/sprites/firered-leafgreen/shiny/pikachu.png" alt="Pikachu"></a>

*/