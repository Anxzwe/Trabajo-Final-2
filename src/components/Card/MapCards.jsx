import React from 'react'
import Card from '../Card/Card';
import { cards } from '../../data/Card/Cards';

export default function MapCards() {


    return (
        <>
            {cards.map(card => (
                <Card key={card.id} {...card} />
            ))}
        </>
    )
}
