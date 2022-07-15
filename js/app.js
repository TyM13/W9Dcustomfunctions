function math (number_one, number_two) {     //function, name of function,(paramaters, arguements)
    let number_three = number_one + number_two;      // creater variable called number_three that stores num1+2 added together
    return number_three *5;   // returns number and multiplies it by 5 ends function
}
let result = math(2,3);      // new variable called result, same info as math. calls name of function with arguement 3 different times
console.log(result);

result = math(2,6);
console.log(result);

result = math(4,6);
console.log(result);




function word_length(words) {     //function, name of function,(paramaters, arguements)
    if (words.length > 10 ) {    // if statment tht if wordlength is less greater than 10 return true
        return true;
    } else if (words.length <= 10) {     // else statment tht if wordlength is less greater than 10 return true
        return false;
    } else {
        console.log(`we have an error`);
    }
}
word_length(`loremtrjg8`);       //calls name of function with arguement 3 different times
word_length(`loremtrjgererer`);
word_length(`lor`);









function starts(array_of_strings) {     //function, name of function,(paramaters, arguements)
    for (let counter = 0; counter < array_of_strings.length; counter++) {       //for loop, counter sets index to 0, if counter is less than array of strings add 1 to index
        if (array_of_strings[counter].startsWith(`ph`)) {       // accesses array with the number that counter is on and checks to see if it starts with ph
            console.log(array_of_strings[counter]);
            return (array_of_strings[counter]);     // ends the loop when it finds index with ph
        }else{
            console.log(`error`);
        }
        
    }

}

starts([`pands`, `tretrer`, `phantasmil`, `low`]);      //calls name of function with arguement 3 different times

starts([`pants`, `phantasic`,  `treats`, `lowered`]);

starts([`pan`, `tret`, `phast`, `lower`]);