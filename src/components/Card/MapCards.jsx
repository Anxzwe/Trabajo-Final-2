import React from 'react'
import Card from '../Card/Card';
import PropTypes from "prop-types";
import { cards } from '../../data/Card/Cards';

export default function MapCards({ cardsData = cards }) {

    return (
        <>
            {cardsData.map(card => (
                <Card key={card.id} {...card} />
            ))}
        </>
    )
}

MapCards.propTypes = {
    cardsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    )
};