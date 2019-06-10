function* generator() {
  yield 'x';
  yield 'y';
  yield 'z';
}


for (let value of generator()){
  console.log(value);
}

const it = generator();
console.log(it.next());

function* WarriorGenerator(){
  yield "Sun Tzu";
  yield* NinjaGenerator();
  yield "Genghis Khan";
}
function* NinjaGenerator(){
  yield "Hattori";
  yield "Yoshi";
}
for(let warrior of WarriorGenerator()){
  console.log(warrior);
}

/*
another example of generator
 */

function* actionGenerator(action) {
  const xyz = 'xyz';
  const value = yield (action + 'G');
  yield (value + action + 'G');
}

const test1 = actionGenerator('Test1');

const result1 = test1.next();

const result2 = test1.next('test2');

console.log(test1);
console.log(result1);
console.log(result2);
const result3 = test1.next('test3');
console.log(result3);


function* WeaponGenerator(){
  yield "Weapon Katana";
  yield "Weapon Wakizashi";
}

const weaponsIterator = WeaponGenerator();
let item;
while(!(item = weaponsIterator.next()).done) {
  console.log(item.value);
}

/*
  test generator.next
 */

function* testGeneratorNext() {
  yield 'testGeneratorNext 1';
  yield 'testGeneratorNext 2';
  yield 'testGeneratorNext 3';
}

const nextIt = testGeneratorNext();
const i = nextIt.next();
console.log(i);
console.log(nextIt.next());
/*
unique id of generator
 */

function* uniqueId() {
  let id = 0;
  while (true){
    yield ++id;
  }
}

uniqueId();

/*
traverse tree
 */