// function math (number_one, number_two) {
//     let number_three = number_one + number_two;
//     return number_three *5;
// }
// let result = math(2,3);
// console.log(result);




function word_length(words) {
    if (words.length > 10 ) {
        return true;
    } else if (words.length <= 10) {
        return false;
    } else {
        console.log(`we have an error`);
    }
}
word_length(`loremtrjg8`);
