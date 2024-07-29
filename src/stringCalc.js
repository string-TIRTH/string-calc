
const add = (numbers) => {
    if(numbers === ""){
        return 0;
    }
    let delimiter = ","; // initally seperated by , 
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex)); // setting delimiter based on given delimiter
        console.log(delimiter)
        numbers = numbers.substring(delimiterEndIndex + 1);
      } else {
        numbers = numbers.replace(/[\n,]/g, ',');
      }
    console.log(numbers)
    const tokenizedNums = numbers.split(delimiter).map(Number);
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