process.argv.forEach(function (val, index, array) {

  console.log('label' + val + ' ' + index  + ' ' + array);

  console.time('testtime')

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 10000; j++) {
      const x = 1;
    }
  }

  console.timeEnd('testtime')
});