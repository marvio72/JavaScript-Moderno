/*==============================================================================================
2C = Two of Crude
2H = Two of Hart
2S = Two of Spades
2D = Two of Diamons
==============================================================================================*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','K','Q'];


/*==============================================================================================
FUNCIONES
==============================================================================================*/
/*
Esta función crea una nueva varaja
*/
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
  deck = _.shuffle(deck);
  return deck;
};

/*
Esta función me permite tomar una carta.
*/

const pedirCarta = () => {

  if (deck.length === 0) {
    throw("No hay mas cartas");
  }
  
  const carta = deck.pop();
  return carta;
};

console.log(crearDeck());

for (let i = 0; i <= 100; i++) {
  pedirCarta();
  console.log(deck);
}