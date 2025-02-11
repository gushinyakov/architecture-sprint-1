
    export type RemoteKeys = 'profile_mf/UserProfile' | 'profile_mf/userApi' | 'profile_mf/models';
    type PackageType<T> = T extends 'profile_mf/models' ? typeof import('profile_mf/models') :T extends 'profile_mf/userApi' ? typeof import('profile_mf/userApi') :T extends 'profile_mf/UserProfile' ? typeof import('profile_mf/UserProfile') :any;