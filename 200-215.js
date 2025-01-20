"use strict"
// глава 200

function func() {
	console.log('Киселев Максим');
}
func();

function sum_of_1_100() {
    let sum = 0;
    for (let index = 1; index <= 100; index++) {
        sum += index;
    }
    console.log(sum);
}
sum_of_1_100();

// глава 201

function func_3_201(num_201) {
	console.log(Math.pow(num_201, 3));
}
func_3_201(3);

function plus_or_minus(number_pm) {
    if (number_pm > 0){
        console.log("+++");
    }
    else{
        console.log("---");
    }
}
plus_or_minus(-23);

// глава 202

function func_sum(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
func_sum(1, 2, 3);

// глава 203

function func_203(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func_203(param1, param2, param3);

// глава 204

// №1⊗jsPmFBOP

// Дана функция:

// function func(num = 5) {
// 	console.log(num * num);
// }
// Эта функция вызывается следующим образом:

// func(2);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

// Ответ:4
//       9
//       25


// №2⊗jsPmFBOP

// Дана функция:

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// Эта функция вызывается следующим образом:

// func(2, 3);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.

// Ответ:5
//       3
//       0

// глава 205

function cube(num) {
    return num ** 3;
}
let res205_1 = cube(3); 
console.log(res205_1);


function sqrt(num) {
    return Math.sqrt(num);
}
let res1_205 = sqrt(3); 
let res2_205 = sqrt(4); 
let sum205 = Math.floor(res1_205 + res2_205); 
console.log(sum205);

// глава 206
function sqrt206_1(num) {
    return Math.sqrt(num);
}
function round206_1(num) {
    return num.toFixed(3);
}
let result206_1 = round206_1(sqrt206_1(2));
console.log(result206_1);


function sqrt206_2(num) {
    return Math.sqrt(num);
}
function sum206_2(num1, num2, num3) {
    return num1 + num2 + num3;
}
let res_206_2 = sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4));
console.log(res_206_2);


function round206_3(num) {
    return num.toFixed(3);
}
let res206_3 = round206_3(sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4)));
console.log(res206_3);

// глава 207

// №1⊗jsPmFBRN

// Что выведется в консоль в результате выполнения следующего кода:

// function func(num) {
// 	return num;
	
// 	let res = num ** 2;
// 	return res;
// }

// console.log( func(3) );
// Объясните почему.

// выыедет 3,тк нельзя в данном коде вернуть несколько значений

// №2⊗jsPmFBRN

// Что выведется в консоль результате выполнения следующего кода:

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) );
// console.log( func(-5) );
// Объясните почему.

// в первом вызове происходит выполнение второго условия и в итоге выведет 100
// во втором вызове происходит выполнение первого условия и в итоге выведет -5 по модулю 

// №3⊗jsPmFBRN

// Что выведется в консоль результате выполнения следующего кода:

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num ** 2;
// }

// console.log( func(10) );
// console.log( func(-5) );
// Объясните почему.

// выведет в первом случае 100, тк не выполняется условие if
// выведет во втром случае -5 по модулю

// глава 208

// №1⊗jsPmFBRL

// Что выведется в консоль в результате выполнения следующего кода:

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// console.log( func(5) );
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

function func208(num) 
{
	let sum208 = 0;
	
	for (let i = 1; i <= num; i++) {
		sum208 += i;
	}
    return sum208;
}
console.log( func208(5) );

// глава 209

function divideUntilLessThanTen(num) {
    let iterations = 0;
    while (num >= 10) {
        num /= 2;
        iterations++;
    }
    return iterations;
}

let result209 = divideUntilLessThanTen(100);
console.log(result209);

// глава 210

// Дана следующая функция:

// function func(num1, num2) {
// 	let res;
	
// 	if (num1 > 0 && num2 > 0) {
// 		res = num1 * num2;
// 	} else {
// 		res = num1 - num2;
// 	}
	
// 	return res;
// }

// console.log(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории

function func210_1(num1, num2) {
    return (num1 > 0 && num2 > 0) ? num1 * num2 : num1 - num2;
}
console.log(func210_1(3, 4)); 

// глава 111

function areAllEven(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }
    return true;
}
console.log(areAllEven([2, 4, 6, 8])); // true
console.log(areAllEven([2, 3, 6, 8])); // false


function areAllDigitsOdd(num) {
    let digits = num.toString().split('');
    for (let digit of digits) {
        if (parseInt(digit) % 2 === 0) {
            return false;
        }
    }
    return true;
}
console.log(areAllDigitsOdd(13579)); // true
console.log(areAllDigitsOdd(13578)); // false


function hasConsecutiveDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}
console.log(hasConsecutiveDuplicates([1, 2, 3, 3, 4])); // true
console.log(hasConsecutiveDuplicates([1, 2, 3, 4, 5])); // false

// глава 112

// №1⊗jsPmFBLO

// Дана следующая функция:

// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func212_1(a, b) {
	return a == b;
}

// №2⊗jsPmFBLO

// Дана следующая функция:

// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func212_2(a, b) {
	a != b;
}

// №3⊗jsPmFBLO

// Дана следующая функция:

// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func212_3(a, b) {
	return a + b >= 10;
}

// №4⊗jsPmFBLO

// Дана следующая функция:

// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func212_4(num) {
	num >= 0;
}
	
// глава 113

function average(arr) {
    if (arr.length === 0) {
        return 0; // или можно выбросить ошибку
    }
    
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    
    return sum / arr.length;
}

