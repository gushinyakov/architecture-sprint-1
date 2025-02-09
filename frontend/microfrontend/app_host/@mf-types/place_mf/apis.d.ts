
    export type RemoteKeys = 'place_mf/AddPlace' | 'place_mf/PlacesList';
    type PackageType<T> = T extends 'place_mf/PlacesList' ? typeof import('place_mf/PlacesList') :T extends 'place_mf/AddPlace' ? typeof import('place_mf/AddPlace') :any;