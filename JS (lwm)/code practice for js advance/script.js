// ES5 Js ka older version ha or ES6 Js ka new version ha ... lakin hum dono use kar rahay han ES5 bhi or ES6 bhi

// diff between var , let , const

// var 
//1) older Js ma srif var tha
//2)var function scoped hota ha => var apna parent function ma kahain bhi use ho sakta ha

function abcd() {
    for (var i=0; i < 12; i++){
        console.log(i);
    }
    console.log(i);
    
}
abcd();
//3)var adds itself to the window objects
// kuch asa features han jo huma use karna hotay han par wo js ka part nahi hoti to phir bhi hum usa use kar patay han q ka js wo fectures window sa use kar lata ha , or window ak box of features given by browser to use with......eg: alert ,prompt,console.... var apna ap ko window object ma add kar lata ha jis ki wagha sa ya hamara data ka lia safe nahi ha q ka asa hamra data or variable expose ho jata ha..

// let 
//1) new Js ma let or const ha
//2) let and const are braces scoped hota ha 
function bcd() {
    for (let i = 0; i < 12; i++){
        console.log(i);
    }
    console.log(i);
    
}
bcd();
//3)let and const doesn't adds itself to the window objects

// ..........................................................

// Browser cotext api

// browser context api huma total 3 chezain provide karta ha ...
// 1) Window

// 2) Stack
//         jis tarteeb sa data ata ha usi tertib sa data jata han ... matlab huma 3 variables bnanay han a , b and c . phala a bnay ga phir b or phir c . or jab ya khatam ho gay to phala a khatam ho ga phir b or phir c...

// 3) Heap memory
//         jitna bhi intermediate data hota ha wo khain na kahin to store karna hota han na to wo heap memory ma store hota ha...
//         jasa 3 + 5 + 6 + 9 jab js is sab ko add karay gi to phala wo 3 or 5 ko + karay gi or jo answer aya ga 8 usa heap memory ma temperarly store kar la gi ... phir 8 + 6 ho ga or us ka answer heap memory ma store ho jay ga.
//         means ak calcution kartay hoya jo bech ka data ha matlab intermediate data jo abhi final data nahi ha wo heao ma store hoota ha

// ..........................................................

// Execution context
// exection  context ak asa imaginary cotainer ha jo function ka code run hota hi create ho jata ha.is ka andar 3 chezain hoti han ...variables, functions inside that function (matlab us ka child functions)  and lexical environment.
//     e.g :
// function abc() {
//     let a = 54;
//     function ab() {
//         let b = 23;
//     }
// }
// abc();
// is code ka call hotay hi exection context (ak imaginary container) ban jay ga jis ka abc function ka variables hon gay(let a )  ... , functions ayain ga (ab function ) or lexical environment aya gi (jo batay ga ka ksi function ka kia scope ha wo kon kon si chezain access kar sakta ha )

// lexical environment :

    // lexical enviornment ak chart hota ha jis ma likha hota ha ka ap ka particular function kin chezon ko access kar sakta ha or kin ko nahi, matlab its hold the scope and scope chain of particular function
        
// ..........................................................
        
        // How to copy Reference values:
        
//     q ka jab hum reference value ma change karta han to wo original ma bhi change ho jata ha or copy nahi hota.
// referance values ko copy karna ka lia hum "spread operater"(...) use kartay han.

// e.g: (copy a Array)
let  a = [1, 2, 3, 4, 5];
let b = [...a]; //ya 3 ots spread operater han is sa value copy ho jati ha

// e.g: (copy a Object)
let obj = {
    name: "Ayesha"
};
let copyobj = {
    ...obj
}; // is thara object copy ho gaya jis obj ko copy karna ha us aka naam sa phala spread operator laga do

// ..........................................................

        // truthy and falsy 
        
// js ma kuch bhi likho wo mainly tharan sa convert hota ha "truthy" or "falsy".

// "falsy" values ya han .... 0 , NaN , undefined ,  null , document.all ..... is ka elawa baki sab truthy han ....TRUTHY KA TIME CODE RUN HO GA OR FALSY KA TIME US SA NEXT CODE RUN HO GA ..... 

// e.g: 
if (7) {
    console.log("hello i am truthy")
}
else {
    console.log("hello if i run then the value in if is falsy")
}

// ..........................................................

// foreach , forin , do-while

// for each loop :

// ya only array par chalta ha ...matlab jab bhi thumara pass aray ho to ya srif tab hi use ma ata ha

// e.g:
let num = [1,2,3,4,5,6,7,8]
num.forEach(function (value) {
    console.log(value + 2);
});

