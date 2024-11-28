// word vs keyword
// chacha is a "word" wo lafaz jis ka java script ma koi meaning nahi hota wo word ha
// for is a "keyword" wo lafaz jis ka java script ma koi meaning  hota ha wo keyword ha

// ...................................

// var const let
// code ma koi bhi data store store karna ka lia jo use hota ha usa khatay han "variable"
//Jis ki value badlay wo "variable" or jis ki valua na badlay "constant" ha

// ...................................

// hoisting
// hoisting - variable and functions are hoisted which means there declaration is moved on the top of code
// hoisting ka matlab ha ka variable bananay sa phala hum usa use ka saktay han

// is code ma hoisting ho rahi ha  q ka abhi a ki value initlize nahi hoi or hum usa phala hi print karwa rahay han
let a; //isa declearization khatay han is ki default value undefined hoti ha 
console.log(a); // is ka output undefined aya ga q ka abhi huma is ki value nahi pata is ki value abhi define nahi ha
a = 13; // is ko initialization khatay han

// ...................................

// undefined vs not-defined
//"" undefined " koi error nahi ha ya tab ata ha jab hum na apna variable ko declear kia ho par koi value na di ho or wasa hi print karwa dia ho to undefined value us ka undar default par save ho jati ha ... srif js ma sa hota ha hoising ki wagha sa warna dusri programming languages ma not-defined ka error ata ha
// "not - defined" ak error ha ya tab ata ha ka jab hum us variable ko call kar rahay hon jis ko hum na declear bhi na kia ho initialize to dur ki baat ha

// ...................................

// Types in JS
// primitive and reference
// primitives = numbers , string , null , undefined , boolean
// reference = [] () {}
// asi koi bhi value jisay copy karnay par us ka real copy na ho balka us main value ka referance pass ho jata ha, usa hum referance value kahtay han , aur jisay copy karnay par real copy ho jay wo value primtive type hoti ha ... ya sab react ma kafi kam ata ha
let b = [1, 3, 5, 6]; // b ka pass ha khud ka 1,3,5,6 ka array 
let c = b; // lakin c ka pass ha b ka 1,3,5,6 ka array 
c.pop(); // is hi lia hum na c ma changes kia to canges b ma bhi ho jain ga.
// eg of referance .... mara pass ak khud ki tofi ha or ma na bola ka ya mari wali tofi noor ki bhi tofi ha or samjho ka noor na usa kha lia ... to is thara mari wali tofi bhi khatam ho gai nahi rahi... isi thara aghr hum koi change bhi "c" ma kar rahay han to us ka effect "b" par a raha ha...

// ...................................

// Conditionals -if else elseif
if () {
    
}
else if{

}
else {
    
}

// ...................................

// loops - for while
// print 25 to 50
for (let i = 25; i <= 51 ; i++) {
    console.log(i);
}

// "while" ki brackets ma kuch asa likhna jo future ma ja kar tuta ga matlab false ho ga lakin jab tak wo false nahi hota true rahay ga to wo chalta rahay ga
let a = 11;
while (a < 20) {
    a++;
}

// ...................................

// Functions
// function = code ko naam dana .......function ka matlab ha ka ap kuch code likh kar usa naam da saktay ho or waqat anay par usa us ka naam sa bula ka chala saktay ho

// function teen kam ka lia hotay han
// 1) jab ap apna code foran nahi chalana chatay par future ma chalana chatay ho
// 2) jab ap apna code reuse karna chatay ho
// 3) jab ap apna code har bar different data ka saat chalana chatay ho

// total 6 types sa hum function bana saktay han 3 purani js ma han or 3 new js (ES6) ma han 
function helloBolo() {
    console.log("Hello");
    //function statments 
}
helloBolo();// yahan  hum na sum ka fuction ko call kia ha us ka naam sa to ab wo chalay ga

// parameterized function
function sum(x, y, z) { //"parameters"
    console.log(`sum = ${x + y + z}`);
}
sum(2, 34, 56); //arguments
// "arguments" - real value jo hum datay han function chalatay waqat
// "parameters" - variables jin ma value store hoti ha arguments wali

// ...................................

// arrays
//arrays = group of values
//hum ak variable ma ak value store kar patay han par jab huma ak sa zada values store karna hon tab use hota ha array ka , mtlab array ap ko freedom data ha ak sa zada values store karnay ka
let arr = [12, 435, 65, 43, 6];
arr[0];// array ki valuse ko hum us ka index (0 sa start hota ha jasa is array ki length to 5 ha par is ka index 4 ha ) sa target kartay han

// ...................................

// push ,pop ,shift ,unshift

arr.push(45)// "push" ... use hota ha array ka last ma ak extra member jornay ka lia 
arr.pop(45)// "pop" ... use hota ha array ka last ma sa ak member hatanay ka lia 
arr.unshift(3)// "unshift" ... use hota ha array ka start ma ak member jornay ka lia 
arr.shift(3)// "shift" ... use hota ha array ka start ma sa ak member hatanay ka lia 
arr.splice(1, 1)// "splice" .... ya tab use hota ha jub humay array ki kahain bhi bech sa value hatani ho ... to phalay humusa wo index batatay han jahan sa value hatani ho () jasa samjho mugha 435 ko hatana ha  ) or phir batatay han ka agaya ka kitnay members ko hatana ha ( jasay ka mugha srif srif ak member ko hi hatana ha matlab 435 ko hi hatana ha )

// ...................................

// object
// ak sa zada banday ki baat ki to hoya "array" ,ak hi banday ka baray ma sari baat ki to hoya "object" (jasay hum na us banday ka naam bataya , usa ka skin color , uski language , us ki height kitni ha , wo kahan kam karta ha ... )..... matlab "object" ha ak hi banday ki details ko hold karna, in key value pair

// 1) blank obj
let x = {};

// 2) filled Object
let member1 = {
    name : "Ayesha", //name , age ,email ,giAccount ,contact ya sab  "properties" han 
    age : 19,
    email : "ayeshzahid296@gmail.com",
    gitAccount : "ayeshazahid296",
    contact : 6877688990 ,
    isKiFunctionality : Function(){}, // object ka andar ak asi property jis ki value function ho usa hum "method " boltay han
}
member1.age; // aghr hum na member1 object ki age ki value ko access kana ha

// ...................................

// updating object properties

member1.age = 34; // aghr hum age ki value ko change karna ha to hum phala object ka naam likhayain ga or phir  dot laga kar property likhayan ga jis ki value huma change karni ho gi phir = laga kar jo value change karni thi wo likh dain gain... phir aghr hum objec ka naam likh kar access karain ga to us ki wo wali properity ki value change ho chuki ho gi ....

