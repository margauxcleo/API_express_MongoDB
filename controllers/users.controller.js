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

// modifier un utilisateur - en cours 
usersController.edit = function (req, res) {

    const id = req.params.id;
    const body = req.body;

    model.updateOne({ _id: id }, {
        $set: {
            nom: body.nom,
            prenom :body.prenom,
            adresse: body.adresse
        }
    }, { multi: true }, (error, result) => {
        if (error)
            throw error;

        res.json({
            status: 200,
            message: "Person updated successfully"
        });
    });
}


module.exports = usersController;