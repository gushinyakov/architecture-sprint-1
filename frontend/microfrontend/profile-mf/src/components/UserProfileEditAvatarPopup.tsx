import React, { FormEvent, useRef } from 'react';
import PopupWithForm from 'shared_ui/PopupWithForm';
import { User } from '../models';

interface Props {
    isOpen: boolean;
    onUpdateAvatar: (data: Pick<User, 'avatar'>) => void;
    onClose: () => void;
}

function UserProfileEditAvatarPopup({ isOpen, onUpdateAvatar, onClose }: Props) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!inputRef.current) {
            return
        }

        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Обновить аватар" name="edit-avatar"
        >

            <label className="popup__label">
                <input type="url" name="avatar" id="owner-avatar"
                    className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
                    required ref={inputRef} />
                <span className="popup__error" id="owner-avatar-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default UserProfileEditAvatarPopup;
