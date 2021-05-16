const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const registerSingletonServices = require("./registers/registerSingletonServices");
const schema = require("./schema");

const app = express();
const port = 3010;

app.use("/api", graphqlHTTP({ schema, graphiql: true }));

registerSingletonServices(app).then(() => {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
});
