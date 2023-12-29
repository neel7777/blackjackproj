import React, { useState, useEffect } from "react";




const Card = props => {
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    
    let initialDeck = [
        'Ac', 'Ad', 'Ah', 'As', 
        'Twoc', 'Twod', 'Twoh', 'Twos', 
        'Threec', 'Threed', 'Threeh', 'Threes',
        'Fourc', 'Fourd', 'Fourh', 'Fours',
        'Fivec', 'Fived', 'Fiveh', 'Fives',
        'Sixc', 'Sixd', 'Sixh', 'Sixs',
        'Sevenc', 'Sevend', 'Sevenh', 'Sevens',
        'Eightc', 'Eightd', 'Eighth', 'Eights', 
        'Ninec', 'Nined', 'Nineh', 'Nines',
        'Tc', 'Td', 'Th', 'Ts',
        'Jc', 'Jd', 'Jh', 'Js',
        'Qc', 'Qd', 'Qh', 'Qs',
        'Kc', 'Kd', 'Kh', 'Ks' 
    ]

    // const drawTwoRandomCards = () => {
    //     if (initialDeck.length < 2) {
    //       alert("Not enough cards in the deck.");
    //       return;
    //     }
    
    //     let randomIndex1, randomIndex2;
    //     do {
    //       randomIndex1 = Math.floor(Math.random() * initialDeck.length);
    //       randomIndex2 = Math.floor(Math.random() * initialDeck.length);
    //     } while (randomIndex1 === randomIndex2);
    
    //     const [card1, card2] = [initialDeck[randomIndex1], initialDeck[randomIndex2]];
    //     setFirst(card1)
    //     setSecond(card2)
        
    //   };
    return (
        <>
        <div>Hello test1</div>
        </>
    )

    
    
}

export default Card;
