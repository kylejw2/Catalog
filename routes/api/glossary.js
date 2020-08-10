var express = require('express');
var router = express.Router();
import {
    readGlossary
} from '../../data/glossary.js';

// GET glossary
router.get('/', async (req, res, next) => {
    const data = await readGlossary();
    res.send(data);
});