const model = require('../models/users.model')();

const usersController = function () { }

// CODE NON FIABLE => PAS MAJ = COPIE PERSON 
usersController.showAll = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        res.json({
            status: 200,
            result,
            message: "Liste des users récupérée"
        })

    });
}

// UsersController.edit = function (req, res) {

//     var id = req.params.id;

//     PersonneModel.findPersonById(id, function (rows) {

//         if(rows==null){
//             req.flash('error','Sorry the company doesnot exists!!');
//             res.redirect('/');
//         }else{
//             res.render('forms.ejs', {
//                 personList: [],
//                 txtId: rows[0].id,
//                 txtNom: rows[0].nom,
//                 txtPrenom: rows[0].prenom,
//             });
//         }

//     });
// }

// UsersController.delete = function (req, res) {

//     var id = req.params.id;

//     PersonneModel.deletePerson(id, function (err, rows) {

//         if (err) {
//             req.flash('error', 'There was error in deleting data');
//         } else {
//             req.flash('success', 'Person deleted succesfully');
//         }

//         res.redirect('/');

//     });
// }

// UsersController.save = function (req, res, next) {

//     if (req.body.txtId == 0) {

//         var data = {
//             nom: req.body.txtNom,
//             prenom: req.body.txtPrenom
//         };

//         PersonneModel.savePerson(data, function (err, rows) {

//             if (err) {
//                 req.flash('error', 'There was error in inserting data');
//             } else {
//                 req.flash('success', 'Person added succesfully');
//             }

//             res.redirect('/');

//         });
//     }
//     else {

//         var data = {
//             id: req.body.txtId,
//             nom: req.body.txtNom,
//             prenom: req.body.txtPrenom
//         };

//         PersonneModel.updatePerson(req.body.txtId, data, function (err, rows) {

//             res.redirect('/');
        

//         });
//     }
// }

module.exports = usersController;