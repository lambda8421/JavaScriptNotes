async function getUser() {
  return new Promise((res,rej) => {
    return res({id:1,name:'user'});
    // return res({error:'error on getUser'});
  });
}

async function getFriendsFromUserId(id){
  return new Promise((res,rej) => {
    // return res([{id:2,name:'friends 2'}]);
    return res({error:'error on getFriendsFromUserId'});
  });
}

async function fetchUserAndFriends() {
  const res = await getUser();
  if (res.error){
    return new Promise(rej => rej(res));
  }

  const friends = await getFriendsFromUserId(res.id);
  if (friends.error){
    return new Promise(rej => rej(friends));
  }else {
    return new Promise(resolve => resolve(friends));
  }
}

fetchUserAndFriends().then(res=>console.log(res)).catch(err=>console.log(err))


function f() {
  return new Promise(resolve => resolve('dd')).then(x=>x+'cccc');
}

f().then(x=>console.log(x))
