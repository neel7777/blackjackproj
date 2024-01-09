// CardComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { drawCard } from './actions';

const Cards = ({ drawnCards, drawCard }) => {
  return (
    <div>
      <button onClick={drawCard}>Draw Card</button>
      <div>
        <h2>Drawn Cards:</h2>
        <ul>
          {drawnCards.map((card, index) => (
            <li key={index}>{card}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  drawnCards: state.drawnCards,
});

const mapDispatchToProps = {
  drawCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
