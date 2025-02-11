import { ReactNode } from 'react';
import '../../styles/popup/popup.css';
export interface PopupProps {
    name?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    fullOpen?: boolean;
}
declare function Popup({ name, isOpen, onClose, children, fullOpen, }: PopupProps): import("react/jsx-runtime").JSX.Element;
export default Popup;
