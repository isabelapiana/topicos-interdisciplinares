import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HistoriasComponent } from "./historias/historias.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HistoriasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'site-infantil-historias';
}
