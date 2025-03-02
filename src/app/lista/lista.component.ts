import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [CommonModule], // Bisogna importare CommonModule perché contiene la funzione *ngFor
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  lista: string[] = ['Fiat', 'Lamborghini', 'Dacia'];

  studenti: any = [
    {
      nome: 'Giorgio',
      cognome: 'G',
      matr: '123',
    },
    {
      nome: 'Roberta',
      cognome: 'G',
      matr: '456',
    },
    {
      nome: 'Gino',
      cognome: 'G',
      matr: '789',
    },
  ];
}
