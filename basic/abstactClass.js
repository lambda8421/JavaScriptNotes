class Car {
  constructor() {
    console.log(new.target);

    if (new.target === Car) {
      console.log('not allowed')
      // throw new Error(" not allowed")
    }
  }
}

const car = new Car();

console.log(car);


//Abstract base class
class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new Error('Vehicle cannot be directly instantiated');
    }
    if (!this.foo) {
      throw new Error('Inheriting class must define foo()');
    }
    console.log('success!');
  }
}

class Benz extends Vehicle{
  constructor() {
    super();
  }

  foo() {}
}

class Bus extends Vehicle{

}

const benz = new Benz();
const bus = new Bus();