const user = require("./user");

const resolvers = {
    Query: {
        ...user.Query,
    },
    Mutation: {
        ...user.Mutation,
    },
};

module.exports = resolvers;
