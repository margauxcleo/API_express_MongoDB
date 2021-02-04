module.exports = function(){
    const db = require('../db/db')();
    const Schema = require('mongoose').Schema;

    // on a besoin de créer un Schema, contrairement à MySQL 
    // dans MySQL, on peut utiliser les tables 
    // mais étant donné qu'on est dans une structure en JSON avec Mongo, 
    // on a besoin d'établir le schéma de l'objet 
    const users = Schema({
        nom: String,
        prenom: String,
        adresse: String
    });

    return db.model('users', users);
}