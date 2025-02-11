import Popup from 'shared_ui/Popup'
import { PlaceCard } from "../models/place"

interface Props {
    card: PlaceCard | null;
    onClose: () => void;
}

const CardImagePopup = ({ card, onClose }: Props) => {

    return (
        <Popup isOpen={!!card} onClose={onClose} fullOpen>
            <img alt={card ? card.name : ''} src={card ? card.link : ''} className="popup__image" />
            <p className="popup__caption">{card ? card.name : ''}</p>
        </Popup>
    )
}

export default CardImagePopup;