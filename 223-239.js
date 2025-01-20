"use strict"
// глава 223

function func() {
	return '!';
}

console.log(func);

// глава 224

function func224_1() {
    let a224;
	return a224 = 'bim-bim';
}
console.log(func224_1());


function func224_2(a, b) {
    let c;
    return c = a + b
}
console.log(func224_2(1, 3));


console.log(func224_2);


function func224_4() {
    console.log("код не копруй -_-");
}
func224_4();
func224_4 = 123;
console.log(func224_4);

// глава 225

function func225_1() {
    let a;
    return a = 3;
}
console.log(func225_1());


function func225_2() {
    console.log("я же попросил не копировать");
}
let test225 = func225_2;
console.log(test225);


function func225_3_1() {
    return 10;
}
function func225_3_2() {
    return 20;
}
let sum_funk = func225_3_1() + func225_3_2()
console.log(sum_funk);

// глава 226

// let funk226_1 = function () {
//     return 1;
// }
// console.log(funk226_1());

// let funk226_2 = function () {
//     return 2;
// }
// console.log(funk226_2());

// let sum_funk226 = funk226_1() + funk226_2(); 
// alert(sum_funk226);

// // глава 228

// №1⊗jsPmFTDT

// Определите, является ли представленная функция Function Declaration или Function Expression:

// function func() {
// 	console.log('!');
// }

// Ответ: Function Declaration

// №2⊗jsPmFTDT

// Определите, является ли представленная функция Function Declaration или Function Expression:

// let func = function() {
// 	console.log('!');
// }

// Ответ: Function Expression

// глава 229
funk_dec229();
function funk_dec229() {
    console.log("229 dec");
}

// funk_exp229(); ошибка, ввиду того,что функция через переменную еще не обьявлена
let funk_exp229 = function() {
    console.log("229 exp");
}
// глава 230

let func1 = function() {console.log('!')};
let func2 = function() {
	console.log('!')
};
function func3() {
	console.log('!')
}

// глава 231

// №1⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// function func() {
// 	console.log('!');
// }

// Ответ: Function Declaration

// №2⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// let func = function() {
// 	console.log('!');
// }

// Ответ: Function Expression

// №3⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// +function() {
// 	console.log('!');
// }

// Ответ: Function Expression

// №4⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// !function func() {
// 	console.log('!');
// }

// Ответ: Function Expression

// №5⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// -function func() {
// 	console.log('!');
// }

// Ответ: Function Expression

// №6⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// 1 + function func() {
// 	console.log('!');
// }

// Ответ: Function Expression

// №7⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// (function func() {
// 	console.log('!');
// })

// Ответ: Function Expression

// №8⊗jsPmFTFENIn

// Определите, является ли представленная функция Function Declaration или Function Expression:

// console.log(
// 	function() {
// 		console.log('!');
// 	}
// );

// Ответ: Function Expression

// глава 232