/* Javascript for the hunting list page */

function main(){    
    /* Add Pokemon button */
    
    let add_pokemon_button = document.querySelector("#add_pokemon");


    /*Function to add pokemon to hunting list*/

    let new_button = document.createElement("button");
    let pokemon_list = document.querySelector("#added_pokemon_list");

    function onAddButtonClick(){
        pokemon_list.appendChild(new_button);
    }

    add_pokemon_button.addEventListener("click", onAddButtonClick);
}

window.addEventListener("load", main);
