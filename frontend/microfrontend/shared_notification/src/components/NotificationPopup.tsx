import React from 'react';
// @ts-ignore
import SuccessIcon from '../images/success-icon.svg';
// @ts-ignore
import ErrorIcon from '../images/error-icon.svg';
import Popup from 'shared_ui/Popup';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    status: 'success' | 'error'
    text: string;
}

function NotificationPopup({ isOpen, onClose, status, text }: Props) {
    const icon = status === 'success' ? SuccessIcon : ErrorIcon
    // const text = status === 'success' ? "Вы успешно зарегистрировались" :
    //     "Что-то пошло не так! Попробуйте ещё раз."
    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <div>
                <img className="popup__icon" src={icon} alt="" />
                <p className="popup__status-message">{text}</p>
            </div>
        </Popup>

    );
}

export default NotificationPopup;

