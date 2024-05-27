var express = require('express');
var mongoose = require("mongoose");

var cheerio = require('cheerio');
var axios = require('axios');
var models = require('./models');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8000;

app.use(express.static('public_prototype'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SampleX";
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

mongoose.connect(MONGODB_URI, function(err) {
    if (err) throw err;
    console.log('Database connected')
});

// Dow Page

// Dow additiives 
// Dow Industrial

// Exxon Page

// Exxon Plasticizers
// Exxon Adhesives
// Exxon Agriculture

// 3M Pages

// 3M Chemicals
// 3M Adhesives
// 3M Tapes
// 3M Films



app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/public_prototype/index.html'));
});

app.get('/products', function(req,res){
    models.Product.find({}).then( (products) => {
        res.send(products);
    });
});

app.get('/scrape', function(req, res){
    
   
axios.all([

    //Dow Pages
    axios.get("https://www.dow.com/en-us/industries/industrial-and-infrastructure/paints-and-coatings/additives"),
    axios.get("https://www.dow.com/en-us/industries/industrial-and-infrastructure/paints-and-coatings/industrial"),

    // Exxon Pages
    axios.get("https://www.exxonmobilchemical.com/en/products-and-services/plasticizers"),
    axios.get("https://www.exxonmobilchemical.com/en/solutions-by-industry/adhesives-and-sealants/hot-melt-adhesives"),
    axios.get("https://www.exxonmobilchemical.com/en/solutions-by-industry/agriculture/crop-protection"),

    // 3m Pages
    axios.get("https://www.3m.com/3M/en_US/p/"),


]).then(axios.spread(function (res1, res2, res3, res4, res5, res6, res7, res8, res9) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    const $1 = cheerio.load(res1.data);
    const $2 = cheerio.load(res2.data);
    const $3 = cheerio.load(res3.data);
    const $4 = cheerio.load(res4.data);
    const $5 = cheerio.load(res5.data);
    const $6 = cheerio.load(res6.data);
    const $7 = cheerio.load(res7.data);
    const $8 = cheerio.load(res8.data);
    const $9 = cheerio.load(res9.data);


    //Dow Chemicals

    $1(".cl-band-flex").each(function (i, e) {
        console.log($1(this).find("h3").text().trim());
        console.log($1(this).find("a").attr("href"));
        models
        .Product
        .create({name: $1(this).find("h3").text().trim(), link: $1(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })

    });

    $2(".cl-rtf").each(function (i, e) {
        console.log($2(this).find("h3").text().trim());
        console.log($2(this).find("a").attr("href"));
        models
        .Product
        .create({name: $2(this).find("h3").text().trim(), link: $2(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })
    });

    //Exxon Mobil

    $3(".surfaced-item-copy").each(function (i, e) {

        console.log($3(this).find("h3").text().trim());
        console.log($3(this).find("a").attr("href"));
        models
        .Product
        .create({name: $3(this).find("h3").text().trim(), link: $3(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })

    });


    $4(".surfaced-item-copy").each(function (i, e) {

        console.log($4(this).find("h3").text().trim());
        console.log($4(this).find("a").attr("href"));
        models
        .Product
        .create({name: $4(this).find("h3").text().trim(), link: $4(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })

    });

    $5(".surfaced-item-copy").each(function (i, e) {

        console.log($5(this).find("h3").text().trim());
        console.log($5(this).find("a").attr("href"));
        models
        .Product
        .create({name: $5(this).find("h3").text().trim(), link: $5(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })

    });

    //3M Science

    $6(".SNAPS--prdtTitleContent").each(function (i, e) {
        console.log($6(this).find("span").text().trim());
        console.log($6(this).find("a").attr("href"));
        models
        .Product
        .create({name: $6(this).find("span").text().trim(), link: $6(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })
    });

    $7(".SNAPS--prdtTitleContent").each(function (i, e) {
        console.log($7(this).find("span").text().trim());
        console.log($7(this).find("a").attr("href"));
        models
        .Product
        .create({name: $7(this).find("span").text().trim(), link: $7(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })
    });

    $8(".SNAPS--prdtTitleContent").each(function (i, e) {
        console.log($8(this).find("span").text().trim());
        console.log($8(this).find("a").attr("href"));
        models
        .Product
        .create({name: $8(this).find("span").text().trim(), link: $8(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })
    });

    $9(".SNAPS--prdtTitleContent").each(function (i, e) {
        console.log($9(this).find("span").text().trim());
        console.log($9(this).find("a").attr("href"));
        models
        .Product
        .create({name: $9(this).find("span").text().trim(), link: $9(this).find("a").attr("href") })
        .then((result)=> {
            console.log("Product created");
        }).catch(err => {
            console.log(err);
        })
    });

}));

    res.send('You got a bunch of cool products! Go back to the Home page and then Product page!');
});


app.post('/save', function(req, res){
    console.log(req.body, "this should be id of product");
    models.Product.findByIdAndUpdate( req.body._id, {saved: true})
    .then(result => res.send("saved"));
 
})
app.get('/saved', function(req, res){
    models.Product.find({saved: true}).then(result => res.send(result));
})

app.post('/delete', function(req, res){
    console.log(req.body);
    models.Product.findByIdAndUpdate( req.body._id, {saved: false})
    .then(result => res.send("saved"));
 
})

app.listen(PORT, function(){
    console.log('listening on port '  + PORT)
})
