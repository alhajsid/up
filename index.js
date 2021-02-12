var http = require('http');
var url = require('url');
var AWS = require('aws-sdk');

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

AWS.config.update({ 
    accessKeyId: ':)))',
    secretAccessKey: ':DDDD',
    region: 'ap-south-1',
    signatureVersion: 'v4'
});

const s3 = new AWS.S3()
const myBucket = ':)))))'
const myKey = ':DDDDDD'
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
});

console.log(url);

app.listen(8080)