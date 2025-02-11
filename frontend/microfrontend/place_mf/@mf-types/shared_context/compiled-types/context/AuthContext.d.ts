import React from 'react';
declare const AuthContext: React.Context<{
    isLoggedIn: boolean;
    email: string | null;
}>;
export default AuthContext;
