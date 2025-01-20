"use strict";
//const arr = ['a', 'b', 'c'];
//arr[1] = '!';
//console.log(arr);
//выводит (а,!,с)

//const arr = ['a', 'b', 'c'];
//arr = [1, 2, 3];
//console.log(arr);
//ОШИБКА

//const arr = ['a', 'b', 'c'];
//arr = ['a', 'b', 'c'];
//console.log(arr);
//ОШИБКА

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const g = 5;
const w = a + b + c + d + g;
console.log(w);

let obj = { x: 1, y: 2, z: 3 };
console.log(obj.x); // Верный вариант

let obj1 = { x: 1, y: 2, z: 3 };
let key = 'x';
console.log(obj1[key]); // Это тоже правильный вариант

let obj3 = { x: 1, y: 2, z: 3 };
let sum = obj3['x'] + obj3['y'] + obj3['z'];
console.log(sum);// Это тоже правильный вариант

let obj4 = {x: 1, y: 2, z: 3};
console.log(obj.length);// Это тоже правильный вариант

let test = 110;

if (test > 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test1 = 110;

if (test1 < 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test2 = 110;

if (test2 => 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test3 = 110;

if (test3 <= 10) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test4 = 10;

if (test4 == 10) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}

let test5 = 0;

if (test5 != 10) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}

let test6 = 1;
let test7 = 2;

if (test6 > test7) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test8 = 1;
let test9 = 2;

if (test8 == test9) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test01 = 'abc';
let test02 = 'abc';
if (test01 == test02) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let test04 = '123';
let test03 = 123;
if (test03 == test04) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}

let num = 3;

if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 13;

if (num1 => 10 && num1 <= 20) {
	console.log('+++');
} else {
	console.log('---');
}

let num3 = 2;
let num2 = 3;

if (num3 <= 1 && num2 >= 3 ) {
	console.log('+++');
} else {
	console.log('---');
}

//if (num == 0 || num > 1 && num < 5 ) {
//	console.log('+++');
//} else {
//	console.log('---');
//}
// нам = 0 или нам больше 1  нам сньше 5

//let num = 3;		
//if ((num > 5 && num < 10) ||( num == 20)) {
//	console.log('+++');
//} else {
//	console.log('---');
//}

//let num = 3;
		
//if ((num > 5 )||( num > 0 && num < 3)) {
//	console.log('+++');
///} else {
//	console.log('---');
//}

//let num = 3;
		
//if ((num == 9) || (num > 10 && num < 20) || (num > 20 && num < 30)) {
//	console.log('+++');
//} else {
//	console.log('---');
//}

if (!(num1 > 0 && num2 < 10)) {
	console.log('+++');
} else {
	console.log('---');
}

let test11 = true;

if (test11 === true) {
	console.log('+++');
} else {
	console.log('---');
}

let test12 = true;

if (test12 === false) {
	console.log('+++');
} else {
	console.log('---');
}

let test07 = true;

if (test07) {
	console.log('+++');
} else {
	console.log('---');
}

let testa = true;

if (testa) {
	console.log('+++');
} else {
	console.log('---');
}

let testb = true;

if (!testb) {
	console.log('+++');
} else {
	console.log('---');
}

let testd = true;

if (!testd) {
	console.log('+++');
} else {
	console.log('---');
}

let test15 = true;
let test26 = true;

if (test15 && test26 ) {
	console.log('+++');
} else {
	console.log('---');
}
let test001 = true;
let test002 = true;

if (test001 && ! test002 ) {
	console.log('+++');
} else {
	console.log('---');
}

let test003 = true;
let test004 = true;

if ( ! test003 && ! test004) {
	console.log('+++');
} else {
	console.log('---');
}
let test112 = true;
let test221 = true;

if (! test112 && test221) {
	console.log('+++');
} else {
	console.log('---');
}

let test41 = true;
let test42 = true;
let test43 = true;

if (test41 && test42 && test43 ) {
	console.log('+++');
} else {
	console.log('---');
}

let test21 = true;
let test22 = true;
let test23 = true;

if (test21 || test22 && test23 ) {
	console.log('+++');
} else {
	console.log('---');
}

let test51 = true;
let test52 = true;
let test53 = true;

if (test51 || test52 && test53 ) {
	console.log('+++');
} else {
	console.log('---');
}

let test65 = 10;

if (test65 == 10) {
	console.log('yes');
} else {
	console.log('');
}

if (test > 0) {
	console.log('+++');
} else console.log('---');

if (test > 0) console.log('+++');

let day = 15; // Пример значения

if (day >= 1 && day <= 10) {
    console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
    console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третья декада");
} else {
    console.log("Неверный день месяца");
}

let day1 = 32; // Пример значения

