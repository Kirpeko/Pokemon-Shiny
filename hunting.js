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


    let pokemon_list = JSON.parse(localStorage.getItem("pokemon"));

    let copied_pokemon_list = JSON.parse(JSON.stringify(pokemon_list));
    

    if(localStorage.getItem("hunting_pokemon") !== null){
        var hunting_list = JSON.parse(localStorage.getItem("hunting_pokemon"));
    }else{
        var hunting_list = []
    };



    /* Add Pokemon button */
    
    let confirm_button = document.querySelector("#confirm_button");
    let add_pokemon_button = document.querySelector("#add_pokemon");
    let cancel_button = document.querySelector("#btn-cancel");

    function onAddButtonClick(){
        document.getElementById("myForm").style.display = "block";
    }

    add_pokemon_button.addEventListener("click", onAddButtonClick)


    /*Function to add pokemon to hunting list*/

    function onConfirmButtonClick(){
        let new_mon = document.querySelector("#pokemon_dropdown").value;
        for(let i in pokemon_list){
            if(pokemon_list[i].name === new_mon){
                let new_mon_object = copied_pokemon_list[i];
                new_mon_object["number_seen"] = 0;
                new_mon_object["date"] = "";
                hunting_list.push(new_mon_object);
                localStorage.setItem("hunting_pokemon", JSON.stringify(hunting_list));
            }
        }
        location.reload();
        closeForm();
    }

    confirm_button.addEventListener("click", onConfirmButtonClick);

    function onCancelButtonClick(){
        closeForm();
    }

    cancel_button.addEventListener("click", onCancelButtonClick);


    let pokemon_button_list = document.querySelector("#hunting_list");

    if(localStorage.getItem("hunting_pokemon") !== null){
        var hunting_pokemon = JSON.parse(localStorage.getItem("hunting_pokemon"))
        for(let item_index = 0; (item_index < hunting_pokemon.length); item_index++){
            let item = hunting_pokemon[item_index];
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



    function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }

}

window.addEventListener("load", main);
