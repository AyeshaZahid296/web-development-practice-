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

//......................................................

//////this call apply bind

// jo bhi chez {} ka andar hoti ha wo local scope ha ... or jo bhi chez {} ka andar nahi ha wo global scope hoti ha

/////// "this":
//this ki value har jaga change hoti ha
/////// method:
    //ak function jo object ka andar ho usa hum method katay han
    
// global scope ma this ki value => window
// function scope ma this ki value => window
// method scope ma this ki value => object
//     in method the "this" keyword always refer to parent object
// "this" ki value eventlistner ma hamasha wo ho gi jo .addEventListener sa phala likhi hoi ho gi..

/////// call , apply , bind :

//-----------jab bhi hum code kartay han or wahan this ki value kuch or ha or hum wahan this ki value change karna chatay han to tab hum  call , apply or bind ka use kartay han---------


//'''''call'''''
//    jasa ka huma pata ha ka  "this " ki value change hoti ha har scope ma ...function scope ma this ki value window hoti ha aghr huma this ki value change karni ho to hum call , apply or bind ka use kar ka this ki value change kar saktay han

function adf() {
    console.log(this); //function scope ma  this ki value window ha .
}
let obj = { age: 46, }//aghr mugha ya age this ki value banini ho to phir hum 
adf.call(obj)//is thara sa phala function ka naam likhain ga or phir . laga kar call ka keyword likhain ga or phir bracket ma wo object pass karwa dain ga jis ki properties ko hum na this ki value bnana ha....

// is thara print karnay sa hamaray pass this ki this ma age ki value 46 print ho gi ...

// ..................par par aghr humara pass function ma parameters bhi pass karwanay hon to phir kaya ............?
    
function io(val, val2, val3) {//aghr function ma parameters bhi ho to phir hum kasa this ki value change karaing ga or parameters bhi kasa enter karaing ga
    console.log(this,val,val2,val3);//yahan par hum na console par this ki value or teeno variales ki bhi value print karwai ha ta ka check kar sakain ka value change hoi bhi ha ka nahi 
}
let aeo = { age: 26, }
io.call(aeo, 1, 2, 3)//yahan par phala function ko call karain ga phi . laga kar call ka method likhain ga phir phala parameter hum wo object dain ga jo hum na change karwani ho value "this" ka lia ... phir hum hum bak ka teen paremeters ki values add karaing ga ...

//'''''apply'''''
//...........aghr huma apply ka use karna ha same example ma to phir hum srif call kartay waqat jo paremeters ki value ha wo array ki form ma dain ga or .ka baad apply ka method use karain ga......

// e.g:

io.apply(aeo, [1, 2, 3]) //apply ka lia asa likhain ga

//'''''bind'''''

//bind bilkul same ha code ki thara bss ak farak ha ... ka bind chalata nahi ha .... isa chalana ka lia huma kis function ma save  karna parta ha or phir jab isa chalana ho to phir us function ko simply call kar lo to wo bind hoya wa function chal jata ha....... is lia ya react ma use hotay han  "eventListner" ma... ta kaya tab chalay jab event click ho
function adf() {
    console.log(this);
}
let obj = { age:   46 } 
let bindedfnc = adf.bind(obj) //is sab ko hum ak function ma save kar latay han
bindedfnc(); // jab run karna ho to is tarakay sa run kar saktay han


//......................................................

// pure and impure function

/////pure function:
//       ak asa function jo har bar same input ka lia same answer day or us ka global variable ki value change na karay
//e.g
function abcd(a, b) {
    return a * b;
   }     
let ans1 = abcd(1, 3);
let ans2 = abcd(1, 3);
// this is a pure function q ka is ma same input par har bar same output a raha ha or is ma koi global variable ki vale bhi change nahi ki gai...

/////impure function:
//         ya ulat ha pure function ka ...matlab is ma same input par har bar different output ata ha ya phir is ma global variable ki value bhi change ho to wo impure function ha ...... ma ap ko do example dati hon :

//e.g-1: (is ma same input par har bar different output a raha ha ):

function abcd(b) {
    return Math.random* b;
   }     
let ans1 = abcd(3);
let ans2 = abcd(3);

//e.g-2: (is ma global variable ki value change ho rahi ha ):
let bd = 24;
function abcd(a, b) {
    bd = 25;
    return a * b;
   }     
let ans1 = abcd(1, 3);
let ans2 = abcd(1, 3);