// Проверка, является ли day числом от 1 до 31
if (typeof day1 !== 'number' || !Number.isInteger(day1) || day1 < 1 || day1 > 31) {
   // console.error('Ошибка: введенное значение должно быть целым числом от 1 до 31.');
} else if (day1 >= 1 && day1 <= 10) {
    console.log("Первая декада");
} else if (day1 >= 11 && day1 <= 20) {
    console.log("Вторая декада");
} else if (day1  >= 21 && day1 <= 31) {
    console.log("Третья декада");
}

let num32 = 67; // Пример значения

// Проверка, что число попадает в диапазон от 10 до 99
if (num32 >= 10 && num32 <= 99) {
    // Вычисляем сумму цифр числа
    const sumOfDigits = String(num32)
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);

    // Проверяем, является ли сумма однозначной или двухзначной
    if (sumOfDigits <= 9) {
        console.log(`Сумма цифр числа ${num32} равна ${sumOfDigits}. Она однозначная.`);
    } else {
        console.log(`Сумма цифр числа ${num32} равна ${sumOfDigits}. Она двухзначная.`);
    }
} else {
    console.log(`${num32} не входит в диапазон от 10 до 99.`);
}

let lang = 'ru';

switch (lang) {
  case 'ru':
    console.log('рус');
    break;
  case 'en':
    console.log('анг');
    break;
  case 'de':
    console.log('нем');
    break;
  default:
    console.log('язык не поддерживается');
}

let num12 = 1;
let res1 = (num >= 0) ? '1' : '2';

console.log(res1);

let ad = 2 * (3 - 1);
let bd = 6 - 2;
let result = ad == bd;
console.log(result);


let aa = 5 * (7 - 4);
let ba = 1 + 2 + 7;
let result1 = aa > ba;
console.log(result1);

let as = 2 ** 4;
let bs = 4 ** 2;
let result2 = as != bs;
console.log(result2);

//const ageConfirmation = prompt("Вам уже исполнилось 18 лет?", "Да/Нет");

//if (ageConfirmation.toLowerCase() === "да") {
//    alert("Добро пожаловать на сайт для взрослых!");
//} else {
 //   alert("Доступ запрещён. Вам необходимо достичь 18-летнего возраста.");
//}

let age = 17;
let adult; 

if (age >= 18) {
  adult = true;
} else {
  adult = false;
}

console.log(adult);

let age1 = 17;
let adult1;

if (age1 >= 18) {
  adult1 = true;
} else {
  adult1 = false;
}

console.log(adult1);

let age2 = 17;
let adult2;

if (age2 >= 18) {
  adult2 = true;
} else {
  adult2 = false;
}

console.log(adult2);

let age3 = 17;
let res3;

if (age3 >= 18) {
  if (age3 <= 23) {
    res3 = 'от 18 до 23';
  } else {
    res3 = 'больше 23';
  }
} else {
  res3 = 'меньше 18';
}

console.log(res3);

let age4 = 19;
let res4;

if (age4 >= 18) {
  if (age4 <= 23) {
    res4 = 'от 18 до 23';
  } else {
    res4 = 'больше 23';
  }
} else {
  res4 = 'меньше 18';
}

console.log(res4);

let min = 17;

if (min >= 0 && min <= 14) {
	console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
	console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
	console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
	console.log('4 четверть');
}

let arr = [1, 2, 3]; 

if (arr.length === 3) { 
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
    console.log(sum); 
} else {
    console.log('В массиве не 3 элемента'); 
}

let str1 = "apple"; 

if (str1.startsWith('a')) {
    console.log("Строка начинается на 'a'");
} else {
    console.log("Строка не начинается на 'a'");
}

let str2 = "example"; 

if (str2.endsWith('x')) {
    console.log("Строка заканчивается на 'x'");
} else {
    console.log("Строка не заканчивается на 'x'");
}

let str3 = "banana";

if (str3.startsWith('a') || str3.startsWith('b')) {
    console.log("Строка начинается на 'a' или 'b'");
} else {
    console.log("Строка не начинается на 'a' или 'b'");
}

let number = 1230; 

if (number % 10 === 0) {
    console.log("Последняя цифра числа равна нулю");
} else {
    console.log("Последняя цифра числа не равна нулю");
}

let num55 = 234; 


let lastDigit = num55 % 10;


if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
    console.log("Четное число");
} else {
    console.log("Нечетное число");
}

let number1 = prompt("Введите число:");


number1 = parseInt(number1);


if (number1 % 2 === 0) {
    console.log(`${number1}  четное число.`);
} else {
    console.log(`${number1}  нечетное число.`);
}

let number2 = prompt("Введите число:");


number2 = parseInt(number2);


if (number2 % 3 === 0) {
    console.log(`${number2} делится на 3.`);
} else {
    console.log(`${number2} не делится на 3.`);
}