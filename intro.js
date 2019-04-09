function myFunctionTest(expected, function2test) {
    var result=function2test();
    if(Array.isArray(expected)){
        expected=expected.join('');
    }
    if(Array.isArray(result)){
        result=result.join('');
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }

}

function max(x, y) {
    if(x<y){return y;}
    else{return x;}
}
console.log("Expected output of max(40,60) is 60  " + myFunctionTest(60, function () {
    return max(40, 60);
}));

function maxOfThree(x, y, z) {
    return max(max(x,y),z);
}
console.log("Expected output of maxOfThree(40,60,70) is 70  " + myFunctionTest(70, function () {
    return maxOfThree(40, 60,70);
}));

function isVowel(c){
    if(c.length==1){
        var temp=c.toLowerCase();
        if(temp==='a'||temp==='e'||temp==='i'||temp==='o'||temp==='u'){return true;}
        else{return false;}
    }else{return false;}
}

console.log("Expected output of isVowel(B) is false  " + myFunctionTest(false, function () {
    return isVowel('B');
}));
console.log("Expected output of isVowel(A) is true  " + myFunctionTest(true, function () {
    return isVowel('A');
}));

function sum(arr) {
    var sum=0;
    for(var i=0;i<arr.length;i++){sum+=arr[i];}
    return sum;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

function multiply(arr) {
    var prod=1;
    for(var i=0;i<arr.length;i++){prod*=arr[i];}
    return prod;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

function reverseString(str){
    var result='';

    for(var i=str.length-1;i>=0;i--){
        result+=str[i];
    }

    return result;
}
console.log("Expected output of reverseString(\"Hello Boy\") is yoB olleH  " + myFunctionTest("yoB olleH", function () {
    return reverseString("Hello Boy");
}));

function findLongestWord(arr) {
    var longestLength=0;
    var longestWord='';
    for(var i=0;i<arr.length;i++){
        if(longestLength<arr[i].length){
            longestLength=arr[i].length;
            longestWord=arr[i];
        }
    }

    return longestWord;
}

console.log("Expected output of findLongestWord([hello,boy,how,are,you]) is hello  " + myFunctionTest("hello", function () {
    return findLongestWord(["hello","boy","how","are","you"]);
}));

function filterLongWords(arr, len) {
    var finalArr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>len){
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

console.log("Expected output of findLongestWord([hello,boy,how,are,you,My Dear]) is [hello,MyDear]  " + myFunctionTest(["hello","MyDear"], function () {
    return filterLongWords(["hello","boy","how","are","you","MyDear"],3);
}));

function mapFunc(elem,i,array){
    return elem*3;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));
function filterFunc(elem,i,array) {
    return elem==3;
}

function reduceFunc(prevValue,elem,i,array) {
    return prevValue*elem;
}
var arr = [1,3,5,3,3];
function a_myMap(arr) {
    var b = arr.map(function(elem, i, array) {
        return elem + 3;
    })
    return b;
}
console.log("Expected output of a_myMap() is [4,6,8,6,6]  " + myFunctionTest([4,6,8,6,6], function () {
    return a_myMap(arr);
}));

function b_myFilter(arr) {
    var c = arr.filter(function(elem, i, array){
        return elem === 3;
    });
    return c;
}
console.log("Expected output of b_myFilter(arr) is [3,3,3] " + myFunctionTest([3,3,3], function () {
    return b_myFilter(arr);
}));

function c_myReduce(arr) {
    var d = arr.reduce(function(prevValue, elem, i, array){
        return prevValue + elem;
    });
    return d;
}
console.log("Expected output of c_myReduce(arr) is 15 " + myFunctionTest(15, function () {
    return c_myReduce(arr);
}));


