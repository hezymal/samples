class MemoryStorage {
    constructor() {
        this.memory = [];

        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    getItem(key) {
        return this.memory[key];
    }

    setItem(key, value) {
        this.memory[key] = value;
    }

    removeItem(key) {
        delete this.memory[key];
    }
}

export default MemoryStorage;
