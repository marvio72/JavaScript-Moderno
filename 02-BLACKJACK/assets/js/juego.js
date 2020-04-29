/*==============================================================================================
2C = Two of Crude
2H = Two of Hart
2S = Two of Spades
2D = Two of Diamons
==============================================================================================*/

let   deck       = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','K','Q'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// ENTORNO HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const puntosHTML        = document.querySelectorAll('small');
const cartasJugador     = document.querySelector('#jugador-cartas');
const cartasComputadora = document.querySelector('#cartas-computadora');


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
  console.log(deck);
  return deck;
};

//Esta función me permite tomar una carta.
const pedirCarta = () => {

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

// Esta función reinicia el juego
const juegoNuevo = () => {
  console.clear();
  deck = [];
  crearDeck();

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHTML[0].innerText = puntosJugador;
  puntosHTML[1].innerText = puntosComputadora;


 // Borrar img
  // while (cartasJugador.firstChild) {
  //   cartasJugador.removeChild(cartasJugador.firstChild);
  // }

  // while (cartasComputadora.firstChild) {
  //   cartasComputadora.removeChild(cartasComputadora.firstChild);
  // }

  cartasComputadora.innerHTML='';
  cartasJugador.innerHTML='';

  btnDetener.disabled = false;
  btnPedir.disabled = false;

};


// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  
  do {
    const carta = pedirCarta();
    
    
    puntosComputadora += valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;
    
    const nuevaImagen = document.createElement('img');
    nuevaImagen.classList.add('carta');
    nuevaImagen.src = `assets/cartas/${carta}.png`;
    cartasComputadora.append(nuevaImagen);
    
    if (puntosMinimos > 21) {
      break;
    }
  } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
  
  setTimeout(() => {
    if (
      (puntosJugador > puntosComputadora && puntosJugador <= 21) ||
      puntosComputadora > 21
      ) {
        alert("genial, Tu ganas!!!");
      } else if (puntosJugador === puntosComputadora) {
        alert("Es un empate");
      } else {
        alert("Lo sentimos, perdiste");
      }
      
      juegoNuevo();
    }, 70);
  };

  crearDeck();

/*==============================================================================================
EVENTOS
==============================================================================================*/
btnPedir.addEventListener('click', () => {
  

  const carta = pedirCarta();

  
  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
  
  // HTML
  // < img class = "carta" src = "assets/cartas/10S.png" >
  const nuevaImagen = document.createElement('img');
  nuevaImagen.classList.add('carta');
  nuevaImagen.src = `assets/cartas/${carta}.png`;
  cartasJugador.append(nuevaImagen);


  if (puntosJugador > 21) {
    // console.warn('Lo sentimos');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    // alert('genial, Tu ganas!!!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } 



});

btnDetener.addEventListener('click', () => {

  btnDetener.disabled = true;
  btnPedir.disabled   = true;

  turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {
  juegoNuevo();
});