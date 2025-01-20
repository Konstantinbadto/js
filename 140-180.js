// 141-------------------------------------------------------------------------------------------------------------------------------------------
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num3 = '1';
let num4 = '2';

if (num3 + num4 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num5 = '1';
let num6 = '2';

if (Number(num5 + num6) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num01 = 123;

if (String(num01[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num02 = 123;

if (String(num02)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num11 = 123;
let first = String(num11)[0];

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num12 = 12;

if (num12.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num00 = 12;
let str = num00.toString(); 

if (str.length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

let num14 = 12;

if (String(num14.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num15 = 12;

if (String(num15).length === String(2)) {
	console.log('+++');
} else {
	console.log('---');
}

let num05 = 12;

if (String(num05).lenght === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num60 = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num60[0] + num60[1] + num60[2];
let sum2 = num60[3] + num60[4] + num60[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
//142--------------------------------------------------------------------------------------------------------------------------------------------

let month = 8; 

switch (true) {
    case (month >= 3 && month <= 5):
        console.log("Весна");
        break;
    case (month >= 6 && month <= 8):
        console.log("Лето");
        break;
    case (month >= 9 && month <= 11):
        console.log("Осень");
        break;
    case (month == 12 || month == 1 || month == 2):
        console.log("Зима");
        break;
    default:
        console.error("Некорректное значение месяца.");
}

const str1 = 'abcde';

if (str1.startsWith('a')) {
    console.log('да');
} else {
    console.log('нет');
}


let number1 = 12345;

let stringNumber = number1.toString();

if (['1', '2', '3'].includes(stringNumber[0])) {
    console.log('да');
} else {
    console.log('нет');
}

function sumOfDigits(number4) {
    let digitsSum = 0;
    
    const stringNumber = number4.toString();
    
    for (let i = 0; i < stringNumber.length; i++) {
        digitsSum += parseInt(stringNumber[i], 10); 
    }
    
    return digitsSum;
}

console.log(sumOfDigits(456)); 

function checkSumEquality(number) {
    const stringNumber = number.toString();
    
    if (stringNumber.length !== 6) {
        throw new Error("Число должно содержать ровно 6 цифр.");
    }
    
    const firstThreeDigits = stringNumber.slice(0, 3);
    
    const lastThreeDigits = stringNumber.slice(3);
    
    const sumFirstHalf = [...firstThreeDigits].reduce((acc, digit) => acc + parseInt(digit), 0);
    
    const sumLastHalf = [...lastThreeDigits].reduce((acc, digit) => acc + parseInt(digit), 0);
    
    if (sumFirstHalf === sumLastHalf) {
        return 'да';
    } else {
        return 'нет';
    }
}


console.log(checkSumEquality(123321)); 
//143-------------------------------------------------------------------------------------------------------------------------------------------

let arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach(element => {
    console.log(element);
});
//144-------------------------------------------------------------------------------------------------------------------------------------------

let obj1 = { x: 1, y: 2, z: 3 };

Object.keys(obj1).forEach(key => {
    console.log(key);
});

let obj = { x: 1, y: 2, z: 3 };

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
//145--------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 100; i++) {
    console.log(i);
    break; 
}

for (let i = 11; i <= 33; i++) {
    console.log(i);
    break; 
}

function multiplyUntil(num44, threshold) {
    let result = num44;
    let iterations = 0;

    while (result <= threshold) {
        result *= 3;
        iterations++;
    }

    return { result, iterations };
}

const initialValue = 1;
const { result, iterations } = multiplyUntil(initialValue, 1000);
console.log(`Результат: ${result}, Количество итераций: ${iterations}`);
//146-------------------------------------------------------------------------------------------------------------------------------------------
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
    break; 
}

for (let i = 1; i < 100; i += 2) {
    console.log(i);
    break; 
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
    break;
}
//147--------------------------------------------------------------------------------------------------------------------------------------------
let arr3 = ['a', 'b', 'c', 'd', 'e'];

arr3.forEach(element1 => {
    console.log(element1);
});

let arr5 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 1; i < arr5.length - 1; i++) {
    console.log(arr5[i]);
}

let arr7 = ['a', 'b', 'c', 'd', 'e'];


for (let i = arr7.length - 1; i >= 0; i--) {
    console.log(arr7[i]);
}

let arr9 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr9.length; i++) {
  console.log(arr9[i]);
}
//148-------------------------------------------------------------------------------------------------------------------------------------------
let arr11 = [2, 5, 9, 15, 1, 4];

let filteredArr = arr11.filter(item => item > 3 && item < 10);

filteredArr.forEach(item => {
    console.log(item);
});

let obj0 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

let values = Object.values(obj0);

let oddValues = values.filter(value => value % 2 !== 0);

oddValues.forEach(value => {
    console.log(value);
});
//149-------------------------------------------------------------------------------------------------------------------------------------------

let sum123 = 0;

for (let i = 2; i <= 100; i += 2) {
    sum123 += i;
}

console.log(sum123);

let sum125 = 0;

for (let i = 1; i < 100; i += 2) {
    sum125 += i;
}

console.log(sum125);

let product = 1;

for (let i = 1; i <= 20; i++) {
    product *= i;
}

console.log(product);
//150-------------------------------------------------------------------------------------------------------------------------------------------
let arr56 = [2, 5, 9, 3, 1, 4];

let sum56 = 0;

for (let i = 0; i < arr56.length; i++) {
    sum56 += arr56[i];
}

console.log(sum56);

let arr57 = [2, 5, 9, 3, 1, 4];

let sum57 = 0;

for (let i = 0; i < arr57.length; i++) {
    if (arr[i] % 2 === 0) {
        sum57 += arr57[i];
    }
}

console.log(sum57);

let arr53 = [2, 5, 9, 3, 1, 4];

let sumSquares23 = 0;

for (let i = 0; i < arr53.length; i++) {
    sumSquares23 += Math.pow(arr53[i], 2);
}

console.log(sumSquares23);

let arr24 = [2, 5, 9, 3, 1, 4];

let product24 = 1;

for (let i = 0; i < arr24.length; i++) {
    product24 *= arr24[i];
}

console.log(product24);
//152--------------------------------------------------------------------------------------------------------------------------------------------
let dashes = '';

for (let i = 0; i < 5; i++) {
    dashes += '-';
}

console.log(dashes);

let result12 = '';

for (let i = 1; i <= 9; i++) {
    result12 += i;
}

console.log(result12);

let result13 = '';

for (let i = 9; i >= 0; i--) {
    result13 += i;
}

console.log(result13);

let result11 = '';

for (let i = 1; i <= 9; i++) {
    result11 += `-${i}`;
}

console.log(result11);
//153-------------------------------------------------------------------------------------------------------------------------------------------
for (let i = 10; i <= 1000; i++) {
    console.log(i.toString().substring(0, 1));
}

for (let i = 10; i <= 1000; i++) {
    let firstDigit = i.toString()[0];
    let secondDigit = i.toString()[1];
    console.log(firstDigit + secondDigit);
}

for (let i = 10; i <= 1000; i++) {
    if (i.toString()[0] === '1') {
        console.log(i);
    }
}

for (let i = 10; i <= 1000; i++) {
    let firstTwoDigits = i.toString().substr(0, 2);
    if (firstTwoDigits === '05') {
        console.log(i);
    }
}
//154-----------------------------------------------------------------------------------------------------------------------------------------

for (let i = 10; i <= 1000; i++) {
    let firstTwoDigits = i.toString().substr(0, 2);
    if (firstTwoDigits === '05') {
        console.log(i);
    }
}

let arr09 = [2, -5, 3, -1, 4, -2, 5, -3, 1, -4, 0];

let index = 0;
let sum89 = 0;

while (arr09[index] >= 0) {
    sum89 += arr09[index];
    index++;
    if (arr09[index] < 0) {
        break;
    }
}
console.log(sum89);

let arr242 = [2, 5, 3, 1, 4, -2, 5, -3, 1, -4, 0]

    let index21 = 0;
    
    while (arr242[index21] != 0) {
        console.log(arr242[index21]);
        index21++;
    }
    
    console.log("Цикл завершился, так как встретился нуль.");

    function findMinNumbers() {
        let sum122 = 0;
        let count = 0;
        
        // Пока сумма меньше или равна 100, продолжаем добавлять числа
        while (sum122 <= 100) {
            count++;
            sum122 += count;
        }
        
        return count;
    }
    
    console.log(findMinNumbers());
//156-----------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < 3; j++) {
        document.write(i);
    }
}

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            document.write(`${i}${j} `);
        }
    }

//157--------------------------------------------------------------------------------------------------------------------------------

let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);

let array = [];
for (let i = 0; i < 10; i++) {
    array.push('x');
}

console.log(array);

const originalArray = [-4, -7, 9, -6, 2];

const positiveNumbers = [];

originalArray.forEach((num) => {
    if (num > 0) {
        positiveNumbers.push(num);
    }
});
console.log(positiveNumbers);

//160-----------------------------------------------------------------------------------------------------------------------------------------

let arr65= [4, 8, -3, 2];{

    for (let i = 0; i < arr.length; i++) {
        arr65[i]*=arr65[i];
    }
console.log(arr65);
}


let arr43 = [4, 8, -3, 2];{
    for (let i = 0; i < arr.length; i++) {
        arr43[i] -= 1;
    }
    
console.log(arr43);
}

let arr44 = [4, 8, -3, 2];{
    for (let i = 0; i < arr.length; i++) {
        arr44[i] += 10;
    }
    
console.log(arr44);
}
//161-----------------------------------------------------------------------------------------------------
let arr121 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr212 = [1, 2, 3, 4, 5, 6, 7];
let daysObject12 = {};
for (let i = 0; i < arr121.length; i++) {
    
    daysObject12[arr121[i]] = arr212[i];
}

console.log(daysObject12);

let obj45 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let evenNumbersObj1 = {};
for (let key in obj45) {
    if (obj45.hasOwnProperty(key)) {
        let value = obj45[key];
        
        
        if (value % 2 === 0) {
            
            evenNumbersObj1[key] = value;
        }
    }
}

console.log(evenNumbersObj1);

let obj46 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const entries = Object.entries(obj46);
const newObj46 = Object.fromEntries(entries.map(([key, value]) => [value, key]));
console.log(newObj46);
//162--------------------------------------------------------------------------------------------
let obj09 = { x: 1, y: 2, z: 3 };


for (let key1 in obj09) {
    if (obj09.hasOwnProperty(key1)) {
        
        obj09[key1] = Math.pow(obj09[key1], 2);
    }
}

console.log(obj09);

let obj01 = { x: 1, y: 2, z: 3 };

// Перебор всех ключей объекта
for (let key2 in obj01) {
    if (obj01.hasOwnProperty(key2)) {
        // Увеличение значения на единицу
        obj01[key2]++;
    }
}

console.log(obj01);
//163--------------------------------------------------------------------------------------------
let arr021 = ['a', 'b', 'c', 'd', 'e'];

if (arr021.includes('c')) {
    console.log('+++');
} else {
    console.log('---');
}

function isPrime(number25) {
    if (number25 <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.floor(Math.sqrt(number25)); i++) {
        if (number25 % i === 0) {
            return false;
        }
    }
    
    return true;
}
let n = 17;
if (isPrime(n)) {
    console.log(`${n} - простое число`);
} else {
    console.log(`${n} - составное число`);
}
//164------------------------------------------------------------------------------------------
let arr324 = [10, 20, 30, 40, 21, 32, 51];

let filteredArr32 = arr324.filter(num53 => String(num53).startsWith('1') || String(num53).startsWith('2'));

let sum12 = filteredArr32.reduce((acc, cur) => acc + cur, 0);

console.log(sum12);
//165--------------------------------------------------------------------------------------------------
let obj065 = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum21 = 0;

for (let key65 in obj065) {
  if (key65.startsWith('1') || key65.startsWith('2')) {
    sum21 += obj065[key65]; 
  }
}

console.log(sum21);

//166------------------------------------------------------------------------------------
for (let i = 10; i > 0; i++) {
	console.log(i);
    break;
}

for (let i = 10; i >= 0; i--) {
	console.log(i);
    break;
}

let i = 0;

while (i < 10) {
  i++;
  console.log(i);
}

let res = 0; 
for (let i = 1; i <= 10; i++) {
  res += i;
}
console.log(res);

let res1 = 0;

for (let i = 1; i <= 10; i++) {
	res1 *= i;
}

console.log(res1);

let arr52 = ['1', '2', '3', '4', '5'];
let sum52 = 0;

for (let elem52 of arr52) {
  sum52 += Number(elem52); 
}

console.log(sum52);

let arr51 = ['1', '2', '3', '4', '5'];
let sum51 = 0; 

for (let elem51 of arr51) {
  sum51 += +elem51; 
}

console.log(sum51);

let arr97 = ['1', '2', '3', '4', '5'];
let sum97 = 0;

for (let i = 0; i < arr97.length; i++) {
  sum97 += +arr97[i];
}

console.log(sum97);

let arr59 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr59.length; i++) {
  arr59[i] = arr59[i] ** 2;
}

console.log(arr59);

let arr75 = []; 

for (let i = 1; i <= 5; i++) {
  arr75.push(i);
}

console.log(arr75);


let arr61 = [1, 2, 3, 4, 5];
let res61 = '---'; 

for (let elem61 of arr61) {
  if (elem61 === 3) {
    res61 = '+++';
    break; 
  }
}

console.log(res61);

let arr73 = []; 

for (let i = 1; i <= 5; i++) {
  arr73.push(i);
}

console.log(arr73);

let arr58 = [1, 2, 3, 4, 5];
let res58 = false;

for (let elem58 of arr58) {
  if (elem58 === 3) {
    res58 = true;
    break;
  }
}

console.log(res58);

//167------------------------------------------------------------------------------------------
let arrф = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
  ];
  
  let elementsToFindф = ['l', 'e', 'g', 'a'];
  
  elementsToFindф.forEach(elementф => {
    let foundElementф = null;
    
    outerLoop:
    for (let i = 0; i < arrф.length; i++) {
      for (let j = 0; j < arrф[i].length; j++) {
        if (arrф[i][j] === elementф) {
          foundElementф = arrф[i][j];
          break outerLoop;
        }
      }
    }
    
    if (foundElementф !== null) {
      console.log(foundElementф);
    }
  });

let arrы = [[1, 2], [3, 4], [5, 6]];
let totalSumы = 0;

for (let subArrayы of arrы) {
    for (let numы of subArrayы) {
        totalSumы += numы;
    }
}

console.log(totalSumы);
//169---------------------------------------------------------------------------------------------
let arrв = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];
  let totalSumв = 0;
  
  for (let subArray1в of arrв) {
      for (let subArray2в of subArray1в) {
          for (let numв of subArray2в) {
              totalSumв += numв;
          }
      }
  }
  
  console.log(totalSumв);

  //171---------------------------------------------------------------------------------------
  let arrа = [[1, 2, 3], [4, 5], [6]];
  let totalSumа = 0;
  
  for (let subArrayа of arrа) {
      for (let numа of subArrayа) {
          totalSumа += numа;
      }
  }
  
  console.log(totalSumа)

  let arrс = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let totalSumс = 0;

