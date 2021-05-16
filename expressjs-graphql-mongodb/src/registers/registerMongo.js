const { MongoClient } = require("mongodb");

const registerMongo = async (app) => {
    const uri = "mongodb://localhost:27017/expressjs-graphql-mongodb";
    const options = { useUnifiedTopology: true };
    const client = await MongoClient.connect(uri, options);
    const db = client.db("expressjs-graphql-mongodb");

    app.set("mongo", client);
    app.set("db", db);
};

module.exports = registerMongo;
