const findIndexes = (n, array, condition) => {
  let indexes = [];

  for (let i = 0; i < array.length; i += 1) {
    if (condition(array[i])) {
      indexes.push(i);

      if (indexes.length === n) {
        break;
      }
    }
  }

  return indexes;
};

export default findIndexes;
