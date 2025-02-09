import { PlaceCard } from "../models/place";
interface Props {
    card: PlaceCard | null;
    onClose: () => void;
}
declare const CardImagePopup: ({ card, onClose }: Props) => import("react/jsx-runtime").JSX.Element;
export default CardImagePopup;
