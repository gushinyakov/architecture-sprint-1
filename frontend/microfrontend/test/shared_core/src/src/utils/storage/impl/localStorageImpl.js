import AppStorage from '../storage';

export default class LocalStorageImpl extends AppStorage {

    setItem(key, value) {
        localStorage.setItem(key, value)
    }

    getItem(key) {
        return localStorage.getItem(key)
    }
}
