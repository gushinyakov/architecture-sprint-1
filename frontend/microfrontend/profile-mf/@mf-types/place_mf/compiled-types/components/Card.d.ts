import { PlaceCard } from '../models/place';
interface Props {
    card: PlaceCard;
    onCardClick: (card: PlaceCard) => void;
    onCardLike: (card: PlaceCard) => void;
    onCardDelete: (card: PlaceCard) => void;
}
declare function Card({ card, onCardClick, onCardLike, onCardDelete }: Props): import("react/jsx-runtime").JSX.Element;
export default Card;
