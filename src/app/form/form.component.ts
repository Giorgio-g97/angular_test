import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule], // Serve per Binding form
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  nome: string | undefined;
  descrizione: string | undefined;
  prezzo: number | undefined;

  /**
   * Dichiaro una nuova prop dove verranno
   * salvati i prodotti.
   * new Array è come dichiarare un array buoto []
   */
  elencoProd: Prodotto[] = new Array();

  salva(): void {
    console.log('Prodotto salvato!');
    // Inizializzo la classe Prodotto prendendomi come parametri gli input presi da ngModel
    let prod = new Prodotto(this.nome, this.descrizione, this.prezzo);
    this.elencoProd.push(prod);
    console.log(prod);
    // Step successivo, linkare il nuovo oggetto nella tabella
  }
}
