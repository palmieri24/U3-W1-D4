fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
})
    .then(function (capoObj) {
    console.log(capoObj);
    capoObj.forEach(function (element) {
        var Abbigliamento = /** @class */ (function () {
            function Abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
                this._id = _id;
                this.id = _id;
                this.codprod = _codprod;
                this.collezione = _collezione;
                this.capo = _capo;
                this.modello = _modello;
                this.quantita = _quantita;
                this.colore = _colore;
                this.prezzoivaesclusa = _prezzoivaesclusa;
                this.prezzoivainclusa = _prezzoivainclusa;
                this.disponibile = _disponibile;
                this.saldo = _saldo;
            }
            Abbigliamento.prototype.getSaldoCapo = function () {
                return (this.prezzoivainclusa - this.saldo) / 100;
            };
            Abbigliamento.prototype.getAcquistoCapo = function () {
                return this.prezzoivainclusa - this.getSaldoCapo();
            };
            return Abbigliamento;
        }());
        var capoAbbigliamento = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        console.log("Capo d'abbigliamento con id: ".concat(element.id, " ") + element);
    });
})
    .catch(function (err) { return console.log(err); });
