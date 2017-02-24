var express = require('express');
var app = new express();
var http = require('http');
var router = express.Router();
var domain = 'http://op.juhe.cn/189/bus/';
var key = '8229e8e1c79890c2606c502e72c48fd4';

router.get('/',function(req,res){
	res.send('router worked!');
})

router.get('/bus/:city/:bus',function(req,res){
	var url = domain + 'busline?key=' + key + '&city=' + encodeURI(req.params.city) + '&bus=' + encodeURI(req.params.bus);
	console.log(url);
	var html = '';
	http.get(url, function(_req,_res){
		_req.on('data',function(_data){
			html += _data;
		});
		_req.on('end',function(){
			res.send(html);
		})
	})
})

router.get('/station/:city/:station',function(req,res){
	var url = domain + 'station?key=' + key + '&city=' + encodeURI(req.params.city) + '&station=' + encodeURI(req.params.station);
	console.log(url);
	var html = '';
	http.get(url, function(_req,_res){
		_req.on('data',function(_data){
			html += _data;
		});
		_req.on('end',function(){
			res.send(html);
		})
	})
})

module.exports = router;