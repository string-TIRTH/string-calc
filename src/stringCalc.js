
const extractDelimiter = (numbers) => {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex)); // setting delimiter based on given delimiter
    return delimiter;
}
const add = (numbers) => {
    if(numbers === ""){ // handling empty string case
        return 0;
    }
    let doMult = false; // flag to determine wheather we have to do sum or mult
    let delimiter = ","; // initally seperated by , 
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = extractDelimiter(numbers) // extracting delimiter from given input string
        if(delimiter == "/-/"){ // - delimiter for doing multiplication 
            doMult=true;
        }
        numbers = numbers.substring(delimiterEndIndex + 1);
    } else {
        numbers = numbers.replace(/[\n,]/g, ',');
    }
    const tokenizedNums = numbers.split(delimiter).map(Number); // tokenizing numbers based on delimiter
    let sum = 0;
    let mult = 1;
    console.log(tokenizedNums)
    const negativeNumberList = []
    tokenizedNums.forEach(element => {
        if(element<0){
            negativeNumberList.push(element) // pushing negative numbers for error message
        }else if(doMult){ // doing multiplication 
            mult *= element;
        }else {           // doing summation  
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