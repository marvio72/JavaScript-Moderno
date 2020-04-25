/*==============================================================================================
2C = Two of Crude
2H = Two of Hart
2S = Two of Spades
2D = Two of Diamons
==============================================================================================*/

let   deck  = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','K','Q'];

let puntosJugador = 0,
    puntosComputadora = 0;

// ENTORNO HTML
const btnPedir      = document.querySelector('#btnPedir');
const puntosHTML    = document.querySelectorAll('small');
const cartasJugador = document.querySelector('#jugador-cartas');


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

  // crearDeck();

  if (deck.length === 0) {
    throw "No hay mas cartas";
  }
  
  const carta = deck.pop();
  return carta;
};

// Esta función le da un valor a cada carta
const valorCarta = (carta) => {
  const valor = carta.substring(0,carta.length - 1);
  return (isNaN(valor)) ? 
         (valor === 'A') ? 11 : 10 : 
         (valor * 1);
};

console.log(crearDeck());

/*==============================================================================================
EVENTOS
==============================================================================================*/
btnPedir.addEventListener('click', () => {
  

  const carta = pedirCarta();
  // console.log(carta);
  
  puntosJugador += valorCarta(carta);
  // console.log(puntosJugador);
  
  puntosHTML[0].innerText = puntosJugador;
  
  // HTML
  // < img class = "carta" src = "assets/cartas/10S.png" >
  const nuevaImagen = document.createElement('img');
  nuevaImagen.classList.add('carta');
  nuevaImagen.src = `assets/cartas/${carta}.png`;
  cartasJugador.append(nuevaImagen);


  if (puntosJugador > 21) {
    console.warn('Lo sentimos');
    btnPedir.disabled = true;
  } else if (puntosJugador === 21) {
      console.warn('21, genial!!!');
      btnPedir.disabled = true;
  } 

});