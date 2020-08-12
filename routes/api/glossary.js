var express = require('express');
var router = express.Router();
const {
    readGlossary,
    createTerm,
    deleteTerm
} = require('../../data/glossary');

// GET glossary
router.get('/', async (req, res, next) => {
    const data = await readGlossary();
    res.send(data);
});

// POST term
router.post('/', async (req, res, next) => {
    const body = req.body;
    const data = await createTerm(body);
    res.send(data);
})

// DELETE term
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await deleteTerm(id);
    res.send(data);
})

module.exports = router;