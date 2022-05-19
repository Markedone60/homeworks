// Задание 1
function getArrayParams(arr) {
  let min = 100; 
  let max = -100;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > max) {
      max = arr[i];
    } 
    if (i < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return {min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  for (j = 0; j < arrOfArr.length; j++) {
    if (func(arrOfArr[j]) > max) {
    max = func(arrOfArr[j]);
    }
  }
  return max;
}

// Задание 3

function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let divider = 0;

  for (i = 0; i < arr.length; i++) {
    if (i > max) {
      max = arr[i];
    } 
    if (i < min) {
      min = arr[i];
    }
    divider = Math.abs(max - min);
  }

  return divider;
}