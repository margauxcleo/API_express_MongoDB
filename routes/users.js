const express = require('express');
const db = require('../db/db');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/showAll', usersController.showAll);

router.post('/add', usersController.save);

router.get('/edit/:id', usersController.edit);

router.get('/delete/:id', usersController.delete);

module.exports = router;



// router.post('/add', (req, res) => {

//     var data = {
//         nom: req.body.nom,
//         prenom: req.body.prenom
//     };

//     db.query("Insert into personne set ? ", data,
//         function (err, rows) {
//             if (err) throw err;
//             console.log("Insertion reussie");
//             res.json({
//                 status: 200,
//                 message: "New person added successfully"
//             })
//         });

// });

// router.put('/update', (req, res) => {

//     var data = {
//         id: req.body.id,
//         nom: req.body.nom,
//         prenom: req.body.prenom
//     };

//     db.query('UPDATE personne SET ? WHERE id = ' + data.id, data,
//         function (err, rows) {
//             if (err) throw err;
//             console.log("Mise à jour reussie");
//             res.json({
//                 status: 200,
//                 message: "Person updated successfully"
//             })
//         });

// });

// router.get('/select/:id', (req, res) => {

//     var id = req.params.id;

//     db.query('SELECT * FROM personne WHERE id = "' + id + '"',
//         function (err, rows) {
//             if (err) throw err;

//             res.json({
//                 rows,
//                 status: 200,
//                 message: " person selected successfully"
//             })
//         });
// });

// router.delete('/delete/:id', (req, res) => {

//     var id = req.params.id;

//     db.query('DELETE FROM personne WHERE id = "' + id + '"',
//         function (err, rows) {
//             if (err) throw err;
//             console.log("Suppression reussie");
//             res.json({
//                 status: 200,
//                 message: " person deleted successfully"
//             })
//         });
// });
