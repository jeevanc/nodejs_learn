var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello express' });

});

//api route
router.get('/v1', function(req, res, next) {
  var movies = [
   {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
   {id: 102, name: "Inception", year: 2010, rating: 8.7},
   {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
   {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];
  res.json(movies);
});

//parameter api
router.get('/v1/:id',function(req,res,next){
var id  = req.params.id;
var movies = {
  101 : {
    name : 'Fight Club',
    year : 1989,
    rating : 8.1
  },
  102:{
    name:'Inception',
    year:2010,
    rating:8.7
  },
  103:{
    name:'The Dark Night',
    year:2008,
    rating:9
  }
}
res.json(movies[id]);
});



// delete api
router.delete('/v1/:id',function(req,res,next){
var id  = req.params.id;
var movies = {
  101 : {
    name : 'Fight Club',
    year : 1989,
    rating : 8.1
  },
  102:{
    name:'Inception',
    year:2010,
    rating:8.7
  },
  103:{
    name:'The Dark Night',
    year:2008,
    rating:9
  }
}
res.send({message: "Movie id " + req.params.id + " removed."})
});
module.exports = router;
