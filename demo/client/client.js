const {EchoRequest, EchoResponse} = require('../pb/echo_pb.js');
// const grpc = require('@grpc/grpc-js');
const {EchoServiceClient} = require('../pb/echo_grpc_web_pb.js');
// const fs = require('fs');
// import * as path from 'path';


// const rootCert = require('./ssl/ca-cert.pem');
  
  // If you use CA root certificate
  // const channelCredentials = grpc.credentials.createSsl();

  // If you use Self-Signed root certificate you need to provide it
// const channelCredentials = grpc.credentials.createSsl(rootCert);

// var echoService = new EchoServiceClient('0.0.0.0:8080', channelCredentials);
// grpc.credentials.withCredentials
// const creds = grpc.credentials.createSsl();
var echoService = new EchoServiceClient('https://0.0.0.0:8080', null, {
    'withCredentials': true
  });

var request = new EchoRequest();
request.setMessage('Hello World!');

const metadata = {'custom-header-1': 'value1'};

echoService.echo(request, metadata, function(err, response) {
    try {
        console.log(response.getMessage(), 11111);
    } catch (error) {
        console.log(err, 222)
    }
    
});

// certFile := "ssl/server.crt"
// 	creds, sslErr := credentials.NewClientTLSFromFile(certFile, "localhost")
// 	if sslErr != nil {
// 		log.Fatalf("create client creds ssl err %v\n", sslErr)
// 		return
// 	}

// 	cc, err := grpc.Dial("localhost:5000", grpc.WithTransportCredentials(creds))
