
const add = (numbers) => {
    if(numbers === ""){
        return 0;
    }
    let doMult = false;
    let delimiter = ","; // initally seperated by , 
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex)); // setting delimiter based on given delimiter
        console.log(delimiter)
        if(delimiter == "/-/"){
            doMult=true;
        }
        console.log(delimiter)
        numbers = numbers.substring(delimiterEndIndex + 1);
    } else {
        numbers = numbers.replace(/[\n,]/g, ',');
    }
    console.log(numbers)
    const tokenizedNums = numbers.split(delimiter).map(Number);
    let sum = 0;
    let mult = 1;
    console.log(tokenizedNums)
    const negativeNumberList = []
    tokenizedNums.forEach(element => {
        if(element<0){
            negativeNumberList.push(element)
        }else if(doMult){
            mult *= element;
        }else{
            sum += element;
        }
    });
    if(negativeNumberList.length>0){
        let errorMessage = `negative numbers not allowed: ${negativeNumberList.join(',')}`;
        throw new Error(errorMessage);
    }
    if(doMult){
        return mult
    }
    return sum;
}

module.exports = {
 add
}