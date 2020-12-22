// //======================================
//         //Variables

var tupi = 50;
console.log(typeof tupi);

var soundBox = 300;
console.log(soundBox);

var keyboard = 500;
console.log(keyboard)

var seenAfter = 21;
console.log(seenAfter);



var name = "Asiful Hoque";
console.log(name);

var mentor = "Jhankar Mahbub";
console.log(mentor);

var city = "Chittagong"
console.log(city)

var isHot = true;
var isRich = false;
console.log(isHot);

var secondHandKeyboard = true;
var newKeyboard = false;
console.log(secondHandKeyboard);

var promise = "i will work hard again";
console.log(promise.split());

var number1 = 25;
var number2 = '15.5';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = 25;
var number2 = '15.5';
number2 = parseInt(number2);
console.log(number1 + number2);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(1)
console.log(total);

var price1 = 600;
var price2 = 35;
var total = price2 * price1;
console.log(total);

var firstName = 'Asiful';
var lastName = 'Hoque';
var result = firstName + ' ' + lastName;
console.log(result);

var number = 5.999999;
var result = Math.round(number);
var result = Math.ceil(number);
var result = Math.floor(number);
console.log(result);

var number = Math.random() * 9999;
var result = Math.round(number);
console.log(result);

// //=======================================================
//                        // Conditions

var biscuitsPrice = 8
if (biscuitsPrice != 8) {
    console.log("i will eat the biscuits")
}
else{
    console.log("khali cha is better")
}

//=================================
var jobPaiso = true;
var savingAmount = 50000;

if (jobPaiso == true && savingAmount > 200000) {
    console.log("cholo tumer patri khuji")
}
else if (jobPaiso == true) {
    console.log("Let's wait for few days")
}
else{
    console.log("tur kopale biya nai")
}

var date = new Date('1971-12-16');
var result = Math.round(number);
console.log(date);

// //=======================================================
//                 //Array

var friendsAge = [15, 14, 52, 42];

var catAge = friendsAge[2];

friendsAge [1] = 21;

var position = friendsAge.indexOf(42);

console.log(friendsAge);

friendsAge.push(15);
friendsAge.push(19);
console.log(friendsAge);

friendsAge.pop();
console.log(friendsAge);

friendsAge.unshift(11,14)
console.log(friendsAge);

friendsAge.pop();
console.log(friendsAge);

friendsAge.pop();
console.log(friendsAge);

var position = friendsAge.indexOf(52);
console.log(position);

// String Array

var teaLine = ["kalam", "balam", "jalam"]
teaLine.unshift('member');
console.log(teaLine);

var teaLine = ['salam', 'balam', 'kalam', 'jalam', 'talam', 'palam']
var cutting = teaLine.slice(3,6);
//console.log(cutting);
console.log(teaLine);

// //=======================================================
//                 //while loop

// var num = 10;
// while (num <= 15) {
//     console.log(num);
//     num++;
// }  

//=======================================================
                //for loop
// for (var i = 0; i <= 10; i++) {
//     console.log(i);    
// }

// var nums = [34, 38, 40, 44, 50, 55, 60];

// for (var i = 0; i < nums.length; i++) {
//         var element = nums[i];
//         console.log(element);    
//     }

var friendsName = ['Asif', 'mash', 'tanvir', 'munna']
for (var i = 0; i <friendsName.length; i++) {
        var element = friendsName[i];
        console.log(element);

}

// //=======================================================
//                 //switch

num = 1000
switch (num) {
        case 1000:
                console.log('I am 100% hard work person');
                break;
        case 100:
                console.log('I am 100')
                break;
        case 20:
        case 10:
                console.log('I am either 10 or 20')
                break;
        default:
                console.log("I don't know who you are")
}

// //=======================================================
//                // Function

function sayLearning(){
        console.log('If knowledge is power');
        console.log("then learning is superPower");
}
sayLearning();
// var date = 24;
// var place = "malaysia";
// sayLearning();
// var tedTalk = "Ted Studio";
 sayLearning();

function doubleIt (num){
        var result = num * 2;
        return result;      
}
var first = doubleIt(25);
var second = doubleIt(50);
var total = first + second;
console.log(total)

function add (num1, num2){
        var result = num1 + num2;
        return result;
}
var sum = add (15, 17);
console.log(sum);        

// //=======================================================
//                // Object

var student = {id:121, phone: 1745, name: "Abir" };
var student2 = {id:132, phone: 543, name: "Mahi" };

var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[ phonePropName];

//update number
student2.phone = 543;
student2["phone"] = 667744;
student2[phonePropName] = 9997777777765;
student2.married = "yes";

console.log(phoneNo1);
console.log(student);
console.log(student2);



