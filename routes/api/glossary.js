var express = require('express');
var router = express.Router();
const {
    readGlossary
} = require('../../data/glossary');

// GET glossary
router.get('/', async (req, res, next) => {
    const data = await readGlossary();
    res.send(data);
});

module.exports = router;