import NativeEventEmitter from './impl/nativeEventEmitter'

export default function injectEventEmitter(impl) {
    switch (impl) {
        case 'native':
            return new NativeEventEmitter()
        default:
            throw new ReferenceError(`Ошибка при инициализации event-emitter: неизвестная имплементаци ${impl}`)
    }
}