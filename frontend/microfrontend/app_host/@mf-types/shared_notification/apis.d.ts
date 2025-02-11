
    export type RemoteKeys = 'shared_notification/Notification';
    type PackageType<T> = T extends 'shared_notification/Notification' ? typeof import('shared_notification/Notification') :any;