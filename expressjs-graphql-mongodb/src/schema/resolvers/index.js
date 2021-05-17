const user = require("./user");
const task = require("./task");

const resolvers = {
    Query: {
        ...user.Query,
        ...task.Query,
    },
    Mutation: {
        ...user.Mutation,
        ...task.Mutation,
    },
};

module.exports = resolvers;
