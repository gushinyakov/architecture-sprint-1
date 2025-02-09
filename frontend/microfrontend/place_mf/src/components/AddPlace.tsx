import eventEmitter from 'shared_feature/event-emitter'
import { PlaceCard } from "../models/place";
import placeApi from "../utils/places-api";
import AddPlacePopup from "./AddPlacePopup";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AddPlace = ({ isOpen, onClose }: Props) => {
    function handleAddPlaceSubmit(newCard: Pick<PlaceCard, 'name' | 'link'>) {
        placeApi
            .addCard(newCard)
            .then((newCardFull) => {
                eventEmitter.dispatch('place-add-new', newCardFull)
                onClose();
            })
            .catch((err) => console.log(err));
    }

    return (
        <AddPlacePopup isOpen={isOpen} onClose={onClose} onAddPlace={handleAddPlaceSubmit} />
    )
}

export default AddPlace;
