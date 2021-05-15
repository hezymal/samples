import BaseController from './BaseController';

class UserController extends BaseController {
    constructor(storage) {
        super();

        this.storage = storage;

        this.logIn = this.logIn.bind(this);
        this.logInFromStorage = this.logInFromStorage.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn(user) {
        this.storage.setItem(this.storageKey, user);
        this.notify(this.logInEventKey, { user });
    }

    logInFromStorage() {
        const user = this.storage.getItem(this.storageKey);
        if (!user) {
            return;
        }

        this.notify(this.logInEventKey, { user });
    }

    logOut() {
        this.storage.removeItem(this.storageKey);
        this.notify(this.logOutEventKey);
    }

    get isAuth() {
        return !!this.storage.getItem(this.storageKey);
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
