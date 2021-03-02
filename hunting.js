/* Javascript for the hunting list page */

function main(){    


    /* Add Pokemon button */
    
    let confirm_button = document.querySelector("#confirm_button");
    let add_pokemon_button = document.querySelector("#add_pokemon");

    function onAddButtonClick(){
        document.getElementById("myForm").style.display = "block";
    }

    add_pokemon_button.addEventListener("click", onAddButtonClick)

    /*Function to add pokemon to hunting list*/

    let new_button = document.createElement("button");
    let pokemon_list = document.querySelector("#hunting_list");



    function onConfirmButtonClick(){
        new_button.id = "testid";
        pokemon_list.appendChild(new_button);
        new_button.style.cssText = "height: 100px;padding:10px;"
    }

    confirm_button.addEventListener("click", onConfirmButtonClick);

}

window.addEventListener("load", main);
