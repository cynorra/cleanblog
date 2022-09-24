const express = require('express');
const pageController = require('../controllers/pageController');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/post').get(postController.getpost);
router.route('/contact').get(pageController.getContactPage);
router.route('/createpost').get(pageController.getCreatePostPage);
router.route('/createpost').post(postController.publishpost);
/*
router.route('/createaccount').get(pageController.getCreateAccountPage);
router.route('/createaccount').post(userController.createAccount);
*/
router.route('/loginaccount').get(pageController.getLoginAccountPage);
router.route('/loginaccount').post(userController.loginAccount);
router.route('/logoutaccount').get(userController.logoutAccount);
router.route('/contact').post(contactController.sendcontact);
router.route('/contacts').get(contactController.getcontacts);





module.exports = router;