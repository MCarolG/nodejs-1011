//let a = "hola";
//var b = "Mundo";
//const resultado = a + " " + b;
//console.log(resultado);

const http = require('http');

http.createServer( function (req, res){

    res.end("Hola Mundo");

}).listen(5000);