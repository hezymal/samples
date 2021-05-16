const getUserById = async (request, id) => {
    const db = request.app.get("db");
    const user = await db.collection("users")
        .findOne({ _id: id });

    return {
        id: user._id,
        name: user.name,
    };
};

const createUser = async (request, id, name) => {
    const db = request.app.get("db");
    const result = await db.collection("users")
        .insertOne({ _id: id, name });

    return result.insertedId;
};

const resolvers = {
    Query: {
        user: (_, args, request) => {
            return getUserById(request, args.id);
        }
    },

    Mutation: {
        createUser: async (_, args, request) => {
            const id = await createUser(request, args.id, args.name);
            return await getUserById(request, id);
        },
    },
};

module.exports = resolvers;
