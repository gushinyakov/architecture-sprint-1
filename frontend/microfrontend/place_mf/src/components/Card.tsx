import React, { useContext } from 'react';
import CurrentUserContext from 'shared_context/CurrentUserContext'
import { PlaceCard } from '../models/place';



interface Props {
    card: PlaceCard;
    onCardClick: (card: PlaceCard) => void;
    onCardLike: (card: PlaceCard) => void;
    onCardDelete: (card: PlaceCard) => void;
}

function Card({ card, onCardClick, onCardLike, onCardDelete }: Props) {
    const cardStyle = { backgroundImage: `url(${card.link})` };

    const currentUser = useContext(CurrentUserContext);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }


    const isLiked = card.likes.some(i => i._id === currentUser?._id);
    const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

    const isOwn = card.owner._id === currentUser?._id;
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );

    return (
        <li className="places__item card">
            <div className="card__image" style={cardStyle} onClick={handleClick}>
            </div>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <div className="card__description">
                <h2 className="card__title">
                    {card.name}
                </h2>
                <div className="card__likes">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="card__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;
