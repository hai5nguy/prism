var MongoClient = require(NODE_MODULES + 'mongodb').MongoClient;

MongoClient.connect(PRISM_DB_CONNECTION_STRING, function (err, db) {
    if (err) {
        console.error('Unable to connect to mongo server.');
        console.error(err);
    } else {
        console.log('Mongo online:', PRISM_DB_CONNECTION_STRING);
        global.DB = db;
    }
});
