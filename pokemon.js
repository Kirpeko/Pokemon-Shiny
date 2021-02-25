function main(){

    /* Setting up reading the html counter and the actual counter number */

    let counter = document.querySelector("#counter");
    let counter_num;


    /* Local Storage stuff I barely understand */

    if(localStorage.getItem("counter_num") === null){       // If there is nothing in local storage sets counter to 0
        counter_num = 0;
        localStorage.setItem("counter_num", counter_num);
    }else{
        counter_num = parseInt(localStorage.getItem("counter_num"));   // Otherwise set counter_num to what's in local storage
    }

    counter.innerHTML = counter_num;


    /* Setting up maths for later use in cureent hunting stats */

    let to_90 = 18858 - counter_num;


    /* Function for changing the numbers upon clicking the counter */

    function btnPlusOnClick(e){
        counter_num = counter_num + 1;
        binomialDistribution();
        counter.innerHTML = counter_num;
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

    function binomialDistribution(){
        var temporary_num = (1-(1/8192));
        var exponential_num = Math.pow(temporary_num, counter_num);
        var binomial_distribution = 1 - exponential_num
        return binomial_distribution
        // to be completed
    }
}

window.addEventListener("load", main)
