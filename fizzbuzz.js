//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {

    let printable = "";

    if (x % 3 === 0 && x % 5 !=0){
        return printable += 'fizz';
    }

    else if (x % 5 === 0 && x % 3 != 0){
        return printable += 'buzz';
    }

    else if (x % 3 === 0 && x % 5 === 0){
        return printable += 'fizzbuzz';
    }

    else {
        return x;
    }

};

module.exports = { fizzbuzz: fizzbuzz };