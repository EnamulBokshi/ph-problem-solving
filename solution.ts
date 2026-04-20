/**
 * Problem 1: Reverse a String
 * 
 */

function reverseString(str:string) {
    const len = str.length;
    let newStr = '';
    for(let i = len-1; i>=0; i--){
        newStr = newStr + str[i];
    }
return newStr;
}

/**
 * Problem 2: FizzBuzz
 * 
 */

function oneToN(n:number) {
    for(let i =1; i<=n; i++) {
        let str = '';
        if(i%3==0){
            str=str+'Fizz'
        }
        if(i%5 == 0){
            str = str+"Buzz"
        }
        console.log(i," : ", str);
        str = ''
    }
}
// oneToN(25)

/**
 * Problem 3:  Find the Largest Number in an Array
 * 
 */
const largetNumber = (arr:number[]) => {
    arr.sort((a,b)=> a-b);
    console.log(arr[arr.length-1])
}

// largetNumber([-100,-80,-10])

/**
 * Problem 4: Palindrome check
 * 
 */


const checkPalindrome = (str: string) => {
    let refinedStr = '';
    const alphaNumericStr = 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M q w e r t y u i o p a s d f g h j k l z x c v b n m 1 2 3 4 5 6 7 8 9 0';
    const alphaNumericList = alphaNumericStr.split(' ');
    for(let s of str){
        if(alphaNumericList.includes(s)){
            refinedStr=refinedStr+s
        }
    }
    const revedStr = reverseString(refinedStr);
    
    console.log("Given string: ", str);
    console.log("Refined string: ", refinedStr);
    console.log("Reversed string: ", revedStr);
    let isPalindrome = false;
    if(revedStr === refinedStr) {
        isPalindrome = true;
    }
    console.log("Is Palindrome: ", isPalindrome)

}
checkPalindrome("aba!!")

/**
 * Problem:5 Array Summation
 */
function arraySum(arr:number[]) {
    const sum = arr.reduce((acc, current)=> acc+current , 0);
    console.log(sum)
}
// arraySum([1,2,3,4,5,6,7,8,9,10]);//55

/**
 * Problem - 6: Vowels count 
 */

const countVowels = (str:string) => {
    let totalVowels = 0;
    const vowels = ['A','E','I','O','U','a','e','i','o','u']
    for(const s of str){
        if(vowels.includes(s)){
            totalVowels = totalVowels+1;
        }
    }
    console.log(totalVowels);
} 

// countVowels("AEIOUa")