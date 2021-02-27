/* Javascript for the hunting list page */

function main(){    
    /* Add Pokemon button */
    
    let add_pokemon_button = document.querySelector("#add_pokemon");

    /*Test Function to change colour*/

    function onAddButtonClick(e){
        alert("test");
    }

    add_pokemon_button.addEventListener("click", onAddButtonClick);
}

window.addEventListener("load", main);
