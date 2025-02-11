import { useEffect } from "react"
import storage from "shared_feature/storage";
import eventEmitter from "shared_feature/event-emitter";

import apiAuth from "./api";


const useAuthToken = () => {

    const handleSignout = () => {
        storage.removeItem("auth-jwt");
    }

    useEffect(() => {
        eventEmitter.subscribe('auth-signout', handleSignout);

        const token = storage.getItem("auth-jwt");
        if (token) {
            apiAuth
                .checkToken(token)
                .then(({ data }) => {
                    eventEmitter.dispatch('auth-signin', { status: 'success', token, email: data.email })
                })
                .catch((e) => {
                    eventEmitter.dispatch('auth-signin', { status: 'error', token })
                    storage.removeItem('auth-jwt');
                });
        }

        return () => {
            eventEmitter.unsubscribe('auth-signout', handleSignout);
        }
    }, [])
}

export default useAuthToken;
