
const promise = new Promise((res,rej)=>{
    res('res');
}).then(x=>{
    return 'XX';
});

promise.then(x=>console.log(x))





