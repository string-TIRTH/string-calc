
const add = (numbers) => {
    if(numbers === ""){
        return 0;
    }
    numbers = numbers.replace(/[\n,]/g, ',');
    console.log(numbers)
    const tokenizedNums = numbers.split(",").map(Number);
    let sum = 0;
    console.log(tokenizedNums)
    tokenizedNums.forEach(element => {
        sum += element;
    });
    return sum;
}
module.exports = {
 add
}