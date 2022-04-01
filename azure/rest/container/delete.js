/**
 * @author Ítalo Pinto
 * @function Delete one container in the storage account
 * @param https the https nodejs module
 * @param name the name of the container to delete
*/

module.exports = (https, name) => {

  const URL_PARAMS = "restype=container";
  const URL = process.env.BLOB_STORAGE_URL;
  const HOSTNAME = URL.slice(8,41);
  const URI_DEFAULT_PARAMS = URL.slice(42);

  const options = {
    hostname: HOSTNAME,
    port: 443,
    path: `/${name}/` + URI_DEFAULT_PARAMS + URL_PARAMS,
    method: 'DELETE',
  }

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)  
  })

  req.on('error', error => {
    console.error(error)
  })

  req.end()

}