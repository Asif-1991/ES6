//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(126720);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3; 
    var bedCount = bed * 5;
    var totalWood = chair + table + bed;
    return totalWood;
}
var woodResult = woodCalculator(1, 3, 5);
console.log(woodResult);

//brickCalculator
function brickCalculator(floor){
    var brick = 0;
    if (floor <= 10) {
        brick = floor * 15000;
    } else if (floor <= 20) {
        var firstTenFloor = 10 * 15000;
        var remaining = floor - 10;
        var elevenToTwenty = remaining * 12000;
        brick = firstTenFloor + elevenToTwenty;
    } else {
        var firstTenFloor = 10 * 15000;
        var elevenToTwenty = 10 * 12000;
        var remaining = floor - 20;
        var remainingFloor = remaining * 10000;
        brick = firstTenFloor + elevenToTwenty + remainingFloor;
    }
    return brick;
}

var count = brickCalculator(15);
console.log(count);



//tinyFriend
function tinyFriend(name){
    var tinyName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(tinyName.length > currentName.length){
            currentName = tinyName;
        }
    }
    return tinyName;
}
var smallestName = tinyFriend(["mas", "Tar", "Mua", "ship"]);
console.log(smallestName);