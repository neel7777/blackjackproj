// actions.js
export const drawCard = () => ({
    type: 'DRAW_CARD',
  });
  
  // reducers.js
  const generateDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
    const deck = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push(`${rank} of ${suit}`);
      }
    }

    // Fisher-Yates Shuffle Algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  
    return deck;
  };
  
  const initialState = {
    deck: generateDeck(),
    drawnCards: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DRAW_CARD':
        const [drawnCard, ...remainingDeck] = state.deck;
        return {
          ...state,
          deck: remainingDeck,
          drawnCards: [...state.drawnCards, drawnCard],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  