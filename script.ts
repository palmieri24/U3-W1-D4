fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((capoObj) => {
    console.log(capoObj);

    capoObj.forEach((element) => {
      class Abbigliamento {
        private id: number;
        codprod: number;
        collezione: string;
        capo: string;
        modello: number;
        quantita: number;
        colore: string;
        prezzoivaesclusa: number;
        prezzoivainclusa: number;
        disponibile: string;
        saldo: number;

        constructor(
          private readonly _id: number,
          _codprod: number,
          _collezione: string,
          _capo: string,
          _modello: number,
          _quantita: number,
          _colore: string,
          _prezzoivaesclusa: number,
          _prezzoivainclusa: number,
          _disponibile: string,
          _saldo: number
        ) {
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
        getSaldoCapo(): string {
          let saldo = this.prezzoivainclusa * (this.saldo / 100);
          return saldo.toFixed(2) + " €";
        }

        getAcquistoCapo(): string {
          let prezzoProdotto =
            this.prezzoivainclusa - parseFloat(this.getSaldoCapo());
          return prezzoProdotto.toFixed(2) + " €";
        }
      }

      let capoAbbigliamento = new Abbigliamento(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );
      console.log(`Capo d'Abbigliamento ${element.id}:`, capoAbbigliamento);
      console.log(`Saldo:`, capoAbbigliamento.getSaldoCapo());
      console.log(`Totale capo:`, capoAbbigliamento.getAcquistoCapo());
    });
  })
  .catch((err) => console.log(err));
