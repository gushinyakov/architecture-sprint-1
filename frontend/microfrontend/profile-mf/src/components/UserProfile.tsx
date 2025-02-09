import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from 'shared_context/CurrentUserContext';
import '../styles/profile/profile.css'
import userApi from '../utils/user-api';
import EditProfilePopup from './UserProfileEditPopup';
import eventEmitter from 'shared_feature/event-emitter'
import UserProfileEditAvatarPopup from './UserProfileEditAvatarPopup';
import AddPlace from 'place_mf/AddPlace';

const UserProfile = () => {
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const user = useContext(CurrentUserContext)

    const imageStyle = user ? { backgroundImage: `url(${user.avatar})` } : {};


    /**
     * Edit Profile  
     */

    const handleOpenEditProfile = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleCloseEditProfile = () => {
        setIsEditProfilePopupOpen(false);
    }

    function handleUpdateUser(userUpdate: { name: string; about: string }) {
        userApi
            .setUserInfo(userUpdate)
            .then((newUserData) => {
                eventEmitter.dispatch('user-change', newUserData)
                handleCloseEditProfile();
            })
            .catch((err) => {
                eventEmitter.dispatch('notification-open', { status: 'error', text: 'Что-то пошло не так! Попробуйте ещё раз.' })
                console.log(err)
            });
    }


    /**
     * Edit Profile Avatar
     */


    const handleOpenEditAvatar = () => {
        setIsEditAvatarPopupOpen(true)
    }

    const handleCloseEditAvatar = () => {
        setIsEditAvatarPopupOpen(false)
    }

    const handleEditAvatar = (avatarUpdate: { avatar: string }) => {
        userApi
            .setUserAvatar(avatarUpdate)
            .then((newUserData) => {
                eventEmitter.dispatch('user-change', newUserData)
                handleCloseEditAvatar();
            })
            .catch((err) => {
                eventEmitter.dispatch('notification-open', { status: 'error', text: 'Что-то пошло не так! Попробуйте ещё раз.' })
                console.log(err)
            });
    }

    /**
     * Add place
     */

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleAddClosePopup() {
        setIsAddPlacePopupOpen(false);
    }

    useEffect(() => {
        userApi.getUserInfo().then(data => {
            eventEmitter.dispatch('user-change', data)
        })
    }, [])

    return (
        <div className="profile">
            <div className="profile__image" onClick={handleOpenEditAvatar} style={imageStyle}></div>
            <div className="profile__info">
                <h1 className="profile__title">{user?.name ?? '-'}</h1>
                <button className="profile__edit-button" type="button" onClick={handleOpenEditProfile}></button>
                <p className="profile__description">{user?.about ?? '-'}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            <AddPlace isOpen={isAddPlacePopupOpen} onClose={handleAddClosePopup} />

            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onUpdateUser={handleUpdateUser}
                onClose={handleCloseEditProfile}
            />
            <UserProfileEditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onUpdateAvatar={handleEditAvatar}
                onClose={handleCloseEditAvatar}
            />
        </div>
    )
}

export default UserProfile
