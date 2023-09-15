import KepElem from './KepElem.js' 

class Kepek{
    #lista = [];

    constructor(lista, szuloElem) {
      this.#lista = lista;
      szuloElem.append(`<div id = "foTarolo">`);
      this.tarolo = szuloElem.children("#foTarolo");
      this.megjelenito();
    }

    megjelenito(){
            this.#lista.forEach(elem => {
                new KepElem(elem, this.tarolo);
            });
        }   
}

export default Kepek;