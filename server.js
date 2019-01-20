var express = require('express');

var cheerio = require('cheerio');
var axios = require('axios');
var app = express();

var PORT = process.env.PORT || 3000;





app.get('/scrape', function(req, res){
    axios.get('https://www.3m.com/').then(result => {
        console.log(result);
        const $ = cheerio.load(result);
        const products =  $('js-ajax-target');
        console.log(products);

    })
    res.send('scrape complete');
});









app.listen(PORT, function(){
    console.log('listening on port '  + PORT)
})
