const express = require('express');
const { getPersons } = require('../controllers/ElgControllers');

const router = express.Router();
router.get('/posts', getPersons);

module.exports = router;
