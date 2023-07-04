//1. Write a JavaScript program to display "Hello, World!" on the console

console.log("Hello,World!");

// 2.Write a JavaScript program to add two numbers and display the result.

let a = 15;
let b = 21;
console.log(a+b);


// 3. Write a JavaScript program to find the maximum of two numbers.

var A = 100;
var B = 90;
if(A > B){
    console.log(" A is greater then B");
}else{
    console.log("B is greater then A");
};

// 4. Write a JavaScript program to check if a number is even or odd.


let num = 15441567;
if(num % 2 ===0){
    console.log("Number is Even");
}else{
    console.log("Number is Odd");
};

// 5. Write a JavaScript program to find the factorial of a number.
function factorial(n){
    if(n===0){
        return 1;
    }
    else {
        return factorial(n-1)*n;
    }
};
console.log(factorial(5));

// 6. Write a JavaScript program to check if a string is a palindrome.

let str = "pop";
let reverseStr = str.split("").reverse("").join("");
if(str === reverseStr){
    console.log("String is Palindrome")
}else{
    console.log("String is not Palindrome")
};

// 7.Write a JavaScript program to find the length of a string.

var string = "Raining Days"
console.log(string.length);


// 8. Write a JavaScript program to reverse a string.

let text = "I am learner";
let reverseText = text.split("").reverse("").join("");
console.log(reverseText);


// 9. Write a JavaScript program to convert Celsius to Fahrenheit.

let cel = 45;
let fah = (cel *9/5) + 32;
console.log(fah)


// 10. Write a JavaScript program to generate a random number between 1 and 10.

function generateRandomNumber(min, max) {
    return Math.floor(Math.random()*10);
  }
   
  console.log(generateRandomNumber(1,10));

//  11. Write a JavaScript program to check if a given number is prime.

function primeNum(n){
    if(n === 1){
        return "Number is niether prime nor composite";
    }
    else if( n === 2){
       return "Number is prime"
    }else{
        for (let i = 2; i <  n; i++){
            if(n % i === 0) {
                return "Number is  not Prime"
            }
        }
        return "prime number"
    }
};
console.log (primeNum(16));


// 12. Write a JavaScript program to find the sum of all elements in an array.

let arr =[1,6,5,7,8,3,2,9,4]
let sumArr = arr.reduce((p,c) =>{
    return p + c
},0);
console.log(sumArr);

// 13. Write a JavaScript program to remove duplicate elements from an array.
let dupplicateArr = [1,5,7,9,5,6,2,1];
function removeDupplicate (dupplicateArr){
    return [...new Set(dupplicateArr)];
}
console.log(removeDupplicate(dupplicateArr));


// 14. Write a JavaScript program to sort an array in ascending order.

let testArr = [5,9,7,8,6,4,1,2,3];
let sortedArr = testArr.sort((p,c) =>{
  if (p > c){
    return 1;
  }else {
    return -1
  }
});
console.log(sortedArr);
// 15. Write a JavaScript program to count the occurrence of a specific element in an array.
 const occurrenceArr = [1,5,4,6,4,6,1,6,7,9,7,1,4,6];
 const count =[];
 occurrenceArr.forEach(element =>{
    if(count[element]){
        count[element]+= 1;
    }else{
        count[element]=1;
    }
 })
 console.log(count[1],count[5],count[4],count[6],count[7],count[9]);



// 16. Write a JavaScript program to check if a given string contains a specific substring.

let statement = "i am a learner";
let word = statement.includes("learner");
console.log(word);

// 17. Write a JavaScript program to find the largest element in an array.
const Array = [15,68,45,35,91,78,]
const firstlargeArray = Array.sort((a,b) => {
    if(a < b){
        return 1
    }else {
        return -1
    }
})
console.log(firstlargeArray[0])


// 18. Write a JavaScript program to find the second largest element in an array.

const creatArray = [15,68,45,35,91,78,]
const secondlargeArray = creatArray.sort((a,b) => {
    if(a < b){
        return 1
    }else {
        return -1
    }
})
console.log(secondlargeArray[1])


// 19. Write a JavaScript program to check if two arrays are equal.
const array1 = [7,6,8,1,9];
const array2 = [7,6,8,1];
if(array1.length === array2.length){
  console.log("Both array are equal")
}else{
    console.log("Both array are not equal")
}


// 20. Write a JavaScript program to find the average of all elements in an array

let newArr = [1,2,3,4,5]

let avgNewArr = newArr.reduce((p,c) => {
     return p + c / newArr.length
},0)

console.log(avgNewArr);

