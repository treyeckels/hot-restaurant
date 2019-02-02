var express = require('express');
var tableData = require('./data/tableData');
var waitingListData = require('./data/waitingListData');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/api/tables', function(req, res) {
	res.json(tableData);
});

app.get('/api/waitlist', function(req, res) {
	res.json(waitingListData);
});

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
