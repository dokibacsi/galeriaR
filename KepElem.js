class KepElem{
    #adat = {};
    constructor(adat, szuloElem, index){
        this.#adat = adat;
        this.tarolo = szuloElem;
        this.index = index;
        this.#kepTarolok();
    }

    #kepTarolok(){
        let adatLista = this.#adat
        let txt = "";
        txt += '<div class="kepTarolo">'
        for (const key in adatLista) {
            const elem = adatLista[key];
            console.log()
            txt += `<div class="adatok"><img src="${adatLista['kep']}"></img></div>`;
        }
        txt += '</div>'
        this.tarolo.append(txt);
    }
}

export default KepElem;