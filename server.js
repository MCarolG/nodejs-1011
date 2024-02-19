//let a = "hola";
//var b = "Mundo";
//const resultado = a + " " + b;
//console.log(resultado);

const http = require('http');
const miPrimerModulo = require('./miPrimeroModulo');
const url = require('url');


http.createServer( function (req, res){

    const saludo = miPrimerModulo.sayHello("Carolina")
    const resultadoSuma = miPrimerModulo.suma(5,10);
    const urlInfo = req.url;
    const q = url.parse(req.url, true).query;
    const suma = miPrimerModulo.suma(parseFloat(q.num1), parseFloat(q.num2));

    //res.write("<h1>"+ucs2.upperCase( saludo )+"</h1>");
    res.write("<h1>"+saludo+"</h1>");
    res.write(`<p>Esta es la informacion de la URL ${urlInfo} </p>`)
    res.write(`<p>Resultado de Sumas de Parametros ${suma} </p>`)
    res.end("Resultado de suma = " +resultadoSuma)

    //res.end("<h1>"+saludo+"</h1>");

    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end("<h1>Hola Mundo</h1>");

}).listen(5000);