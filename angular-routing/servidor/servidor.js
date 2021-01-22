const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

let lista = [];

lista.push({ "id": "3", "concepto": "auriculares", "importe": "200", "categoria": "Informática" });
lista.push({ "id": "4", "concepto": "patines", "importe": "300", "categoria": "Deportes" });

app.get('/productos', (req, res) => {
  res.send(lista)
})


app.get('/productos/filtro', function (req, resp) {
  resp.send(lista);
})


app.get('/productos/detalle/:id', function (req, resp) {

  let listaFiltrada = lista.filter(function (item) {
    return item.id == req.params.id;
  });
  resp.send(listaFiltrada[0]);
})



app.get('/productos/filtro/:concepto', function (req, resp) {

  let listaFiltrada = lista.filter(function (item) {
    return item.concepto.startsWith(req.params.concepto);
  });
  resp.send(listaFiltrada);
})


app.delete('/productos/:id', function (req, res) {

  console.log("Delete product will be: " + req.path);
  //selecciono el elemento a borrar
  let seleccionado = lista.filter(function (elemento) {
    console.log(`el id es: ${req.params.id}`);
    return elemento.id == req.params.id;
  })[0];

  //localizo su posición
  let indice = lista.indexOf(seleccionado);
  //borro el elemento
  lista.splice(indice, 1);
  //envío el status code
  res.status(204).send();

})

app.post('/productos', function (req, res) {
  lista.push(req.body);
  res.status(201).send();
})

app.put('/productos/:id', function (req, res) {

  var bodyReq = req.body;
  console.log(`to be updated is ${JSON.stringify(bodyReq)}`)
  let toBeUpdated = lista.filter(function (product) {
    return product.id == bodyReq.id;
  })[0];
  //esta es el update
  let indice = lista.indexOf(toBeUpdated);
  lista[indice] = bodyReq;
  res.status(200).send();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
