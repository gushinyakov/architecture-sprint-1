import React from 'react';
export interface User {
    _id: string;
    about: string;
    avatar: string;
    cohort: string;
    name: string;
}
declare const CurrentUserContext: React.Context<User | null>;
export default CurrentUserContext;
