function getUser() {
  return Promise.resolve({id:1,name:'user'});
}

async function getFriends() {
  const res = await getUser();
  console.log(res);
  return new Promise((resolve,reject)=>{
    if (res.id){
      resolve({id:2,name:'friends 1'});
    }else {
      reject({error:'Error'});
    }
  })
}

getFriends().then(x=>console.log(x)).catch(e=>console.log(e));