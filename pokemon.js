function main(){

    /* Setting up reading the html counter and the actual counter number */
    
    let index = localStorage.getItem('selectedIndex')
    let pokemons = JSON.parse(localStorage.getItem('pokemon'));
    let selected_mon = pokemons[index]

    let pokemon_sprite = document.querySelector("#pokemon_sprite");
    pokemon_sprite.src = selected_mon["sprite_image"];

    let sprite_anchor = document.querySelector("#sprite_anchor");
    sprite_anchor.href = selected_mon["href"];

    let counter = document.querySelector("#counter");
    let counter_num = selected_mon["number_seen"];

    let site_name = document.querySelector("#site_name");

    counter.innerHTML = counter_num;


    /* Setting up maths for later use in current hunting stats */

    //let to_90 = 18858 - counter_num;

    let random

    /* Function for changing the numbers upon clicking the counter */

    function btnPlusOnClick(e){
        counter_num = counter_num + 1;
        binomialDistribution();
        random = Math.floor(Math.random() * 201)
        if(random == 0){
            counter.innerHTML = counter_num
            random_message = Math.floor(Math.random() * encouraging_message.length)
            site_name.innerHTML = encouraging_message[random_message]
        }else{
            counter.innerHTML = counter_num;
            site_name.innerHTML = "Shiny Tracker"
        }
        localStorage.setItem("counter_num", counter_num);
    }

    let btn_plus = document.querySelector("#btn_plus");
    btn_plus.addEventListener("click", btnPlusOnClick);


    /* Function for minus button changing the number */

    function btnMinusOnClick(){
        counter_num = counter_num - 1;
        if (counter_num < 0){
            counter_num = 0;
        };
        binomialDistribution();
        counter.innerHTML = counter_num;
        localStorage.setItem("counter_num", counter_num);
    }

    let btn_minus = document.querySelector("#btn_minus");
    btn_minus.addEventListener("click", btnMinusOnClick);


    /* Function for calculation binomial distribution */

    let bnd_table = document.querySelector("#tb6");

    function binomialDistribution(){
        let temporary_num = (1-(1/8192));
        let exponential_num = Math.pow(temporary_num, counter_num);
        let binomial_distribution_decimal = 1 - exponential_num
        let binomial_distribution_percent = binomial_distribution_decimal * 100
        bnd_table.innerHTML = binomial_distribution_percent.toFixed(2) + "%"
    }

    binomialDistribution();
    /* Get current date */
    
    let date_area = document.getElementById("tb2");

    let today = new Date();

    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();


    if(localStorage.getItem("date") === null){       // If there is nothing in local storage sets date to today
        today = mm+'/'+dd+'/'+yyyy;
        localStorage.setItem("date", today);
    }else{
        today = (localStorage.getItem("date"));   // Otherwise set date to what's in local storage
    }

    date_area.innerHTML = today;
}



let encouraging_message = [
    "Keep Going!",
    "You Can Do It!",
    "Don't Give Up Yet!",
    "Please God Keep This Site In Fullscreen It Doesn't Scale",
    "Maybe One Day I Will Complete This",
]


window.addEventListener("load", main)