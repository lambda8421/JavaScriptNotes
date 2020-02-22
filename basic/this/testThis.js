const obj1 = {
  test(){
    console.log(this.name)
  },
  name:'name'
}
const obj2 = {
  test:()=>{
    console.log(this.name)
  },
  name:'name'
}

const obj3 = {
  test:function (){
    console.log(this.name)
  },
  name:'name'
}

obj1.test()
obj2.test()
obj3.test()
