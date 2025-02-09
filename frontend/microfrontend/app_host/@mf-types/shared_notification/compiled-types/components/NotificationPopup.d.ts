interface Props {
    isOpen: boolean;
    onClose: () => void;
    status: 'success' | 'error';
    text: string;
}
declare function NotificationPopup({ isOpen, onClose, status, text }: Props): import("react/jsx-runtime").JSX.Element;
export default NotificationPopup;
