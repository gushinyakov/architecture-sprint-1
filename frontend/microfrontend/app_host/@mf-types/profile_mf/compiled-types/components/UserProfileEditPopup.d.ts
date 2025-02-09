import { User } from '../models';
interface Props {
    isOpen: boolean;
    onUpdateUser: (user: Pick<User, 'name' | 'about'>) => void;
    onClose: () => void;
}
declare function EditProfilePopup({ isOpen, onUpdateUser, onClose }: Props): import("react/jsx-runtime").JSX.Element;
export default EditProfilePopup;
