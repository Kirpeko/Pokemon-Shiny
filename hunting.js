/* Javascript for the hunting list page */

function main(){  
    
    /* On Load for Local Storage */
    if(localStorage.getItem("pokemon") === null){
        localStorage.setItem('pokemon', JSON.stringify(
            [
                {
                    "name" : "Bulbasaur",
                    "sprite_image" : "https://img.pokemondb.net/sprites/firered-leafgreen/shiny/bulbasaur.png",
                    "href" : "http://pokemondb.net/pokedex/bulbasaur",
                    "number_seen" : 0,
                    "date" : ""
                },
                {
                    "name" : "Charmander",
                    "sprite_image" : "https://img.pokemondb.net/sprites/firered-leafgreen/shiny/charmander.png",
                    "href" : "http://pokemondb.net/pokedex/charmander",
                    "number_seen": 0,
                    "date" : ""
                },
                {
                    "name" : "Squirtle",
                    "sprite_image" : "https://img.pokemondb.net/sprites/firered-leafgreen/shiny/squirtle.png",
                    "href" : "http://pokemondb.net/pokedex/squirtle",
                    "number_seen": 0,
                    "date" : ""
                },
                {
                    "name" : "Pikachu",
                    "sprite_image" : "https://img.pokemondb.net/sprites/firered-leafgreen/shiny/pikachu.png",
                    "href" : "http://pokemondb.net/pokedex/pikachu",
                    "number_seen": 0,
                    "date" : ""
                }
            ]))
    }


    /* Add Pokemon button */
    
    let confirm_button = document.querySelector("#confirm_button");
    let add_pokemon_button = document.querySelector("#add_pokemon");

    function onAddButtonClick(){
        document.getElementById("myForm").style.display = "block";
    }

    add_pokemon_button.addEventListener("click", onAddButtonClick)

    /*Function to add pokemon to hunting list*/

    let new_button = document.createElement("button");
    let pokemon_button_list = document.querySelector("#hunting_list");

    

    function onConfirmButtonClick(){
        selected_mon = document.querySelector("#pokemon_dropdown").value;
        new_button.id = "testid";
        pokemon_button_list.appendChild(new_button);
        new_button.className = "list_buttons"
        new_button.innerHTML = `${selected_mon}  ·  ${0}`;
            // Read Chosen pokemon name/set counter to 0
    }

    confirm_button.addEventListener("click", onConfirmButtonClick);


    let pokemon_list = JSON.parse(localStorage.getItem('pokemon'));
    for(let item_index = 0; (item_index < pokemon_list.length); item_index++){
        let item = pokemon_list[item_index];
        let button = document.createElement('button')
        button.className = "list_buttons";
        button.innerHTML = `${item['name']} · ${item['number_seen']}`;
        pokemon_button_list.appendChild(button);
        button.addEventListener('click', function(){
            localStorage.setItem('selectedIndex', item_index);
            window.location.replace('pokemon.html');
        })
    }

}

window.addEventListener("load", main);
