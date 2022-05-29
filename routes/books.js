const express = require('express');
var router = express.Router();
const Bookbrand = require('../models/Bookbrand');

// rutas
router.get('/', (req, res) => {
    res.render('pages/Bookbrand/BookbrandAddEdit', {
        viewTitle: "New Patrons"
    });
});

router.post('/', (req, res) => {
    if(req.body._id == '')
    insertBookbrand(req, res)
    else
    updateBookbrand(req, res)
});

//metodos para insertar y actualizar
function insertBookbrand(req, res){
    var Bookbrand = new Bookbrand();
    Bookbrand.idbook = req.body.idbook;
    Bookbrand.namebook = req.body.namebook;
    Bookbrand.autorname = req.body.autorname;
    Bookbrand.LastnameAutor = req.body.LastnameAutor;
    Bookbrand.rating = req.body.rating;
    Bookbrand.save(e => {
        if(!e)
        res.redirect('Bookbrand/BookbrandList');
        else
        console.log("Error", e);
    });
}
function updateBookbrand(req, res){
    Brand.findOneAndUpdate({idbook: req.body.idbook}, req.body, {new:true}, (err, doc) => {
        if(!err){
            res.render('Bookbrand/BookbrandList', {
                viewTitle: "Update Bookbrand",
                brand: req.body
            })
        } else {
            console.log("Error", err);
        }
    });
}

router.get('/BookbrandList', (req, res) => {
    Brand.find((error, docs) => {
        if(!error){
            res.render("pages/Bookbrand/BookbrandList", {
                viewTitle: "Bookbrands",
                list: docs
            })
        } else {
            console.log("Error", error);
        }
    });
})

router.get('/:idbook', (req, res) => {
    Brand.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('pages/Bookbrand/BookbrandAddEdit', {
                viewTitle: "Update Bookbrand",
                brand: doc
            });
        }
    });
});


router.get('/delete/:idbook', (req, res) => {
    Brand.findByIdAndRemove(req.params.id, (err) => {
        if(!err){
            res.redirect('/Bookbrand/BookbrandList');
        } else {
            console.log("Error", err);
        }
    });
})

module.exports = router;