// foreach kabhi bhi by default ap ka array ma change nahi karta , wo ap ko array ki temperrary copy par changes kar ka data ha jis ki wagha sa array hemasha same rahata ha.

// forin loop :

// objects par loop karnay ka lia hota ha for in loop

// e.g:
var object = {
    name : "Ayesha" ,
    age: 23,
    city : "Karachi",
}
for (let key in object) {
    console.log(key, object[key]); //"key" sa srif key ati han obj ki or "obj[key]" sa object ki value acess hoti ha 
}

// do-while:

// huma jab bhi ki code ko ak bar zaroor run karna ho to hum do while latay han

// e.g:

let x = 12
do {
    console.log("hello");
    a++;
}
while (a < 15);

// ..........................................................

// callback function:

// asa code jis ka huma pata nahi hota ka wo kab tak complete ho jay ga to hum usa ak function da datay han ka bhaya jab complete ho jao to tab bata dana or js bhai ya function tab chala dana , or wo function jo hum datay han wo ak normal function hi hota ha or usa hum callback function khatay han ... or usa sa phala "settimeout" bhi laga datay han or kuch time da datay ha ka complete honay ka itna time baad chal jana..

// e.g:

setTimeout(function () {
    console.log("2 second baad chalna");
}, 2000);// ya han 2000 ka matlab 2 hazr mili second ha matlab 2 second ..... complete honay ka 2 second baad ya code run ho jay ga

// ..........................................................

// first class function:

// js ma ya ak concept ha jis ma hum functions ko as a value treate kar saktay han matlab variable ma rakh saktay han... maslan ka hum ak function ka perameters ma bhi function hi da rahay han

// e.g:

let ai = function (y) {
    y();
};
ai(function () { console.log("hey") });

// ..........................................................

// How arrays are made behind the scene and how we can make negative indexes aeeay in js:

// jo array han na js ma wo asliet ma object han... "arr[]" ya object ha ... aghr koi shak ha to is ka "typeof" kar ka bhi check kar saktay ho is ki type object aya gi ....
// arrays behind the scene asay bantay han .....samjo hum na likha :
let arr = [1, 2, 3, ]
//to behind the scene ak objectbanta ha "arr" ka naam sa ....is thara :
arr ={
    0: 1 , // beckend par asa banta ha 0 index da dia key ki jaga par or calue ki jaga par array ka element
    1: 2 ,
    2: 3 ,
};

// is ko prove karna ka lia hum arr ko negative value dain ga q ka array negative value kabhi nahi lata ... par js ma q ka ya object hi ha to ya negative value bhi la ga  
ar[-1] = 2;

// or is ko run karwanay ka baad ya kuch asa print ho ga
// { 1, 2, 3, -1:2}

//to phir ya kasa check ka karain ga ka ya array ha ya object....to is ka lia aghr hum:
Array.isArray([])// is ka andar array likhain ga to ya da ga "true" matlab ka ya array ha 
// true

Array.isArray([])// or aghar is ka andar object likhain ga to ya da ga "false " matlab ka ya array nahi ha
// false

// ..........................................................

// How to delete Object proprity (mara matlab key):

var last = {
    name: "ashi",
    age: 19,
}
// aghr hum age ki value nahi balka puri ki puri age ki properity hi hatana chatay han to hum ya karain ga:
delete last.age;

//...........................................................

// when ever you see "new" kwyword make a blank object in your mind and after that run the constructor function and add the details or values of that function into your blank object
//means:
//new keyword also create a blank object for the constructor which is getting called just after the new keyword

//e.g:

function xyz() {
    this.age = 12;
}

//...........................................................

//iife

//iife=> immediately invoked function expression

//is sa hum function ko foran chalatay han or function ka varibles bhi private bantay han

var ans = (function () {
    var privateVariableBantaHa = 12;// ya variable private ha 
    return {
        getter: function () {
            console.log(privateVariableBantaHa);
        },// is function sa hum private variable ko get kar saktay han 
        setter: function (val) {
            privateVariableBantaHa = val ;
        }// is function sa hum private variable ki value ko set kar saktay han
    }// hum na ans ma ak boject return kar dia jis ma do chezain han ak to getter function or ak setter function 
})()// ya function jo "()" ka andar ha us ko hum "iife"(immediately invoked function expression) boltay han ....or is ka andar ka variables private hotay han jin ko call karna ka lia getter or setter function bnanay partay han.

//...........................................................

//Prototype

prototype are already builtin properties and methods in js which we do'nt made 