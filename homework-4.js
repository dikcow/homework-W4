let arrRandom = [];
let arrGenap = [];
let arrGanjil = [];

//cari arr random value = 100
function numberGenerator(start, end) {
  for (let i = 0; i < 100; i++) {
    let randomNum = Math.floor(Math.random() * start) + end;
    arrRandom.push(randomNum);
  }
  return arrRandom;
}

//bagi jadi 50-50 (arrGenap dan arrGanjil)
function bagiArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arrGenap.push(arr[i]);
    } else {
      arrGanjil.push(arr[i]);
    }
  }
  return [arrGenap, arrGanjil];
}

//cari bilangan terkecil & terbesar dari index genap & ganjil
function minArray(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (temp > arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

function maxArray(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

//cari total index array genap & ganjil
function totalArray(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  return temp;
}

//cari rata - rata index array genap & ganjil
function avgArray(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  return temp / arr.length;
}

//membandingkan bilangan terdekcil & terbesar dari kedua index (ganjil & genap)
function funccompareMin(genap, ganjil) {
  if (genap > ganjil) {
    return "Min genap lebih besar dari min ganjil";
  } else if (genap < ganjil) {
    return "Min ganjil lebih besar dari min genap";
  } else {
    return "Min pada kedua array sama";
  }
}

function funccompareMax(genap, ganjil) {
  if (genap > ganjil) {
    return "Max genap lebih besar dari max ganjil";
  } else if (genap < ganjil) {
    return "Max ganjil lebih besar dari max genap";
  } else {
    return "Max pada kedua array sama";
  }
}

//membandingkan total index array genap & ganjil
function funccompareTotal(genap, ganjil) {
  if (genap > ganjil) {
    return "Total genap lebih besar dari total ganjil";
  } else if (genap < ganjil) {
    return "Total ganjil lebih besar dari total genap";
  } else {
    return "Total pada kedua array sama";
  }
}

//membandingkan rata - rata dari kedua array
function funccompareAvg(genap, ganjil) {
  if (genap > ganjil) {
    return "Rata-rata genap lebih besar dari rata-rata ganjil";
  } else if (genap < ganjil) {
    return "Rata-rata ganjil lebih besar dari rata-rata genap";
  } else {
    return "Rata-rata pada kedua array sama";
  }
}

console.log(numberGenerator(50, 1));
bagiArr(arrRandom);
console.log(arrGenap);
console.log(arrGanjil);

const minArrayGenap = minArray(arrGenap);
const minArrayGanjil = minArray(arrGanjil);
const maxArrayGenap = maxArray(arrGenap);
const maxArrayGanjil = maxArray(arrGanjil);
const totalGenap = totalArray(arrGenap);
const totalGanjil = totalArray(arrGanjil);
const avgGenap = avgArray(arrGenap);
const avgGanjil = avgArray(arrGanjil);

const compareMin = funccompareMin(minArrayGenap, minArrayGanjil);
const compareMax = funccompareMax(maxArrayGenap, maxArrayGanjil);
const compareTotal = funccompareTotal(totalGenap, totalGanjil);
const compareAvg = funccompareAvg(avgGenap, avgGanjil);

console.log("Min index genap " + minArrayGenap);
console.log("Max index genap " + maxArrayGenap);
console.log("Min index ganjil " + minArrayGanjil);
console.log("Max index ganjil " + maxArrayGanjil);
console.log(compareMin);
console.log(compareMax);
console.log("Total array index genap " + totalGenap);
console.log("Total array index ganjil " + totalGanjil);
console.log(compareTotal);
console.log("Avg array index genap " + avgGenap);
console.log("Avg array index ganjil " + avgGanjil);
console.log(compareAvg);
