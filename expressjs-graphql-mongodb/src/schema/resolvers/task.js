const TASKS_COLLECTION_NAME = "tasks";

const getTaskById = async (request, _id) => {
    const db = request.app.get("db");
    return await db.collection(TASKS_COLLECTION_NAME)
        .findOne({ _id });
};

const getAllTasks = async (request) => {
    const db = request.app.get("db");
    return await db.collection(TASKS_COLLECTION_NAME)
        .find()
        .toArray();
};

const createTask = async (request, newTask) => {
    const db = request.app.get("db");
    const result = await db.collection(TASKS_COLLECTION_NAME)
        .insertOne(newTask);

    return result.insertedId;
};

const resolvers = {
    Query: {
        task: (_, args, request) => getTaskById(request, args._id),
        tasks: (_, __, request) => getAllTasks(request),
    },

    Mutation: {
        createTask: async (_, args, request) => {
            const _id = await createTask(request, args);
            return await getTaskById(request, _id);
        },
    },
};

module.exports = resolvers;
