const https = require("https")
const xml = require("fast-xml-parser").XMLParser

// container imports
const azListContainers = require("./azure/rest/container/list")
const azCreateContainers = require("./azure/rest/container/create")
const azDeleteContainers = require("./azure/rest/container/delete")


/*
https.get('https://jsonplaceholder.typicode.com/users', res => {
  let data = []
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Stats code:', res.statusCode);
  console.log('Date in Response Header', headerDate);

  res.on('data', chunk => {data.push(chunk)})

  
  res.on('end', () => {
    console.log('Response ended: ');
    console.log(data);
    const users = JSON.parse(Buffer.concat(data).toString())
    console.log(users);
    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
*/

console.log("Node version: ", process.version);


// Containers
azListContainers(https, xml);
// azCreateContainers(https, xml, "helloworldasdf");
// azDeleteContainers(https, "helloworldasdf");

