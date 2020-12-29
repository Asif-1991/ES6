// Falsy
//=============================
// false       || true
// 0           || " "
// ""          || '0'
// undefined   || []
// null        || {}
// Nan         || 42
// ``          || "false"
// document.all|| new Date()
// on: Biglnt  || -42
// -0          ||  12n 
//             || infinity
//             ||-infinity
//             || 3.14
//             ||-3.14




const name = "ac";

if(name.length > 5){
    console.log("condition is true")
}else{
    console.log("condition is false");
};


// undefined vs null 
//=============================

let working;
function add (num1, num2){
    console.log(num1 + num2);
}
const result = add(13, 10)
console.log(result);

// Double == vs triple ====
//=================================

const first = 2;
const second = "2";
if(first === second){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

// Map, filter, find
//=============================

const numbers = [1, 3, 4, 5, 7, 8, 9]

const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

function square (element){ 
    return element * element;
}
const result = numbers.map(function(element){
    return element * element;
});

const result = numbers.map(x => x * x)
console.log(result);

const biggerFirst = numbers.filter(x => x < 5)
console.log(biggerFirst);    

const isThere = numbers.find(x => x > 5)
console.log(isThere);    

// apply map, filter, find on array of object 
//=============================================

const students = [
    {id: 20, name: "jim kwik"},
    {id: 21, name: "sandeep"},
    {id: 45, name: "samiha"},
    {id: 51, name: "kumar sanu"}
];
const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
   console.log(ids);

const bigger = students.filter(s => s.id > 40);
console.log(bigger);

const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);
