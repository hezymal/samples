import BaseController from './BaseController';

class UserController extends BaseController {
    constructor(storage) {
        super();

        this.storage = storage;

        this.logIn = this.logIn.bind(this);
        this.logInFromStorage = this.logInFromStorage.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn({ userName, password }) {
        this.storage.setItem(this.storageKey, { userName });

        this.notify(this.logInEventKey);

        return true;
    }

    logInFromStorage() {
        const user = this.storage.getItem(this.storageKey);
        if (!user) {
            return;
        }

        this.notify(this.logInEventKey);
    }

    logOut() {
        this.storage.removeItem(this.storageKey);

        this.notify(this.logOutEventKey);
    }

    get isAuth() {
        return !!this.storage.getItem(this.storageKey);
    }

    get user() {
        return this.storage.getItem(this.storageKey);
    }

    get logInEventKey() {
        return 'logIn';
    }

    get logOutEventKey() {
        return 'logOut';
    }

    get storageKey() {
        return 'UserController';
    }
}

export default UserController;
