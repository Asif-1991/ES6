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

// let working;
// function add (num1, num2){
//     console.log(num1 + num2);
// }
// const resultFirst = add(13, 10)
// console.log(resultFirst);

// Double == vs triple ====
//=================================

// const first = 2;
// const second = "2";
// if(first === second){
//     console.log("condition is true");
// }else{
//     console.log("condition is false");
// }

// Map, filter, find
//=============================

// const numbers = [1, 3, 4, 5, 7, 8, 9]

// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const resultSecond = element * element;
//     output.push(resultSecond);
// }

// function square (element){ 
//     return element * element;
// }
// const resultThird = numbers.map(function(element){
//     return element * element;
// });

// const resultThird = numbers.map(x => x * x)
// console.log(resultThird);

// const biggerFirst = numbers.filter(x => x < 5)
// console.log(biggerFirst);    

// const isThere = numbers.find(x => x > 5)
// console.log(isThere);    

// apply map, filter, find on array of object 
//=============================================

// const students = [
//     {id: 20, name: "jim kwik"},
//     {id: 21, name: "sandeep"},
//     {id: 45, name: "samiha"},
//     {id: 51, name: "kumar sanu"}
// ];
// const names = students.map(s => s.name);
// console.log(names);

// const ids = students.map(s => s.id);
//    console.log(ids);

// const bigger = students.filter(s => s.id > 40);
// console.log(bigger);

// const biggerOne = students.find(s => s.id > 40);
// console.log(biggerOne);

// Scope, block scope, global scope
//====================================

let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    // console.log(bonus);
    if(result > 9){
         var mood = "happy";
         mood = "fishy";
         mood = "funky";
         mood = "cranky"

    }
     console.log(mood);

    let day = "friday";
    console.log(day);
    
    return result;
}
const output = sum(3, 7);
console.log(bonus);
console.log(output);

// closure 
//=============================
function stopWatch(){ 
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// const clock2 = stopWatch();
// console.log(clock2());
// console.log(clock2());
// console.log(clock1());
// console.log(clock2());
// console.log(clock2());
// console.log(clock2());
// console.log(clock1());
// console.log(clock2());
// console.log(clock1());
// console.log(clock1());
// console.log(clock2());
// console.log(clock2());

// slice, splice
//=============================
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15]

const part = nums.slice(2, 5);
console.log(part);

const removed = nums.splice(4, 6, 21, 22,);
console.log(removed);
console.log(nums);

const together = nums.join(",|");
console.log(together);

// break, continue
//=============================
const numbers = [1, -2, 3, 4, -5, 6, -7];
for(let i = 0; i < numbers.length; i++){
    
    if(numbers[i] > 3){
        break;
    };
    // console.log(numbers[i]);
}
for(let i = 0; i < numbers.length; i++){

    if(numbers[i] < 0){
        continue;
    }
    console.log(numbers[i]);
}
