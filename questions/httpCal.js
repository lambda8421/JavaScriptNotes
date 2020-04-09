// const https = require('https');
// const options = {
//   hostname: 'https://jsonmock.hackerrank.com',
//   port: 8080,
//   path: '/api/countries?page=1',
//   method: 'GET'
// }
//
// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)
//
//   res.on('data', d => {
//     console.log(res)
//   })
// })
//
// req.on('error', error => {
//   console.error(error)
// })
//
// req.end()

const https = require('https');

base_url = `https://jsonmock.hackerrank.com/api/countries?page=1`;

function getTotalPages() {
  let url = `${base_url}`;
  return new Promise((resolve, reject) => {
    https.get(url, res => {

      let response = "";

      res.on('data', chunk => {
        response += chunk;
      });

      res.on('end', _ => {
        // First request to determine the pagination
        resolve(JSON.parse(response).total_pages);
      });
    }).on('error', err => reject(err));
  })
}

function getCountriesPerPage(url){
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let response = "";
      res.on('data', chunk => {
        response += chunk;
      });

      res.on('end', _ => {
        resolve(JSON.parse(response).data);
      });
    }).on('error', err => reject(err))
  });
}

 async function  findCode(code){

  const pages = await getTotalPages();
   let index = 1;
   let data = [];
   while (index <= pages){
     const pageData = await getCountriesPerPage(`https://jsonmock.hackerrank.com/api/countries?page=${index}`);
     data = [...data,...pageData];
     index++;
   }


   return  data.find(d=>d.alpha2Code === code).name;
}



findCode('AF').then(code=>console.log(code));