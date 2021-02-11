var http = require('http');
var url = require('url');

var fs = require('fs');
const express = require('express')
const app = express()

app.get('/alhaj', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello alhaj')
})

app.get('/devil', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello devil')
})

app.listen(8080)