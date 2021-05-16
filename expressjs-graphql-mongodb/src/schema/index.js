const { join } = require("path");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");
const resolvers = require("./resolvers");

const schemaFromFile = loadSchemaSync(join(__dirname, "schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
});
const schema = addResolversToSchema({ schema: schemaFromFile, resolvers });

module.exports = schema;
