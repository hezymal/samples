class LocalStorage {
    constructor() {
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    getItem(key) {
        const value = localStorage.getItem(key);
        if (!value) {
            return value;
        }

        return JSON.parse(value);
    }

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }
}

export default LocalStorage;
