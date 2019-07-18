function PriorityQueue() {
    this.dataStore = [];
    this.deque = function(){
        return this.dataStore.splice(0,1);
    };

    this.enque = function(p){
        if (this.dataStore.length === 0) this.dataStore.push(p);
        let contain = false;
        for (let i = 0; i < this.dataStore.length; i++){
            if (p.code > this.dataStore[i].code){
                this.dataStore.splice(i,0,p);
                contain = true;
                break;
            }
        }
        if (!contain) this.dataStore.push(p);
    }

}

function Person(code,name) {
    this.code = code;
    this.name = name;
}

let p1 = new Person(1,'A');
let p2 = new Person(3,'C');
let p3 = new Person(4,'B');
let p4 = new Person(2,'D');

const pq = new PriorityQueue();

pq.enque(p1);
pq.enque(p2);
pq.enque(p3);
pq.enque(p4);

console.log(pq.deque());
console.log(pq.deque());
