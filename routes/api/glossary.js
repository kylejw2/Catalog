var express = require('express');
var router = express.Router();
const {
    readGlossary,
    createTerm
} = require('../../data/glossary');

// GET glossary
router.get('/', async (req, res, next) => {
    const data = await readGlossary();
    res.send(data);
});

// POST glossary
router.post('/', async (req, res, next) => {
    const body = req.body;
    const data = await createTerm(body);
    res.send(data);
})

module.exports = router;