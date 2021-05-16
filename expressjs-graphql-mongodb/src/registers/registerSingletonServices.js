const registerMongo = require("./registerMongo");

const registerSingletonServices = async (app) => {
    await registerMongo(app);
};

module.exports = registerSingletonServices;
