// ES5 Js ka older version ha or ES6 Js ka new version ha ... lakin hum dono use kar rahay han ES5 bhi or ES6 bhi

// diff between var , let , const

// older Js ma srif var tha
//var function scoped hota ha => var apna parent function ma kahain bhi use ho sakta ha

function abcd() {
    for (var i=0; i < 12; i++){
        console.log(i);
    }
    console.log(i);
    
}
abcd();

// new Js ma let or const ha
// let braces scoped hota ha 
function bcd() {
    for (let i = 0; i < 12; i++){
        console.log(i);
    }
    console.log(i);
    
}
bcd();
