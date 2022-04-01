/**
 * @author Ítalo Pinto
 * @function Lists all the containers in the storage account
 * @param https the https nodejs module
 * @param xml a xml external module to parser the response body
 */

module.exports = (https, xml) => {

  const URL_PARAMS = "comp=list"
  const URL = process.env.BLOB_STORAGE_URL;
  
  https.get(URL + URL_PARAMS, res => {
    console.log('Status code:', res.statusCode);

    let resBody;

    res.on('data', chunk => {resBody = chunk});
    
    res.on('end', () => {

      const xmlDoc = resBody.toString();
      const parser = new xml();
      const xmlDocParsed = parser.parse(xmlDoc);
      
      const obj = xmlDocParsed.EnumerationResults.Containers.Container;
      console.log(obj);
      console.log(typeof obj);

      // ajeitar a lógica: quando tiver um só resultado, não cabe uso do for...in
      // pensar em algum if...else para ajeitar isso
      console.log('Containers:');
      for (const key in obj) {
        const res = `\t${obj[key].Name}`;
        if (res != undefined){
          console.log(res);
        } else {
          console.log(obj.Name);
        }
      }
    });

  }).on('error', err => {
    console.log('Error: ', err.message);
  });
}

// como lidar com o xml que vem como resposta da requisição?