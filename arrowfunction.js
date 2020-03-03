const doubleIt = num => num * 2;
const result = doubleIt(10)
console.log(result)

const add = (num1, num2) => num1 + num2;
const result2 = add(10, 20)
console.log(result2)

const give5 = () => 5;
const result3 = add(10, 20)
console.log(result3)

const doMath = (num1, num2) => {
    num1 = num1 + num2;
    num2 = num1 - num2;
    const result = num1 + num2;
    return result;
}

const result4 = doMath(20, 40);
console.log(result4)