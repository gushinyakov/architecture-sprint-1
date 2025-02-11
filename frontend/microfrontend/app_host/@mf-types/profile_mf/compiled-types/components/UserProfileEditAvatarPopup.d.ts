import { User } from '../models';
interface Props {
    isOpen: boolean;
    onUpdateAvatar: (data: Pick<User, 'avatar'>) => void;
    onClose: () => void;
}
declare function UserProfileEditAvatarPopup({ isOpen, onUpdateAvatar, onClose }: Props): import("react/jsx-runtime").JSX.Element;
export default UserProfileEditAvatarPopup;
