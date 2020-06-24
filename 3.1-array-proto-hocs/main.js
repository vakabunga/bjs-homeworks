function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500);
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);
}

function memorize(fn, limit) {
  const memory = [];
  return (...args) => {
    const result = memory.find(item => {
      console.log('this is item');
      console.log(item);
      console.log(item.args);
      console.log('this is Array from args');
      console.log(Array.from(args));
      compareArrays(item.args, Array.from(args));
      console.log('compareArrays');
      console.log(compareArrays(item.args, Array.from(args)));
    });
    console.log(result);
    if (result) {
      console.log('this is memory');
      console.log(memory);
      console.log('Результат взят из памяти');
      return result.result;
    } else {
      const newResult = fn(...args);
      memory.push({ args: Array.from(args), result: newResult });
      if (memory.length > limit) memory.shift();
      console.log('this is memory');
      console.log(memory);
      console.log('Это новый результат');
      return newResult;
    }
  };
}
