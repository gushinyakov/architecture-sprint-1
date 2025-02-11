import React, { ReactNode } from 'react';
import '../../styles/popup/popup.css'

export interface PopupProps {
    name?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    fullOpen?: boolean;
}

function Popup({
    name,
    isOpen,
    onClose,
    children,
    fullOpen,
}: PopupProps) {
    // TODO: add classNames
    return (
        <div className={`popup ${name ? `popup_type_${name}` : ''} ${isOpen ? 'popup_is-opened' : ''}`}>
            <div className={`popup__content ${fullOpen ? 'popup__content_content_image' : ''}`}>
                <button type="button" className="popup__close" onClick={onClose}></button>
                {children}
            </div>
        </div>
    );
}

export default Popup;
