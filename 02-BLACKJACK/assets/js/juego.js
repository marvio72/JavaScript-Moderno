/*==============================================================================================
2C = Two of Crude
2H = Two of Hart
2S = Two of Spades
2D = Two of Diamons
==============================================================================================*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','K','Q'];

const crearDeck = () => {
  for (let i = 2; i <=10; i++) {
    for (const tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (const esp of especiales) {
    for (const tipo of tipos) {
      deck.push(esp + tipo);
    }
  }
  return _.shuffle(deck);
};

console.log(crearDeck());
