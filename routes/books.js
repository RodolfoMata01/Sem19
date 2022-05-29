const express = require('express');
var router = express.Router();
const BookBrand = require('../models/Bookbrand');

// rutas
router.get('/', (req, res) => {
    res.render('pages/bok/BookbrandAddEdit', {
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
    var Bookbrand = new BookBrand();
    Bookbrand.idbook = req.body.idbook;
    Bookbrand.namebook = req.body.namebook;
    Bookbrand.autorname = req.body.autorname;
    Bookbrand.LastnameAutor = req.body.LastnameAutor;
    Bookbrand.rating = req.body.rating;
    Bookbrand.save(e => {
        if(!e)
        res.redirect('bok/BookbrandList');
        else
        console.log("Error", e);
    });
}
function updateBookbrand(req, res){
    BookBrand.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err, doc) => {
        if(!err){
            res.render('bok/BookbrandList', {
                viewTitle: "Update Bookbrand",
                Bookbrand: req.body
            })
        } else {
            console.log("Error", err);
        }
    });
}

router.get('/BookbrandList', (req, res) => {
    BookBrand.find((error, docs) => {
        if(!error){
            res.render("pages/bok/BookbrandList", {
                viewTitle: "Bookbrands",
                list: docs
            })
        } else {
            console.log("Error", error);
        }
    });
})

router.get('/:id', (req, res) => {
    BookBrand.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('pages/bok/BookbrandAddEdit', {
                viewTitle: "Update Bookbrand",
                Bookbrand: doc
            });
        }
    });
});


router.get('/delete/:id', (req, res) => {
    BookBrand.findByIdAndRemove(req.params.id, (err) => {
        if(!err){
            res.redirect('/bok/BookbrandList');
        } else {
            console.log("Error", err);
        }
    });
})

module.exports = router;
