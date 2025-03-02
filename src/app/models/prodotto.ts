export class Prodotto {
  // Definiamo come dovrebbe essere il prodotto da inserire
  nom: string | undefined;
  des: string | undefined;
  pre: number | undefined;

  /**
   * Inizialillo le variabili
   * è come preparare un cassetto di un armadio (oggetto)
   * con i vari scompartimenti intimo, pigiami, accessori ecc..(props oggetto)
   */

  constructor(
    varNom: string | undefined,
    varDes: string | undefined,
    VarPre: number | undefined
  ) {
    this.nom = varNom;
    this.des = varDes;
    this.pre = VarPre;
  }
}
