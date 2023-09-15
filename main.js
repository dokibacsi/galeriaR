import { kepekLista } from "./adatok.js"
import Kepek from "./Kepek.js"

$(() => {
    const szuloElem = $('article');
    new Kepek(kepekLista, szuloElem);
});