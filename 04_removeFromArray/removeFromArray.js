'use strict';

const anArray = [1 ,2 ,3 ,4 ]

function removeFromArray(anArray, toRemove) {
    
    for (let index = anArray.length; index > -1; index--) {
        if (toRemove === anArray[index]) {
            anArray.slice(index);
        }
        console.log(anArray)
    }

    




    console.log(anArray);
    }   
    


removeFromArray([1,2,3,4], 3)


// Do not edit below this line
module.exports = removeFromArray;
