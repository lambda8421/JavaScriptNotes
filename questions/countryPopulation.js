let base_url = `https://jsonmock.hackerrank.com/api/countries/search`;

let https = require('https');

function arrayContainsElement(arr, ele) {
  for (let item of arr) {
    if (item.name === ele.name)
      return true;
  }
  return false;
}

function getTotalPages(s) {
  let url = `${base_url}?name=${s}`;

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

function getCountriesPerPage(s, page) {
  let url = `${base_url}?name=${s}&page=${page}`;

  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let response = "";
      res.on('data', chunk => {
        response += chunk;
      })

      res.on('end', _ => {
        resolve(JSON.parse(response).data);
      });
    }).on('error', err => reject(err))
  });
}

function getCountries(s, p) {
  getTotalPages(s).then(total_pages => {
    let current_page = 1;
    let q = [];
    while(current_page <= total_pages) {
      q.push(getCountriesPerPage(s, current_page));
      current_page++;
    }
    Promise.all(q)
      .then(countries_pages => {
        let res = [];
        let count = 0;
        // Determine not repeated countries
        for (let countries of countries_pages) {
          for (let country of countries) {
            if (!arrayContainsElement(res, country))
              res.push(country);
          }
        }

        for (let item of res) {
          if (item.population > p)
            count++;
        }
        console.log(count);
      })
      .catch(err => console.log(err));

  })
    .catch(err => console.log(err))
}

getCountries("ar", 1000001);