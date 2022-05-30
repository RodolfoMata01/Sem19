const express = require('express');
var router = express.Router();
const transBrand = require('../models/transbrand');

// rutas
router.get('/', (req, res) => {
    res.render('pages/trans/transAddEdit', {
        viewTitle: "New transaccion"
    });
});

router.post('/', (req, res) => {
    if(req.body._id == '')
    insertTrans(req, res)
    else
    updateTrans(req, res)
});

//metodos para insertar y actualizar
function insertTrans(req, res){
    var tranbrand = new transBrand();
    tranbrand.idbrand = req.body.idbrand;
    tranbrand.idbook = req.body.idbook;
    tranbrand.date = req.body.date;
    tranbrand.type = req.body.type;
    tranbrand.save(e => {
        if(!e)
        res.redirect('trans/transList');
        else
        console.log("Error", e);
    });
}
function updateTrans(req, res){
    transBrand.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err, doc) => {
        if(!err){
            res.render('trans/transList', {
                viewTitle: "Update Trans",
                tranbrand: req.body
            })
        } else {
            console.log("Error", err);
        }
    });
}

router.get('/transList', (req, res) => {
    transBrand.find((error, docs) => {
        if(!error){
            res.render("pages/trans/transList", {
                viewTitle: "Transactions",
                list: docs
            })
        } else {
            console.log("Error", error);
        }
    });
})

router.get('/:id', (req, res) => {
    transBrand.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render('pages/trans/transAddEdit', {
                viewTitle: "Update transaction",
                tranbrand: doc
            });
        }
    });
});


router.get('/delete/:id', (req, res) => {
    transBrand.findByIdAndRemove(req.params.id, (err) => {
        if(!err){
            res.redirect('/trans/transList');
        } else {
            console.log("Error", err);
        }
    });
})

module.exports = router;
