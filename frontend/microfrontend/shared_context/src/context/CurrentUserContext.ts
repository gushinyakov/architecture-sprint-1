import React from 'react';

export interface User {
    _id: string;
    about: string;
    avatar: string;
    cohort: string;
    name: string;
}

const CurrentUserContext = React.createContext<User | null>(null);

export default CurrentUserContext;
