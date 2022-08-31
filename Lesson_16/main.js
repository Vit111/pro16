//ZadachaN1
// const regexp = /^[A-Z]/g;
// upperCase = function (word) {
//     const result = word.match(regexp)
//     if(result != null){
//         console.log('Strings first character is uppercase')
//     }
//     else {
//         console.log('Strings first character is not uppercase')
//     }
// }
// upperCase('FFBUJD'); // String's first character is uppercase
// upperCase('abcd'); // String's first character is not uppercase
// upperCase('dbcd'); // String's first character is not uppercase
// upperCase('Fbcd'); // String's first character is not uppercase


// //ZadachaN2
// const regexp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1]).(0[1-9]|1[0-2]).{1,}$/gm;
// isDateString = function(date){
//     const result = date.match(regexp)
//     if( result === null){
//         return false
//     }
//     else { 
//         return result
//     }
// }


// console.log(isDateString("01/01/2015")); 
// console.log(isDateString("31/01/2015")); 
// console.log(isDateString("15/01/2015")); 
// console.log(isDateString("45/01/1996")); 
// console.log(isDateString("25/01/2015")); 



//Zadacha 3
// let final = ''
// const regexp = /^\s|\w{1,}|\s$/gm;
// trim = function (word) {
//     const result = word.match(regexp)
//     if(result[0] === ' '){
//         result.splice(0,1)
//     }
//     if(result[result.length - 1] === ' '){
//         result.splice(-1,1)
//     }
//     console.log(result)
// }

// trim(' ololo '); 
// trim(' abcd '); 
// trim(' abcddasdasd '); 
// trim(' abcd '); 
// trim(' abcd ');

//ZadachaN3/2
// let final = ''
// const regexp = /^\s|\w{1,}|\s$/gm;
// upperCase = function (word) {
//     const result = word.match(regexp)
//     if(result[0] === ' '){
//         delete result[0]
//         final = result.join('')
//     }
//     else if(result.lastIndexOf()===' '){
//         delete result.lastIndexOf()
//         final =  result.join('')
//         }
//     else{
//         final = result.join('')
//     }
//     console.log(final)
// }

// upperCase(' ololo '); 
// upperCase(' abcd '); 
// upperCase(' abcddasdasd ');
// upperCase(' abcd ');
// upperCase(' abcd '); 


// //ZadachaN4
// let final = ''
// const regexp = /[a,e,i,o,u,y]/gm;
// vowelCount = function (word) {
//     console.log(word)
//     const result = word.match(regexp)
//     console.log(result.length)
// }
// vowelCount('The quick brown fox jumps over the lazy dog')
// vowelCount('The quick brown fox jumps over the lazy dog,Did you hear that? Theyve shut down the main reactor. Well be destroyed for sure. \nThis is madness! Were doomed! Therell be no escape for the Princess this time. \n Whats that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? Theyre heading in this direction.')




// //ZadachaN5
// const regexp = /^\d{1,5}[-]\d{1,4}$/gm;
// isUSZipCode = function (number) {
//     const result = number.match(regexp)
//     if(result === null){
//         return false
//     }
//     else{
//         return result
//     }
// }


// console.log(isUSZipCode("03201-2150")); // true
// console.log(isUSZipCode("7892")); // false