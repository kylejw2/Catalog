var express = require('express');
var router = express.Router();
const {
    readGlossary,
    readTerm,
    createTerm,
    deleteTerm,
    upsertTerm,
    updateTerm
} = require('../../data/glossary');

// GET a term
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await readTerm(id);
    res.send(data);
})

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
});

// PUT term
router.put('/:id', async (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    const data = await upsertTerm(id, body);
    res.send(data);
});

router.patch('/:id', async (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    const data = await updateTerm(id, body);
    res.send(data);
});

// DELETE term
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = await deleteTerm(id);
    res.send(data);
});

module.exports = router;