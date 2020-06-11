//Bussiness Logic
//function romanize (num) {
//  if (isNaN(num))
//  return NaN;
//UI Logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    const acceptable = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const number = $("input#numberSeq").val();
    //let numberArray = number.split();
    // const result = translateToRoman(number);
    if(!number.includes(acceptable)){
      alert("unacceptable")
    } else {
      const numeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      for (let index = 0; index <= numeral.length-1; index++) {
        while numeral[index] <= number) {
          roman += romanNumeral[index];
          numeral -= arabic[index];
        }
    }
    return roman;

    $("#output").show();
    $("#result").text(number);
  });
});


// function acceptChar(str) {
// 	let acceptable = ['a', 'b', 'c'];
//   let newStr = "";

//   if (str !== acceptable.indexOf(str[0]) >-1) {
//       alert("unacceptable");

// 	}

// }


// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let newStr = "";

// if (vowels.indexOf(str[0]) > -1) {
//     newStr = str + "way";
//     return newStr;

// } else {
//   let firstMatch = str.match(/[aeiou]/g) || 0;
//   let vowel = str.indexOf(firstMatch[0]);
//   newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
//   return newStr;
// }


//const value = {"str" : 10 }

// const translateToRoman = function(number) {
//   const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const romanNumeral = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I"
//   ];


// for (let index = 0; index <= number.length-1; index++) {
  
//   
// 