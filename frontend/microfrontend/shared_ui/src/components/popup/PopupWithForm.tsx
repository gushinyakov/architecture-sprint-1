import React, { FormEvent } from 'react';
import Popup, { PopupProps } from './Popup';
import '../../styles/popup/popup.css'

interface Props extends PopupProps {
    title?: string;
    buttonText?: string;
    onSubmit: (e: FormEvent) => void;
    onClose: () => void;
}

function PopupWithForm({
    name,
    isOpen,
    children,
    title,
    buttonText = 'Сохранить',
    onSubmit,
    onClose,
}: Props) {
    return (
        <Popup name={name} isOpen={isOpen} onClose={onClose}>
            <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
                <h3 className="popup__title">{title}</h3>
                {children}
                <button type="submit" className="button popup__button">{buttonText}</button>
            </form>
        </Popup>
    );
}

export default PopupWithForm;