for (let subArray1с of arrс) {
    for (let subArray2с of subArray1с) {
        for (let numс of subArray2с) {
            totalSumс += numс;
        }
    }
}

console.log(totalSumс);
//173-----------------------------------------------------------------------------------------
let resultм = [];

for (let i = 0; i < 3; i++) {
    let innerArrayм = [];
    for (let j = 1; j <= 5; j++) {
        innerArrayм.push(j);
    }
    resultм.push(innerArrayм);
}

console.log(resultм);

let resultф = [];

for (let i = 0; i < 3; i++) {
    let rowф = [];
    for (let j = 0; j < 4; j++) {
        rowф.push('x');
    }
    resultф.push(rowф);
}

console.log(resultф);

let resultя = [];

for (let i = 0; i < 3; i++) {
    let middleLayerя = [];
    for (let j = 0; j < 2; j++) {
        let innerArrayя = [];
        for (let k = 1; k <= 5; k++) {
            innerArrayя.push(k);
        }
        middleLayerя.push(innerArrayя);
    }
    resultя.push(middleLayerя);
}

console.log(resultя);

//176---------------------------------------------------------------------------------------------
let resultч = [];

for (let i = 0; i < 4; i++) {
    let pairч = [i * 2 + 1, i * 2 + 2];
    resultч.push(pairч);
}

