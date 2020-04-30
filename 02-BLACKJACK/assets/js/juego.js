// función anonima autollamada
const miModulo = (() => {
  'use strict';

  // VARIABLES
  let deck = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'K', 'Q'];

  let puntosJugadores = [];

  // ENTORNO HTML
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const puntosHTML         = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');
        // cartasJugador = document.querySelector('#jugador-cartas'),
        // cartasComputadora = document.querySelector('#cartas-computadora');


  /*==============================================================================================
  FUNCIONES
  ==============================================================================================*/
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
 
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0);
    // puntosHTML[0].innerText = 0;
    // puntosHTML[1].innerText = 0;


    // Borrar img
    // while (cartasJugador.firstChild) {
    //   cartasJugador.removeChild(cartasJugador.firstChild);
    // }

    // while (cartasComputadora.firstChild) {
    //   cartasComputadora.removeChild(cartasComputadora.firstChild);
    // }

    divCartasJugadores.forEach(elem => elem.innerHTML = '');
    // cartasComputadora.innerHTML = '';
    // cartasJugador.innerHTML = '';

    btnDetener.disabled = false;
    btnPedir.disabled = false;

  };
  
  // Esta función crea una nueva varaja
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
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

  //Esta función me permite tomar una carta.
  const pedirCarta = () => {

    if (deck.length === 0) {
      throw "No hay mas cartas";
    }

    return deck.pop();
  };

  // Esta función le da un valor a cada carta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10 :
      (valor * 1);
  };

  

  // Turno: 0 = primer jugador y el último será la computadora
  const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] =  puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  // Crea y muestra la carta que corresponde
  const crearCarta = (carta, turno) => {

    const nuevaImagen = document.createElement('img');
    nuevaImagen.classList.add('carta');
    nuevaImagen.src = `assets/cartas/${carta}.png`;
    divCartasJugadores[turno].append(nuevaImagen);

  };

  // Rutina que hace un delay para mostrar las cartas antes que aparezca el mensaje de alerta
  const determinarGanador = () => {

    const [ puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert('Nadie gana :(');
      } else if (puntosMinimos > 21) {
        alert('Computadora Gana :(');
      } else if (puntosComputadora > 21) {
        alert('Jugador Gana ;)');
      } else {
        alert('Computadora Gana :)');
      }
      inicializarJuego();
    }, 70);
  };



  // Turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;

    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador();
  };

  /*==============================================================================================
  EVENTOS
  ==============================================================================================*/
  btnPedir.addEventListener('click', () => {


    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    // puntosJugador += valorCarta(carta);
    // puntosHTML[0].innerText = puntosJugador;

    crearCarta(carta, 0);

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
    btnPedir.disabled = true;

    turnoComputadora(puntosJugadores[0]);

  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego
  };

})();



