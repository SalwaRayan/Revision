// 01 - Alphabet

function sortLetters(string){
  var letters = string.split("")
  var orderedWord = letters.sort()
  orderedWord = orderedWord.join("")
  console.log(orderedWord)
}

sortLetters("konexio")

// 02 - XOXO

function countEach(string){
  var letterX = "x"
  var letterO = "o"
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']
  var letterCountX = 0 
  var letterCountO = 0
  var count = 0
  for (var i = 0; i < string.length; i++){
    if (string.charAt(i) === letterX) {
      letterCountX = letterCountX + 1
    }
    if (string.charAt(i) === letterO) {
      letterCountO = letterCountO + 1
    }
    for (var j = 0; j < letters.length; j++){
      if (string.charAt(i) === letters[j]){
        count += 1
      }
    }
    if (letterCountX === letterCountO && count === 0){
      return `${true}: ${letterCountX} = ${letterCountO}`
    } else {
      return false
    } 
  }
}

var result = countEach("xoxooxoxx")
console.log(result)

// 03 - Palindrome

function checkPal(str){
  var word = str
  var reversedWord = ""
  for (var i = word.length - 1; i >= 0; i--){
    reversedWord = reversedWord + word[i]
  }
  if (word === reversedWord){
    return `Palindrome! ${str} is the same as ${reversedWord}`
  } else {
    return `Nope: ${str} is not the same as ${reversedWord}`
  }
}

var result1 = checkPal("racecar")
var result2 = checkPal("laptop")
var result3 = checkPal("kayak")

console.log(result1)
console.log(result2)
console.log(result3)

// 04 - Swap

function swap(str) {
  var reverseCase = ""
  for (var i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      reverseCase = reverseCase + str[i].toLowerCase()
    } else {
      reverseCase = reverseCase + str[i].toUpperCase()
    }
  }
  // reverseCase = reverseCase.join("")
  return reverseCase
}
var reverseCase = swap("Il Blu Dipinto di Blu")
console.log(reverseCase)

// Bonus

// function makeItSpongeBob(str) {
//   var spongebob = ""
//   for (var i = 0; i < str.length; i++){
//     if (i % 2 === 0){
//       spongebob += str[i].toUpperCase()
//     } else {
//       spongebob += str[i].toLowerCase()
//     }
//   }
//   return spongebob
// }
// var reverseCase = makeItSpongeBob("Javascript is easy")
// console.log(reverseCase)

function makeItSpongeBob(str){
  var spongebob = str.split(" ")
  for (var i = 0; i < str[i].length; i++)
  console.log("spongebob")
}
// var changed = makeItSpongeBob("Javascript is easy")

// Bonus II



// Bonus III