console.log(resultч);

let resultи = [];

for (let i = 0; i < 4; i++) {
    let rowи = [];
    for (let j = 0; j < 3; j++) {
        rowи.push((i * 2 + 2));
    }
    resultи.push(rowи);
}

console.log(resultи);

let resultй = [];

for (let i = 0; i < 2; i++) {
    let middleLayerй = [];
    for (let j = 0; j < 2; j++) {
        let innerArrayй = [];
        for (let k = 0; k < 2; k++) {
            innerArrayй.push(k * 2 + 1);
        }
        middleLayerй.push(innerArrayй);
    }
    resultй.push(middleLayerй);
}

console.log(resultй);

let arrц = [];
for (let i = 0; i < 3; i++) {
    arrц[i] = [];
    for (let j = 0; j < 3; j++) {
        arrц[i][j] = k;
    k--;
    }
    k = 1;
}

console.log(arrц);

let arrп = [];

for (let i = 0; i < 3; i++) {
  arrп[i] = [];
  for (let j = 0; j < 3; j++) {
    arrп[i][j] = k;
    k++;
  }
  k = 0;
}

console.log(arrп);

let arrр = [];

for (let i = 0; i < 3; i++) {
  arrр[i] = [];
  for (let j = 0; j < 3; j++) {
    arrр[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrр);

let arrт = [];

for (let i = 0; i < 3; i++) {
  arrт[i] = [];
  for (let j = 0; j < 3; j++) {
    arrт[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrт);

let arrь = [];

for (let i = 0; i < 3; i++) {
  arrь[i] = [];
  for (let j = 0; j < 3; j++) {
    arrь[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrь);

let arrл = [];

for (let i = 0; i < 3; i++) {
  arrл[i] = [];
  for (let j = 0; j < 3; j++) {
    arrл[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrл);

let arrд = [];

for (let i = 0; i < 3; i++) {
  arrд[i] = [];
  for (let j = 0; j < 3; j++) {
    arrд[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrд);

let arrш = [];

for (let i = 0; i < 3; i++) {
  arrш[i] = [];
  for (let j = 0; j < 3; j++) {
    arrш[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrш);

let arrщ = [];
for (let i = 0; i < 3; i++) {
  arrщ[i] = [];
  for (let j = 0; j < 3; j++) {
    arrщ[i][j] = k;
    k--;
  }
  k = 1;
}

console.log(arrщ);

let arrз = [];
for (let i = 0; i < 3; i++) {
    arrз[i] = [];
    for (let j = 0; j < 3; j++) {
        arrз[i][j] = k;
        k--;
    }
    k = 1;
}

console.log(arrз);