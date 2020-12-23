    // Let const

    const country = "Bangladesh";
    console.log(country);

    // let PM = " Shiekh Mujib";
    // PM = "Shiekh Hasina";
    // console.log(PM);

    // let sum = 0;
    // for (let i = 0; i < 10; i++){
    //     sum = sum + i;
    // } 
    // console.log(i);

    // default 
    //===========================

    function add(num1, num2 = 20){
        // default 1st way
        // if(num2 == undefined){
        //     num2 = 0;
        // }
        // default 2nd way
        // num2 = num2 || 20;
        return num1 + num2;
    }
    const total = add(15, 10);
    console.log(total);


    // template string
    //==================
    const firstName = "Asif";
    const lastName = "Ul Hoque";
    const fullName = firstName + " " + lastName + " trying to learn programming";
    const fullName2 = `${firstName} ${lastName} trying to finish this course`
    // console.log(fullName);
    console.log(fullName2);

    const multiLine = "I am Serious\n"
    +"NOW I am very Serious\n"
    +"To Finish this course";

    const multiLine2 = `
    I am ready to
    finish daily task
    `

    console.log(multiLine2);


    // arrow function
    //==================
    // function doubleIt(num){
    //     return num * 2;
    // }
    // const result = doubleIt(5);
    // console.log(result);

    // const doubleIt = function myFun(num){
    //     return num * 2;
    // }

    const doubleIt = num => num * 2
    const add2 = (x, y) => x + y;
    const give5 = () => 5;
    const doMath = (x, y) => {
        const sum = x + y;
        const diff = x - y;
        const result = sum * diff;
        return result;
    }

    const result = doubleIt(55);
    const result2 = add2(55, 56);
    const result3 = give5();
    const result4 = doMath(14, 14);
    
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);

    // spread operator
    //===================

    const ages = [25, 28, 30, 31, 29];
    const ages2 = [ 34, 32];
    const ages3 = [ 40, 42];
    const allAges = ages.concat(ages2).concat(ages3);
    const allAges2 = [...ages, ...ages2, 5, ...ages3];
    // console.log(allAges2);

    const business = 650;
    const minister = 450;
    const shochib = 250;
    const takaPoisa = [650, 450, 250, 890, 999];
    // const maximum = Math.max(business, minister, shochib);
    const maximum = Math.max(...takaPoisa);
    console.log(maximum);

    // Class, constructor, create object from class
    //====================================================

    class Student{
        constructor (sId, sName){
            this.id = sId;
            this.name = sName;
            this.school = "Kolimunnesa School"
        }
    }
    const student1 = new Student (12, "Shuvo");
    const student2 = new Student (13, "Sifali");
    const student3 = new Student (14, "Bappi");
    console.log(student2);

    // Inheritance, extends class, super, class method
    //=========================================================
    
    class Parent{
        constructor(){
            this.fatherName = "Schwerznegger"
        }
        getFullName(){
            return this.name +" "+this.fatherName;
        }
    }

    class Child extends Parent{
        constructor(name){
            super();
            this.name = name;       
        }
    }

    const baby = new Child("Arnold");
    const baby2 = new Child("Tom");
    console.log(baby.getFullName());
    console.log(baby2.getFullName());

    // destructure, Object, array, destructure complex object
    //===========================================================

    const person = {name: 'Tanvir', age: 28, Job: 'CGS', gfName: 'Boudi', address: 'Kotuwali', Phone: '01676252882', Friends: ["Asif", "Mash", "Munna", "Taisir"]}

    const {Phone, gfName, Friends} = person;
    //========================================
    const complexObject = {
        name: 'struggle',
        info: {
            address: 'anyWhere',
            leader: 'anyOne'
        }
    }

    const {leader} = complexObject.info;
    console.log(leader);

    // const Phone = person.Phone;
    // const gfName = person.gfName;
    // const Friends = person.Friends;

    // console.log(gfName, Phone);
    // console.log(Friends, Phone);


    const friends = ["jim","Asif", "Mash", "Munna", "Taisir"];
    const [chutoFriend, ...olderFriend] = friends;
    console.log(...olderFriend);
    