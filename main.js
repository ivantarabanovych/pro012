function multiplyBy(multiply){
    return function(number){
       return multiply * number;
    };
}

const multiplyBy34 = multiplyBy(34);
const multiplyBy15 = multiplyBy(15);
const multiplyBy14 = multiplyBy(14);

console.log(multiplyBy34(21));
console.log(multiplyBy15(15));
console.log(multiplyBy14(12));

