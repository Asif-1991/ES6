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
