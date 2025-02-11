export interface PlaceCard {
    _id: string;
    likes: Array<{
        name: string;
        about: string;
        avatar: string;
        _id: string;
        cohort: string;
    }>;
    name: string;
    link: string;
    owner: {
        name: string;
        about: string;
        avatar: string;
        _id: string;
        cohort: string;
    };
    createdAt: string;
}
