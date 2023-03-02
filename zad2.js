const age = [25, 50, 75, 100, 200];

//Callback functions

const NumberToPowerTwo = (x) => Math.pow(x, 2);
const isAdult = (element) => element > 25;
const reduceCallback = (total, num) => total - num;
const everyCallback = (parameter) => parameter < 30;

//For Each
const forEachFn = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

console.log("For Each function returns:", forEachFn(age, NumberToPowerTwo));

//Map

const mapFn = (array, callback) => {
  const mappedArray = [];
  for (i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
};

console.log("Map function returns:", mapFn(age, NumberToPowerTwo));

//Entries

// const entriesFn = (array, callback) => {
//   const entriesArray = [];
//   for (i = 0; i < array.length; i++) {
//     entriesArray.push([array.indexOf(array[i]), array[i]]);
//   }
//   return entriesArray;
// };

// console.log(entriesFn(age));

//Filter

const filterFn = (array, callback) => {
  const filteredArray = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

console.log("Filter function returns:", filterFn(age, isAdult));

//Reduce

const reduceFn = (array, callback, initial) => {
  let reduced = 0;
  let i = 0;
  while (array.length > i) {
    reduced = callback(initial, array[i]);
    initial = reduced;
    i++;
  }
  return reduced;
};

console.log("Reduce function returns:", reduceFn(age, reduceCallback, 1000));

//Every

const everyFn = (array, callback) => {
  let statement = Boolean();
  for (i = 0; i < array.length; i++) {
    statement = Boolean(callback(array[i]));
    if (statement == 0) {
      break;
    }
  }
  return statement;
};

console.log("Every function returns:", everyFn(age, everyCallback));

//Some

const someFn = (array, callback) => {
  let statement = Boolean();
  for (i = 0; i < array.length; i++) {
    statement = Boolean(callback(array[i]));
    if (statement == 1) {
      break;
    }
  }
  return statement;
};

console.log("Some function returns:", someFn(age, everyCallback));
