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
// Esta función crea una nueva varaja
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

//Esta función me permite tomar una carta.
const pedirCarta = () => {

  crearDeck();

  if (deck.length === 0) {
    throw "No hay mas cartas";
  }
  
  const carta = deck.pop();

  console.log(deck);
  console.log(carta);
  return carta;
};

// Esta función le da un valor a cada carta
const valorCarta = (carta) => {
  const valor = carta.substring(0,carta.length - 1);
  // console.log(valor);

  // if (isNaN(valor)) {
  //   console.log('No es un número');
  //   puntos = (valor === 'A') ? 11 : 10;
  // }else{
  //   console.log('Es un número');
  //   puntos = parseInt(valor);
  // }

  return (isNaN(valor)) ? 
         (valor === 'A') ? 11 : 10 : 
         (valor * 1);
};


console.log({valor: valorCarta(pedirCarta())});
