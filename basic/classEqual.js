function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
  this.equals = function(other) {
    return other.rank == this.rank && other.suit == this.suit;
  };

  this.hashCode = function () {
    return this.rank + 'xyz' + this.suit;
  }
}

var queenOfClubs = new Card(12, "C");
var kingOfSpades = new Card(13, "S");

console.log(queenOfClubs.equals(kingOfSpades)); // => false
console.log(kingOfSpades.equals(new Card(13, "S"))); // => true


const map = new Map();

const c1 = new Card(1,'A');
const c2 = new Card(1,'A');
const c3 = new Card(3,'C');
map.set(c1,'A');
map.set(c2,'B');
map.set(c3,'C');

map.set({},'C');
map.set({},'C');

console.log(map);


let s = 'A';
let s1 = s;
s = 'B';

console.log(s1);