// Примеры использования:
console.log(average([1, 2, 3, 4])); // 2.5
console.log(average([])); // 0

function getAverageRatio(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        return 0; // или можно выбросить ошибку
    }
    
    let sum1 = 0;
    for (let elem of arr1) {
        sum1 += elem;
    }
    
    let sum2 = 0;
    for (let elem of arr2) {
        sum2 += elem;
    }
    
    return sum1 / sum2;
}

// Примеры использования:
console.log(getAverageRatio([1, 2, 3], [4, 5, 6])); // 0.5
console.log(getAverageRatio([], [4, 5, 6])); // 0

function getProduct(arr) {
    let product = 1;
    for (let elem of arr) {
        product *= elem;
    }
    
    return product;
}

// Примеры использования:
console.log(getProduct([1, 2, 3, 4])); // 24
console.log(getProduct([2, 3, 5])); // 30

// глава 114

// Поиск ошибок в коде с функциями JavaScript
// В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки. Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.

// №1⊗jsPmFBMst

// Код должен найти сумму результатов работы двух функций:

// function func1() {
// 	console.log(3);
// }
// function func2() {
// 	console.log(5);
// }

// console.log( func1() + func2() );

function func1() {
    return 3;
  }
  function func2() {
    return 5;
  }
  
console.log(func1() + func2());

// №2⊗jsPmFBMst

// Код должен найти сумму элементов массива:

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 		return res;
// 	}
// }

// console.log(sum([1, 2, 3, 4, 5]));

function sum214(arr) {
    let res = 0;
    
    for (let elem of arr) {
      res += elem;
    }
    
    return res; // Переносим return за пределы цикла
  }
  
  console.log(sum214([1, 2, 3, 4, 5]));

// №3⊗jsPmFBMst

// Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	console.log(res);
// }

let arr214_3 = [1, 2, 3, 4, 5];

function func214_3(arr214_3) {
  let res = 0;
  
  for (let elem of arr214_3) {
    res += elem;
  }
  
  console.log(res); // Теперь выводит результат
}

func214_3(arr214_3)

// №4⊗jsPmFBMst

// Код должен найти сумму результатов работы двух функций:

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1 + func2 );

function func1_214_4() {
    return 3;
  }
  function func2_214_4() {
    return 5;
  }
  
  console.log(func1_214_4() + func2_214_4());

// №5⊗jsPmFBMst

// Код должен найти сумму элементов массива:

// let sum = sum([1, 2, 3, 4, 5]);
// console.log(sum);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return elem;
// }

function sum214_5(arr) {
    let total_214 = 0; // Переименовываем переменную для избежания конфликта имен
    
    for (let elem of arr) {
      total_214 += elem;
    }
    
    return total_214; // Возвращаем сумму
  }
  
  let totalSum = sum214_5([1, 2, 3, 4, 5]); // Переименовываем переменную для ясности
  console.log(totalSum);

// №6⊗jsPmFBMst

// Код должен найти сумму элементов массива:

// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// }

function sum214_6(arr) {
    let total214_6 = 0;
    
    for (let elem of arr) {
      total214_6 += elem;
    }
    
    return total214_6; // Теперь возвращаем сумму
  }
  
  let res214_6 = sum214_6([1, 2, 3, 4, 5]);
  console.log(res214_6);
// №7⊗jsPmFBMst

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// }

function add(num) {
    if (num <= 9) {
      return '0' + num;
    }
    return num; 
  }

// №8⊗jsPmFBMst

// Код должен найти сумму элементов массива:

// let arr = [1, 2, 3, 4, 5];
// let sum = sum(arr);
// console.log(sum);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

let arr214_8 = [1, 2, 3, 4, 5];
let totalSum_214 = sum214_8(arr214_8);
console.log(totalSum_214);

function sum214_8(arr214_8) {
  let res = 0;
  for (let elem of arr214_8) {
    res += elem;
  }
  return res; 
}

// №9⊗jsPmFBMst

// Код должен найти сумму цифр числа:

// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
// 	let arr = num.split('');
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

let num_214 = 12345;
let res_214 = getDigitsSum(num_214);
console.log(res_214);

function getDigitsSum(num_214) {
  let arr = String(num_214).split(''); 
  let sum = 0;
  
  for (let elem of arr) {
    sum += Number(elem);
  }
  
  return sum; 
}
// №10⊗jsPmFBMst

// Код должен проверить число на то, что оно является простым:

// console.log(isPrime(13)); // должен вывести true

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}

function isPrime(num) 
{
    if (num <= 1) return false; 
    for (let i = 2; i < Math.sqrt(num) + 1; i++) { 
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
}
console.log(isPrime(13));

// глава 215

function sumArrayElements215(arr215_1) {
    let sum = 0;
    for (let elem of arr215_1) {
      sum += elem;
    }
    return sum;
  }
console.log(sumArrayElements215([1, 2, 3, 4]));


function getDivisors215(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
console.log(getDivisors215(100));


function stringToArray215(str) {
    return str.split('');
  }

function reverseString215(str) {
    return str.split('').reverse().join('');
  }

function capitalizeFirstLetter215(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function capitalizeFirstLetterOfEachWord215(str) {
    return str.split(' ').map(capitalizeFirstLetter).join(' ');
  }

function fillArrayWithIntegers215(n) 
{
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
} 

function sumOfDigits215(num) {
    return String(num)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

function isLeapYear215(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

function secondsToDays215(seconds) {
    return Math.floor(seconds / (60 * 60 * 24));
  }

function getRandomElement215(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

function isPrime215(num) 
{
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
}