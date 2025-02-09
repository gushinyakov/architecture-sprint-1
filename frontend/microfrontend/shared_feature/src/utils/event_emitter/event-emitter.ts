export abstract class AppEventEmitter {
    dispatch(key: string, value: any): void {
        console.log(`[AppEventEmitter] dispatch key=${key} value=${JSON.stringify(value)}`)
    }

    subscribe(key: string, callback: (value: any) => void): void {
        console.log(`[AppEventEmitter] subscribe key=${key}`)
    };

    unsubscribe(key: string, callback: (value: any) => void): void {
        console.log(`[AppEventEmitter] unsubscribe key=${key}`)
    }
}

class NativeEventEmitter {

    private _subscribers = {

    }

    dispatch(key: string, value: any): void {
        // super.dispatch(key, value);
        dispatchEvent(
            new CustomEvent(key, { detail: value })
        )
    }

    subscribe(key: string, callback: (value: any) => void): void {
        // super.subscribe(key, callback);
        // TODO: unsubscribe
        // @ts-ignore
        addEventListener(key, (value: CustomEvent) => callback(value.detail))
    }

    unsubscribe(key: string, callback: (value: any) => void): void {
        // super.unsubscribe(key, callback);
        removeEventListener(key, callback);
    }
}


const inject = (impl: string): AppEventEmitter => {
    switch (impl) {
        case 'native':
            return new NativeEventEmitter()
        default:
            throw new ReferenceError(`Ошибка при инициализации event-emitter: неизвестная имплементаци ${impl}`)
    }
}

// TODO: где лучще делать inject?
const eventEmitter = inject('native')

export default eventEmitter
