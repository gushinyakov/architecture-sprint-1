
    export type RemoteKeys = 'shared_feature/event-emitter' | 'shared_feature/storage';
    type PackageType<T> = T extends 'shared_feature/storage' ? typeof import('shared_feature/storage') :T extends 'shared_feature/event-emitter' ? typeof import('shared_feature/event-emitter') :any;