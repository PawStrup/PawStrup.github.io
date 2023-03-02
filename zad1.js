const alphabet = "abcdefghijklmnoprstuwxyz".split("");

const MAX_CHUNK_LENGTH = 7;
const MIN_CHUNK_LENGTH = 4;

const getRandomNumber = () =>
  Number(
    Math.round(
      Math.random() * (MAX_CHUNK_LENGTH - MIN_CHUNK_LENGTH) + MIN_CHUNK_LENGTH
    )
  );

const NumberOFChunkElements = [];
const chunks = [];

const aggregateIntoChunks = (array) => {
  let arrayLength = array.length;

  for (i = 0; ; i++) {
    const randomNumber = getRandomNumber();
    NumberOFChunkElements.push(randomNumber);
    arrayLength -= randomNumber;
    if (arrayLength <= MAX_CHUNK_LENGTH) {
      if (arrayLength >= MIN_CHUNK_LENGTH) {
        NumberOFChunkElements.push(arrayLength);
        break;
      } else {
        arrayLength += randomNumber;
        NumberOFChunkElements.pop();
      }
    }
  }

  let sliceBorder = 0;

  NumberOFChunkElements.forEach((element) => {
    chunks.push(array.slice(sliceBorder, element + sliceBorder));
    sliceBorder += element;
  });

  return chunks;
};

console.log(aggregateIntoChunks(alphabet));

// const getRandomNumber = () => Math.round(Math.random() * (MAX_CHUNK_LENGTH - MIN_CHUNK_LENGTH) + MIN_CHUNK_LENGTH);

// 4 <= chunk >= 7
// every chunk = 4,5,6,7
// alphabetarrayLength = alphabet.length = 24
// first step - find array of chunks, which arrayLength will equal to 24 [4, 5, 5, 6, 4] or [7, 4, 7, 6]
// alphabet

// tworzysz pusta tablice mozliwych dlugosci
// odpalasz pętle
// generujesz losowy liczbe i pakujesz do tablicy

// function aggregateIntoChunks(array) {
//   let arrayCopy = array.slice(0);
//   // spread and rest operators
//   // const arrayCopy = [...arrayOne, ...arrayTwo];
//   let chunks = [];

//   for (i = 0; ; i++) {
//     const randomNumber = getRandomNumber();
//     const chunk = array.splice(0, rand);
//     chunks.push(chunk);

//     if (array.length === 0 && chunk.length >= MIN_CHUNK_LENGTH) {
//       break;
//     } else if (array.length === 0) {
//       for (i = 0; i < arrayCopy.length; i++) {
//         array.push(arrayCopy[i]);
//       }
//       chunks.splice(0);
//     }
//   }
//   return chunks;
// }

// console.log(aggregateIntoChunks(alphabet));
