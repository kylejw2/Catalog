// Import Mongo connection packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');

// Setup Database Object
const url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const col_name = process.env.COL_NAME;
const options = {
    useUnifiedTopology: true
};

// READ glossary
const readGlossary = () => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            });
        });
    });
    return iou;
}

// CREATE a term
const createTerm = (term) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(term, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops);
                client.close();
            });
        });
    });
    return iou;
}

// UPSERT a term
const upsertTerm = (id, term) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndUpdate({_id: new ObjectId(id)}, 
            {$set: term},
            {upsert: true},
            (err, result) => {
                assert.equal(err, null);
                resolve(result);
                client.close();
            }
            );
        });
    });
    return iou;
}

//DELETE a term
const deleteTerm = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndDelete({_id: new ObjectId(id)}, (err, result) => {
                assert.equal(err, null);
                resolve(result.value);
                client.close();
            });
        });
    });
    return iou;
}

module.exports = {
    readGlossary,
    createTerm,
    upsertTerm,
    deleteTerm
}