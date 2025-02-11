
    export type RemoteKeys = 'shared_context/AuthContext' | 'shared_context/CurrentUserContext';
    type PackageType<T> = T extends 'shared_context/CurrentUserContext' ? typeof import('shared_context/CurrentUserContext') :T extends 'shared_context/AuthContext' ? typeof import('shared_context/AuthContext') :any;