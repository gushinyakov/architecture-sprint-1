import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from 'shared_context/CurrentUserContext';
import placeApi from '../utils/places-api';
import { PlaceCard } from '../models/place';
import CardImagePopup from './CardImagePopup';
import Card from './Card';
import '../styles/card/card.css';
import '../styles/places/places.css';
import eventEmitter from 'shared_feature/event-emitter';

function PlacesList() {
    const [selectedCard, setSelectedCard] = useState<PlaceCard | null>(null);
    const [cards, setCards] = useState<PlaceCard[]>([]);

    const currentUser = useContext(CurrentUserContext);

    function handleCardLike(card: PlaceCard) {
        const isLiked = card.likes.some((i) => i._id === currentUser?._id);
        placeApi
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((cards) =>
                    cards.map((c) => (c._id === card._id ? newCard : c))
                );
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card: PlaceCard) {
        placeApi
            .removeCard(card._id)
            .then(() => {
                setCards((cards) => cards.filter((c) => c._id !== card._id));
            })
            .catch((err) => console.log(err));
    }


    function handleCardClick(card: PlaceCard) {
        setSelectedCard(card);
    }

    function handleCloseCardImagePopup() {
        setSelectedCard(null);
    }

    const handlePlaceAddNewEvent = (data: PlaceCard) => {
        setCards(cards => [data, ...cards])
    }

    useEffect(() => {
        eventEmitter.subscribe('place-add-new', handlePlaceAddNewEvent)

        placeApi.getCardList()
            .then((cards) => {
                setCards(cards)
            })
            .catch((e) => {
                console.log(e)
                setCards([])
            })

        return () => {
            eventEmitter.unsubscribe('place-add-new', handlePlaceAddNewEvent)
        }
    }, [])

    return (
        <section className="places">
            <ul className="places__list">
                {cards.map(card => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                ))}
            </ul>
            <CardImagePopup
                card={selectedCard}
                onClose={handleCloseCardImagePopup}
            />
        </section>
    )
}

export default PlacesList;
