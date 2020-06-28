function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
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
    const result = memory.find((item) => {
      return compareArrays(item.args, Array.from(args));
    });
    // console.log(result);
    if (result) {
      // console.log('Результат взят из памяти');
      return result.result;
    } else {
      const newResult = fn(...args);
      memory.push({ args: Array.from(args), result: newResult });
      if (memory.length > limit) memory.shift();
      // console.log('Это новый результат');
      return newResult;
    }
  };
}

function testCase(testFunction, timer) {
  const testArray = [
    [1, 2, 3],
    [1, 2],
    [1, 2, 3],
    [1, 2],
    [9, 5, 2, 4],
  ];
  console.time(timer);
  for (let i = 0; i < 100; i++) {
    testArray.forEach((elem) => testFunction(...elem));
  }
  console.timeEnd(timer);
}

const mSum = memorize(sum, 5);

testCase(sum, 'timer of sum');

testCase(mSum, 'timer of mSum');
