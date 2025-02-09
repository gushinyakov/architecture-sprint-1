import { FormEvent } from 'react';
import { PopupProps } from './Popup';
import '../../styles/popup/popup.css';
interface Props extends PopupProps {
    title?: string;
    buttonText?: string;
    onSubmit: (e: FormEvent) => void;
    onClose: () => void;
}
declare function PopupWithForm({ name, isOpen, children, title, buttonText, onSubmit, onClose, }: Props): import("react/jsx-runtime").JSX.Element;
export default PopupWithForm;
