


(function() {
    'use strict'

    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }
    var one = function(selector) {
        return document.querySelector(selector)
    }
    var capitalizeAll = function(words) {
        return words.split('').map(capitalizeFirst).join('')
    }

//can set the default arguments in the function, will work in modern browsers, get used to doing it this way.
    var padLeft = function(word, char = '0', length = 2) {

        // char = char || '0'
        // length = length || 2
        //
        // if (char === undefined) {
        //     char = '0'
        // }

        // console.log(dog.padLeft(1, '0', 2)) => 01
        // console.log(dog.padLeft('1', '0', 3)) => 001
        // return

        // return char.repeat(length - word.length) + word  <=this is the more correct answer
        if (word.length < length) {
            word = char.repeat(length - word.length) + word
        }
        return word
    }

    window.dog = {
        capitalizeFirst: capitalizeFirst,
        capitalizeAll: capitalizeAll,
        padLeft: padLeft,
        one: one,

    }

}())







// //named function
// function driveCar() {
//
// }
//
// //annonymous function
// var driveCar = function(callback) {
//     // console.log(callback)
//     // console.log(callback())
//
//     var stuffMessage = callback()
//
//
//     return function() {
//         return 'Hello From Your Car. ' + stuffMessage
//     }
// }
//
// //driveCar('Hello', 'World', 1,2,3,function() {},1, true, 'Ha')
// var greeting = driveCar(function() {
//     return 'Zoom!'
// })
//
// console.log(greeting())
// var msg = greeting()
// document.body.innerHTML = greeting()
//
// function makeFood() {
//
//     var lettuce = true
//
//     function makeTacos() {
//         var cheese = true
//         console.log(lettuce)
//
//     }
//     // console.log(cheese)  does not work because of parent/child relationship
// }
//
// if (true === true) {
//     let city = 'Indianapolis'
// }
//
// // console.log(city) will not work because of let
