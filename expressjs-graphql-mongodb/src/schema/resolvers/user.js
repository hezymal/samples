const USERS_COLLECTION_NAME = "users";

const getUserById = async (request, _id) => {
    const db = request.app.get("db");
    return await db.collection(USERS_COLLECTION_NAME)
        .findOne({ _id });
};

const createUser = async (request, newUser) => {
    const db = request.app.get("db");
    const result = await db.collection(USERS_COLLECTION_NAME)
        .insertOne(newUser);

    return result.insertedId;
};

const resolvers = {
    Query: {
        user: (_, args, request) => getUserById(request, args._id),
    },

    Mutation: {
        createUser: async (_, args, request) => {
            const _id = await createUser(request, args);
            return await getUserById(request, _id);
        },
    },
};

module.exports = resolvers;
