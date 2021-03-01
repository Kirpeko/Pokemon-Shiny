function main(){

    /* Setting up reading the html counter and the actual counter number */

    let counter = document.querySelector("#counter");
    let counter_num;
    let complete_button = document.querySelector("#btn_complete");


    /* Local Storage stuff I barely understand */

    if(localStorage.getItem("counter_num") === null){       // If there is nothing in local storage sets counter to 0
        counter_num = 0;
        localStorage.setItem("counter_num", counter_num);
    }else{
        counter_num = parseInt(localStorage.getItem("counter_num"));   // Otherwise set counter to what's in local storage
    }

    counter.innerHTML = counter_num;


    /* Setting up maths for later use in current hunting stats */

    let to_90 = 18858 - counter_num;

    let random

    /* Function for changing the numbers upon clicking the counter */

    function btnPlusOnClick(e){
        counter_num = counter_num + 1;
        binomialDistribution();
        random = Math.floor(Math.random() * 201)
        if(random == 0){
            counter.innerHTML = counter_num
            random_message = Math.floor(Math.random() * encouraging_message.length)
            complete_button.innerHTML = encouraging_message[random_message]
        }else{
            counter.innerHTML = counter_num;
            complete_button.innerHTML = "Complete"
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

    today = mm+'/'+dd+'/'+yyyy;

    date_area.innerHTML = today;
}



let encouraging_message = [
    "Keep Going You Can Do It!",
    "Don't Give Up Yet!",
    "Please God Keep This Site In Fullscreen It Doesn't Scale Yet",
]


window.addEventListener("load", main)