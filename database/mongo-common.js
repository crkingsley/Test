const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
    const mongoDBURL = 'mongodb+srv://admin1:Qr5jezlKNX2ck89@personalproject.y2ctv.mongodb.net/PersonalProject';
    const connection = await MongoClient.connect(mongoDBURL, { useNewUrlParser: true });
    database = connection.db();
} 

async function getDatabase() {
    if (!database) await startDatabase();
    return database;
}

module.exports = {
    getDatabase,
    startDatabase,
};
