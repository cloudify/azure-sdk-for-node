// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '91d12660-3dec-467a-be2a-213b5544ddc0';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/skus?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S3\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":10,\"default\":1,\"scaleType\":\"Manual\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '475',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '6eaae2a7-d460-45eb-9f36-5382ea7eaf97',
  'x-ms-correlation-request-id': '6eaae2a7-d460-45eb-9f36-5382ea7eaf97',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T034252Z:6eaae2a7-d460-45eb-9f36-5382ea7eaf97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 03:42:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/skus?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S3\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":10,\"default\":1,\"scaleType\":\"Manual\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '475',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '6eaae2a7-d460-45eb-9f36-5382ea7eaf97',
  'x-ms-correlation-request-id': '6eaae2a7-d460-45eb-9f36-5382ea7eaf97',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T034252Z:6eaae2a7-d460-45eb-9f36-5382ea7eaf97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 03:42:51 GMT',
  connection: 'close' });
 return result; }]];