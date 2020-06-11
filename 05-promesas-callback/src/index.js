import { buscarHeroe } from './js/callbacks';
import './sass/estilos.scss';

const heroeId = 'spider';

buscarHeroe( heroeId, (heroe) => {
  console.log(heroe);
});