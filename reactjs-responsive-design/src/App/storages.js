import LocalStorage from 'storages/LocalStorage';
import MemoryStorage from 'storages/MemoryStorage';

export const localStorage = new LocalStorage();
export const memoryStorage = new MemoryStorage();
