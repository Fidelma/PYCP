// contactController.js
// Import contact model
Person = require('../models/personModel');
// Handle index actions
exports.index = function (req, res) {
    Person.get(function (err, people) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: people
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var person = new Person();
    person.name = req.body.name;
    person.gender = req.body.gender;
    person.dob = req.body.dob;
    person.address = req.body.address;
    person.primaryContact = req.body.primaryContact;
    person.emergencyContact = req.body.emergencyContact;
    person.email = req.body.email;
    person.dietaryRequirements = req.body.dietaryRequirements;
// save the contact and check for errors
    person.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New person created!',
            data: person
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Person.findById(req.params.person_id, function (err, person) {
        if (err)
            res.send(err);
        res.json({
            message: 'Person details loading..',
            data: person
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Person.findById(req.params.person_id, function (err, person) {
        if (err)
            res.send(err);
            person.name = req.body.name;
            person.gender = req.body.gender;
            person.dob = req.body.dob;
            person.address = req.body.address;
            person.primaryContact = req.body.primaryContact;
            person.emergencyContact = req.body.emergencyContact;
            person.email = req.body.email;
            person.dietaryRequirements = req.body.dietaryRequirements;
// save the contact and check for errors
        person.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Person Info updated',
                data: person
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Person.remove({
        _id: req.params.person_id
    }, function (err, person) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Person deleted'
        });
    });
};
