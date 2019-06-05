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


function forEach(list, callback) {
  for (var n = 0; n < list.length; n++) {
    callback.call(list[n], n);
  }
}

var weapons = [{ type: 'shuriken' },{ type: 'katana' },{ type: 'nunchucks' }];

forEach(weapons, function (index) {
  console.log(this === weapons[index])
});