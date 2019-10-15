// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var activityController = require('./controllers/activityController');
var personController = require('./controllers/personController');
// Activity routes
router.route('/activities')
    .get(activityController.index)
    .post(activityController.new);
router.route('/people')
    .get(personController.index)
    .post(personController.new);
router.route('/activities/:activity_id')
    .get(activityController.view)
    .patch(activityController.update)
    .put(activityController.update)
    .delete(activityController.delete);
// Export API routes
module.exports = router;
