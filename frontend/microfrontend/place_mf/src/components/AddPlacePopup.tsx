import React, { ChangeEvent, FormEvent, useState } from 'react';
import PopupWithForm from 'shared_ui/PopupWithForm'
import { PlaceCard } from '../models/place';

interface Props {
    isOpen: boolean;
    onAddPlace: (data: Pick<PlaceCard, 'name' | 'link'>) => void;
    onClose: () => void;
}

function AddPlacePopup({ isOpen, onAddPlace, onClose }: Props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
        setLink(e.target.value);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        onAddPlace({
            name,
            link
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onSubmit={handleSubmit}
            onClose={onClose}
            title="Новое место"
            name="new-card"
        >
            <label className="popup__label">
                <input type="text" name="name" id="place-name"
                    className="popup__input popup__input_type_card-name" placeholder="Название"
                    required minLength={1} maxLength={30} value={name} onChange={handleNameChange} />
                <span className="popup__error" id="place-name-error"></span>
            </label>
            <label className="popup__label">
                <input type="url" name="link" id="place-link"
                    className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
                    required value={link} onChange={handleLinkChange} />
                <span className="popup__error" id="place-link-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
