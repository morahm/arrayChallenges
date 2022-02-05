
// 1. Always Hungry


function alwaysHungry(arr) {
    var count = 0;
    for(var i = 0; i <= arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0) console.log("I'm hungry");
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i <= arr.length; i++) {
        if(arr[i] > cutoff) filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average


function betterThanAverage(arr) {
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    var count = 0
    
    for(var i = 0; i <= arr.length; i++) {
        if(arr[i] > (sum / arr.length)) count++;
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// 4. Array Reverse

var tempArr = [];
var count = 0;

function reverse(arr) {
    for(var i = (arr.length - 1); i >= 0; i--) {
        tempArr.push(arr[i]);
        count++;
    }
    arr = tempArr;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(var i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


