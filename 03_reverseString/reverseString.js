

    function reverseString(word) {
    arrayTemp = word.split('');
    arrayReversed = arrayTemp.reverse();
    wordReversed = arrayReversed.join("");

    return wordReversed;
    
};

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;
