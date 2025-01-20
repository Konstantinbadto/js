"use strict";
let str = 'mruz production';
alert(str.length); // выведет 5
let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ` + str1 + ` bbb ` + str2 + `ccc`;
alert(txt);
let str6 = `a
b
c`; // так будет работать
alert(str6);

let a;
alert(a); // выведет undefined

let v = null;
alert(v); // выведет null

let e = true;
alert(e); // выведет null

let r = false;
alert(r); // выведет null

alert('abc' * 'dsd'); // выведет NaN

alert( 10 / 0); // выведет Infinity
alert(-10 / 0); // выведет -Infinity

let n = Number('10'); // в переменную запишется число 2
let b = Number('20'); // в переменную запишется число 3
alert(n + b); // выведет 5

let q = 2;
let l = 3;
alert(q + l); // выведет '5'

let px1 = '5px';
let px2 = '6px';
const pixel1 = parseInt(px1.replace('px', ''));
const pixel2 = parseInt(px2.replace('px', ''));
const totalPixels = pixel1 + pixel2;
console.log(totalPixels);

let px3 = parseFloat('5.5px');
let px4 = parseFloat('6.25px');

alert(px3 + px4+'px'); 

let num1 = 123;
let num2 = 456;
console.log(num1, num2);

console.log(123);
console.log('123');

let num4 = 9;
let num5 = 3;
alert(String(num4) + String(num5)); // выведет '93'

let num = 12345;
alert(String(num).length); // найдем длину строки

let num0 = 12345;
let num7 = 98;
alert((String(num0) + String(num7)).length); // выведет '93'

let str3 = 'abcde';

alert(str3[0]); // выведет 'a'
alert(str3[2]); // выведет 'c'
alert(str3[4]); // выведет 'e'

let str5 = 'abcde';

alert(str5[4] + str5[3] + str5[2] + str5[1] + str5[0]);

let str7 = 'abcde';
let num8 = 3; // номер символа в переменной

alert(str7[num8]); // выведет 'd'

let str33 = 'abcde';
alert(str33[str33.length - 1]); // выведет 'e'
alert(str33[str33.length - 2]); // выведет 'd'
alert(str33[str33.length - 3]); // выведет 'c'

let test = '12345';
alert(test[0] + test[1]); // выведет '12' - суммирует как строки

let testx = String(12345);
alert((testx[0]) +  (testx[1])+ (testx[2]) + (testx[3]) + (testx[4])); 
alert((testx[0]) *  (testx[1])* (testx[2]) * (testx[3]) * (testx[4])); 
alert((testx[4]) +  (testx[3])+ (testx[2]) + (testx[1]) + (testx[0]));

let num99 = 47;
num99 += 7;
num99 -= 18;
num99 *= 10;
num99 /= 15;
alert(num99);

let num00 = 10;
num00++ ;
num00++ ;
num00-- ;
alert(num00);