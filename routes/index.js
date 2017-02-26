var express = require('express');
var router = express.Router();

var exchangeRatesToUSD = { 'EUR' : 0.95, 'JPY' : 112.14, 'USD' : 1}
var exchangeRatesToEUR = { 'USD' : 1.06, 'JPY' : 118.44, 'EUR' : 1}
var exchangeRatesToJPY = { 'EUR' : 0.0084, 'USD' : 0.0089, 'JPY' : 1}


router.get('/', function(req, res){
  res.render('index');
});

router.get('/convert', function(req, res){
  var amount = req.query.amount;
  var from_currency = req.query.from_currency;
  var to_currency = req.query.to_currency;
  if (from_currency == 'USD'){
    var rate = exchangeRatesToUSD[to_currency]}
  else if (from_currency == 'EUR'){
    var rate = exchangeRatesToEUR[to_currency]}
  else if (from_currency == 'JPY'){
    var rate = exchangeRatesToJPY[to_currency]}
  result = amount * rate;
  res.render('results', { amount : amount, from_currency : from_currency, result : result, to_currency : to_currency })
});

module.exports = router;
