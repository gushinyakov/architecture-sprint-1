import React, { FormEvent, useEffect } from 'react';
import CurrentUserContext from 'shared_context/CurrentUserContext';
import PopupWithForm from 'shared_ui/PopupWithForm';
import { User } from '../models';

interface Props {
    isOpen: boolean;
    onUpdateUser: (user: Pick<User, 'name' | 'about'>) => void;
    onClose: () => void;
}

function EditProfilePopup({ isOpen, onUpdateUser, onClose }: Props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const user = React.useContext(CurrentUserContext);

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    useEffect(() => {
        if (user) {
            setName(user.name);
            setDescription(user.about);
        }
    }, [user]);

    return (
        <PopupWithForm
            isOpen={isOpen}
            onSubmit={handleSubmit}
            onClose={onClose}
            title="Редактировать профиль"
            name="edit"
        >
            <label className="popup__label">
                <input
                    type="text"
                    name="userName"
                    id="owner-name"
                    className="popup__input popup__input_type_name"
                    placeholder="Имя"
                    required
                    minLength={2}
                    maxLength={40}
                    pattern="[a-zA-Zа-яА-Я -]{1,}"
                    value={name || ''}
                    onChange={handleNameChange} />
                <span className="popup__error" id="owner-name-error"></span>
            </label>
            <label className="popup__label">
                <input
                    type="text"
                    name="userDescription"
                    id="owner-description"
                    className="popup__input popup__input_type_description"
                    placeholder="Занятие"
                    required
                    minLength={2}
                    maxLength={200}
                    value={description || ''}
                    onChange={handleDescriptionChange} />
                <span className="popup__error" id="owner-description-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
