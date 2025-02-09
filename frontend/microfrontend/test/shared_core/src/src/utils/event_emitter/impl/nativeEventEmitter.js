import AppEventEmitter from '../eventEmitter'

export default class NativeEventEmitter extends AppEventEmitter {

    dispatch(key, value) {
        dispatchEvent(
            new CustomEvent(key, value)
        )
    }

    subscribe(key, callback) {
        addEventListener(key, callback)
    }

    unsubscribe(key, callback) {
        removeEventListener(key, callback)
    }
}