var express = require('express');
var path = require('path');

var tableData = require('./data/tableData');
var waitingListData = require('./data/waitingListData');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/tables.html'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/reserve.html'));
});

app.get('/api/tables', function(req, res) {
	res.json(tableData);
});

app.get('/api/waitlist', function(req, res) {
	res.json(waitingListData);
});

app.post('/api/tables', function(req, res) {
	if (tableData.length < 5) {
		tableData.push(req.body);
		res.json(true);
	} else {
		waitingListData.push(req.body);
		res.json(false);
	}
});

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
