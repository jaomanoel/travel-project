import { useState } from "react";

import newYork from "../../assets/images/newyork.jpg";
import sanFrancisco from "../../assets/images/sanfran.jpg";
import pisa from "../../assets/images/pisa.jpg";
import paris from "../../assets/images/paris.jpg";

export type CardProps = {
    img: string;
    label: string;
};

export const useCard = () => {
    const [cards, setCards] = useState<CardProps[]>([
        {
            img: newYork,
            label: "New York",
        },
        {
            img: sanFrancisco,
            label: "San Francisco",
        },
        {
            img: pisa,
            label: "Pisa",
        },
        {
            img: paris,
            label: "Paris",
        },
    ]);

    function getCards(): CardProps[] {
        return cards;
    }

    function setCard(card: CardProps) {
        var newCards = [...cards];
        newCards.push(card);
        setCards(newCards);
    }

    return {
        getCards,
        setCards,
    };
};
