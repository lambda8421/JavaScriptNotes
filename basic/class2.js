class StaffList {
  //add your code here
  constructor(){
    this.map = new Map();
  }

  add(name,age){
    console.log(this)
    if(age <= 20){
      throw new Error('Staff memeber age must be greater than 20');
    }else{
      if(!this.map.has(name)){
        this.map.set(name,age);
      }
    }
  }

  remove(name){
    if(this.map.has(name)){
      this.map.delete(name);
      return true;
    }else{
      return false;
    }
  }

  getSize(){
    return this.map.size;
  }
}

const s = new StaffList();
s.add('ll',21);
console.log(s)