// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = () => 5;
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const result1 = doubleIt(50);
const result2 = add (7,5);
const result3 = give5 ();
const result4 = doMath(9,6);
console.log(result1, result2, result3, result4);
