function compareArrays(arr1, arr2) {
  
  let lengthComparison = arr1.length === arr2.length; 
  let indexComparison = arr1.every((item, index) => item === arr2[index]);
  let result = lengthComparison && indexComparison === true;

  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);

  return resultArr; // array
}
