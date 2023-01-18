const removeFromArray = function(inputArray, ...removeItems) {

    for(let i = 0; i<(removeItems.length); i++){

        itemIndex = inputArray.indexOf(removeItems[i]);

        if (itemIndex > -1){
            inputArray.splice(itemIndex,1);
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
