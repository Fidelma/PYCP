// personController.js
// Import person model
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
            message: "People retrieved successfully",
            data: people
        });
    });
    // Person.count({}, function (err, count) {
    //     if (err) {
    //         res.json({
    //             status: "error",
    //             message: err,
    //         });
    //     }
    //     res.json({
    //         status: "success",
    //         message: "People retrieved successfully",
    //         count: count
    //     });
    // });
};

// Handle create contact actions
exports.new = function (req, res) {
    var person = new Person();
    console.log(req.body);
    person.name = req.body.name;
    person.name.firstName = req.body.name.firstName;
    person.name.lastName = req.body.name.lastName;
    person.gender = req.body.gender;
    person.dob = req.body.dob;
    person.address = req.body.address;
    person.address.address = req.body.address.address;
    person.address.postcode = req.body.address.postcode;
    person.primaryContact = req.body.primaryContact;
    person.emergencyContact = req.body.emergencyContact;
    person.emergencyContact.name = req.body.emergencyContact.name;
    person.emergencyContact.relationship = req.body.emergencyContact.relationship;
    person.emergencyContact.number = req.body.emergencyContact.number;
    person.emails = req.body.emails;
    person.dietaryRequirements = req.body.dietaryRequirements;
    person.dietaryRequirements.exists = req.body.dietaryRequirements.exists;
    person.dietaryRequirements.details = req.body.dietaryRequirements.details;
    person.medicalConditions = req.body.medicalConditions;
    person.medicalConditions.exists = req.body.medicalConditions.exists;
    person.medicalConditions.details = req.body.medicalConditions.details;
    person.medicalConditions.medications = req.body.medicalConditions.medications;
    person.allergies = req.body.allergies;
    person.allergies.exists = req.body.allergies.exists;
    person.allergies.allergens = req.body.allergies.allergens;
    person.allergies.other = req.body.allergies.other;
    person.doctorsSurgery = req.body.doctorsSurgery;
    person.community = req.body.community;
    person.school = req.body.school;
    person.school.name = req.body.school.name;
    person.school.year = req.body.school.year;
    person.photographyPermission = req.body.photographyPermission;
    person.pickUp = req.body.pickUp;
    person.pickUp.toBeCollected = req.body.pickUp.toBeCollected;
    person.pickUp.byWho = req.body.pickUp.byWho;
    person.siblings = req.body.siblings;
    person.siblings.exists = req.body.siblings.exists;
    // person.siblings.siblings = req.body.siblings.siblings;
    // person.siblings.siblings.type = req.body.siblings.siblings.type;
    person.ethnicity = req.body.ethnicity;
    person.volunteering = req.body.volunteering;
    person.signed = req.body.signed;
    person.signed.signed = req.body.signed.signed;
    person.signed.name = req.body.signed.name;
    person.signed.relationship = req.body.signed.relationship;
    // person.signed.date = req.body.signed.date;
    person.banana = req.body.timeOut;
    console.log(person);
    person.timeOut.exists = req.body.timeOut.exists;
    person.test.type = req.body.test.type;
    person.test.notes = req.body.test.notes;



// save the person and check for errors
    person.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New person created!',
            data: person
        });
    });
};
// Handle view people info
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
            person.gender = req.body.gender;
            person.dob = req.body.dob;
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
