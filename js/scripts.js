//Bussiness Logic
//function romanize (num) {
//  if (isNaN(num))
//  return NaN;

function translation(num) {
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  const acceptable = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
  if (!num.includes(acceptable)) {
    alert("unacceptable")
} else {

  const romanNum = "";
  for (let index = 0; index <= arabic.length-1; index++) {
    while(arabic[index] <= num) {
    romanNum += romanNumeral;
    num -= arabic[index];
    return romanNum;
  }
}
}
//UI Logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    const number = $("input#numberSeq").val();
    translateToRoman(number);
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

// const translateToRoman = function(num) {
//   const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
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

const romanNum = "";


for (let index = 0; index <= arabic.length-1; index++) {
  while(arabic[index] <= num) {
    romanNum += romanNumeral;
    num -= arabic[index];
  }

  return romanNum;
  
//   
// 