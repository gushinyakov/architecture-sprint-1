export abstract class AppStorage {

    abstract setItem(key: string, value: any): void

    abstract getItem(key: string): string | null

    abstract removeItem(key: string): void
}

class LocalStorageImpl extends AppStorage {

    setItem(key: string, value: any): void {
        localStorage.setItem(key, value)
    }

    getItem(key: string): any | null {
        return localStorage.getItem(key)
    }

    removeItem(key: string) {
        localStorage.removeItem(key)
    }
}

const inject = (impl: string): AppStorage => {
    switch (impl) {
        case 'local-storage':
            return new LocalStorageImpl()
        default:
            throw new ReferenceError(`Ошибка при инициализации storage: неизвестная имплементаци ${impl}`)
    }
}

// TODO: где лучще делать inject?
const storage = inject('local-storage')

export default storage
