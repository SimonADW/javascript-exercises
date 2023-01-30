const repeatString = function(blabla, num) {
    if (num < 0) return 'ERROR';
    let string = ''    ;
    for(i = 0; i < num; i++ ) {
      string += blabla;
    };
    return string;
};



// Do not edit below this line
module.exports = repeatString;
