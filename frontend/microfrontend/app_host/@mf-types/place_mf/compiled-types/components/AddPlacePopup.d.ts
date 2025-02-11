import { PlaceCard } from '../models/place';
interface Props {
    isOpen: boolean;
    onAddPlace: (data: Pick<PlaceCard, 'name' | 'link'>) => void;
    onClose: () => void;
}
declare function AddPlacePopup({ isOpen, onAddPlace, onClose }: Props): import("react/jsx-runtime").JSX.Element;
export default AddPlacePopup;
