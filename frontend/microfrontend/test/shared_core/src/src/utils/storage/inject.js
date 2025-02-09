import LocalStorageImpl from './impl/localStorageImpl'

export default function injectEventEmitter(impl) {
    switch (impl) {
        case 'local-storage':
            return new LocalStorageImpl()
        default:
            throw new ReferenceError(`Ошибка при инициализации storage: неизвестная имплементаци ${impl}`)
    }
}