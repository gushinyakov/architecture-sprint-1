
    export type RemoteKeys = 'shared_ui/Popup' | 'shared_ui/PopupWithForm';
    type PackageType<T> = T extends 'shared_ui/PopupWithForm' ? typeof import('shared_ui/PopupWithForm') :T extends 'shared_ui/Popup' ? typeof import('shared_ui/Popup') :any;