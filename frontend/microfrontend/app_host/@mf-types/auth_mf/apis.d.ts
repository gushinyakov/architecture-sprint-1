
    export type RemoteKeys = 'auth_mf/Login' | 'auth_mf/Register' | 'auth_mf/useAuthToken';
    type PackageType<T> = T extends 'auth_mf/useAuthToken' ? typeof import('auth_mf/useAuthToken') :T extends 'auth_mf/Register' ? typeof import('auth_mf/Register') :T extends 'auth_mf/Login' ? typeof import('auth_mf/Login') :any;