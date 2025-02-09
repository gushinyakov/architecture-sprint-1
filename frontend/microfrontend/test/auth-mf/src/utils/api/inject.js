import NomorepartiesAuthApi from './impl/nomorepartiesAuthApi';

export default function injectAuthApi(impl) {
    switch (impl) {
        case 'nomoreparties':
            return new NomorepartiesAuthApi('https://nomoreparties.co');
        default:
            throw new ReferenceError(`Ошибка при инициализации auth-api: неизвестная имплементаци ${impl}`)
    }
}