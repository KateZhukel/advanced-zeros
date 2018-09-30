module.exports = function getZerosCount(number, base) {
    let res = 0;
    base = getMaxSimpleDivision(base);
    while(number > 0) {
        number = div(number, base);
        res += number;
    }
    return res;
};

function div(x, y){
    return (x - x % y) / y;
}

function getMaxSimpleDivision(number){
    let max;
    let division = 2;
    while(number !== 1){
        if(number % division !== 0){
            division++;
        } else{
            number = div(number,division);
            max = division;
        }
    }
    return max;
}
