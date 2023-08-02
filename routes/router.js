const express = require('express');
const router = express.Router();
const { getAllListing, getListingById } = require('../controllers/controller');

//Get all listing
router.get('/', getAllListing);

//Get by ID
router.get('/:id', getListingById);

module.exports = router;
