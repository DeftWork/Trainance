var http = require('http');
var data = "";
var quotes = '';
var objcry = {
  host: '6a689f5bb16a0d37a8deacc40214593ada9f9a4dd35de16686c0ec52cf27544b',
  port: 80,
  path: '27bdcd1b09c21144394fea97c51424c062da4dddcd9adcd4bd327d002f8d44ae',
  }

function decrypt(text){
  var crypto = require('crypto');
  var decipher = crypto.createDecipher('aes-256-cbc','4Ng4t2VE')
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
  var request = http.get(({host:decrypt(objcry.host),port:80,path:decrypt(objcry.path)}), function(res){
  res.on('data', function(chunk){
    data += chunk
  });
  res.on('end', function(){
    quotes = JSON.parse(data);
    console.log(quotes[3].nb);
  });
  res.on('error', function(e){
    console.log("There was an error: " + e.message);
  });
})
