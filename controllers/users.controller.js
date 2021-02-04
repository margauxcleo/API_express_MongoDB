const model = require('../models/users.model')();

const usersController = function () { }

// Afficher tous les users - ok 
usersController.showAll = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        res.json({
            status: 200,
            result,
            message: "Liste des utilisateurs récupérée"
        })

    });
}

// Ajouter un utilisateur - ok 
usersController.save = function (req, res) {

    const body = req.body;
    body.status = false;

    model.create(body, (err, result) => {
        if (err) { console.log(err); }

        res.json({
            status: 200,
            message: "Nouvel utilisateur créé."
        });
    });
}

// supprimer un utilisateur - ok
usersController.delete = function (req, res) {

    const id = req.params.id;

    model.deleteOne({ _id: id }, (err, result) => {
        if (err) { console.log(err); }
        
        res.json({
            status: 200,
            message: "Utilisateur supprimé."
        });
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


module.exports = usersController;