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

let arr = [];
for (let i = 0; i < 4; ++i) {
    arr[i] = [];
    for (let j = 0; j <= i; ++j) {
        arr[i][j] = j;
    }
}
console.log(`k = ${k}`);
console.log('result =', arr);



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