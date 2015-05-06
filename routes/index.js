var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var products = require('../controllers/products');
var server = require('../controllers/server');
var statichtml = require('../controllers/statichtml');
var nunjucks = require('nunjucks');
var env = nunjucks.configure('views');
env.express(express());
	
/* GET home page. */
router.get('/', index.getHomePage);

/* Get products lists */
router.get('/list/:id',products.getListById);

/* handler post */
router.post('/post', server.post);

/* handler static htmls */
router.post('/pushhtml', statichtml.pushHtml);

/* err handlelar */
// router.get('*', index.handleErr);
module.exports = router
