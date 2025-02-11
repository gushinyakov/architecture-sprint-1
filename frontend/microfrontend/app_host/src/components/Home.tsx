import { useEffect, useState } from 'react';
import UserProfile from 'profile_mf/UserProfile';
import { User } from 'profile_mf/models';
import PlacesList from 'place_mf/PlacesList'
import CurrentUserContext from 'shared_context/CurrentUserContext';
import eventEmitter from 'shared_feature/event-emitter';

const Home = () => {
    const [user, setUser] = useState<User | null>(null)

    const handleUserChange = (userUpdate: User | null) => {
        setUser(userUpdate)
    }

    useEffect(() => {
        eventEmitter.subscribe('user-change', handleUserChange)
        return () => {
            eventEmitter.unsubscribe('user-change', handleUserChange)
        }
    }, [])

    return (
        <CurrentUserContext.Provider value={user}>
            <main className="content">
                <section className="page__section">
                    <UserProfile />
                </section>
                <section className="page__section">
                    <PlacesList />
                </section>
            </main>
        </CurrentUserContext.Provider>
    )
}

export default Home;
