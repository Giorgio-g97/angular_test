import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DueComponent } from './due/due.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

@Component({
  // Configurazione del componente
  selector: 'app-root', // tag HTML che andremo ad utilizzare
  imports: [
    RouterOutlet /* Route */,
    RouterLink,
    /* Router link */ UnoComponent,
    DueComponent,
    ListaComponent,
    FormComponent,
  ], // Import components
  templateUrl: './app.component.html', // Template grafico HTML
  styleUrl: './app.component.css', // Style CSS
})
export class AppComponent {
  title = '01_test';
}
