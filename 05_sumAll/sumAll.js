const sumAll = function(a,b) {

    if (!isValid(a) || !isValid(b)){
        return 'ERROR'
    }

    let sum = 0;
    for(let i = Math.min(a,b); i<=Math.max(a,b); i++){
        sum += i;
    }

    return sum;
};

function isValid(number){
    
    if (typeof number === 'number' && ((number%1) == 0) && (number >= 0)) {
        return true;
    }

    return false;
}
// Do not edit below this line
module.exports = sumAll;
