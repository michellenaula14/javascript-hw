// FIRST QUESTION //

function reverseThisString(string){
    // converts the string into a array
    var stringSplit = string.split("");
    // reverses the order 
    var reverseArr = stringSplit.reverse();
    // combines all the elements in the array into a string
    var joinArr = reverseArr.join("");
    // reurns the reversed string
    return joinArr;
}

console.log(reverseThisString("hello"));

// SECOND QUESTION //

function switchCase(ch) {
    if (ch == ch.toUpperCase()) return ch.toLowerCase();
    else if (ch == ch.toLowerCase()) return ch.toUpperCase();
    else return ch;
}

function swapCase(string) {
    //stores
    var reverse = "";
    //index ------ loop through the entire string
    for (var i = 0; i < string.length; i++) {
        reverse += switchCase(string[i]);
        // console.log(switchCase(string[i]))
    }
    return reverse;
}
console.log(swapCase("Hello World"))

// // THIRD QUESTION //

function fahrenheitCnvrt(celsius){
    return (celsius-32)*5/9;
  }

function toCelcius(array) {
    return array.map((celsius)=>fahrenheitCnvrt(celsius))
}

console.log(toCelcius([23, 32, 41, 50, 59]));

// FOURTH QUESTION

function passOrFail(array){
    return array.map((num)=> num >= 75? true:false);
}
console.log(passOrFail([20, 30, 50, 80, 90, 100]))

// FIFTH QUESTION

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    return germanNumbers.map((num, i)=>`${cardinalNumbers[i]} is ${num}`);
}
console.log(germanNumbers())

 // SIXTH QUESTION
 function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return numbers.filter((num)=>checkPrime(num))
}
function checkPrime(num){
    var check = true
    if (num == 1) return false
    for (let i = 2; i<= num; i++){
        if (num%i==0 && num != i){
            check = false;        
        }
    }
    return check
}
console.log(returnPrimeNumbers())

//LAST QUESTION

function loop (){
    for (let i = 1; i<=100; i++){
        let store = ""
        if (i % 3 == 0){
            store += "CSC225 RULES"
        }
        if (i % 5 == 0){
            if (store){
                store += " I LOVE JAVASCRIPT"
            }
            else {
                store += "I LOVE JAVASCRIPT"  
            }
        }
        if (store){
            console.log(store)
        }
        else{
            console.log(i)
        }
    }
}
loop()