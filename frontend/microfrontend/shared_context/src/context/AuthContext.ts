import React from 'react';

const AuthContext = React.createContext<{
    isLoggedIn: boolean;
    email: string | null;
}>({
    isLoggedIn: false,
    email: null,
});

export default AuthContext;
