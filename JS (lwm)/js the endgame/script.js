// Higher order function

// higher order function ak asa function hota ha jo ak or function return karay ya phir jis ka parameters ma sa ak or function pass ho

// e.g
function abc(val) {
    
}
abc(function (){})

function abc(val) {
    return function(){}
}

// we write this type of code when we make coluser

//......................................................

// Constructor function

// jab ap ka pass koi asa moka ho ka ap ko ak jasi properties ka bohat saray elements bnanay hon to ap wahan constructor function use kar saktay han...

//constructor function huma ak sancha bana kar data ha or new ka keyword use kar ka hum us ka instance bana saktay han .... jasa ka "bisketBnaoSancha" ya ak sancha ha or " let bis1 = new bisketBnaoSancha(); " ya ak bisket ha ...
function bisketBnaoSancha() {
    this.color = "brown";
    this.design = "rectangle";
    this.taste = "sugary";
}
let bis1 = new bisketBnaoSancha();
let bis2 = new bisketBnaoSancha();
let bis3 = new bisketBnaoSancha();

function buttonbnao(color) {
    this.color = color;
    this.design = "circle";
    this.icon = false;
}
let btn1 = new buttonbnao("red");
let btn2 = new buttonbnao("blue");
let btn3 = new buttonbnao("green");