const alphabet = "abcdefghijklmnoprstuwxyz".split("");

function aggregateIntoChunks(array) {
  function random() {
    let rand = Math.round(Math.random() * (7 - 4) + 4);
    return rand;
  }

  let arrayCopy = array.slice(0);
  let chunks = [];

  for (i = 0; ; i++) {
    let rand = random();
    let chunk = array.splice(0, rand);
    chunks.push(chunk);

    if (array.length === 0 && chunk.length >= 4) {
      break;
    } else if (array.length === 0) {
      for (i = 0; i < arrayCopy.length; i++) {
        array.push(arrayCopy[i]);
      }
      chunks.splice(0);
    }
  }
  return chunks;
}

console.log(aggregateIntoChunks(alphabet));
