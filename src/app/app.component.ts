import { Component } from '@angular/core';
import { AlertaBienvenidaComponent } from "./alerta-bienvenida/alerta-bienvenida.component";
import { PreguntasComponent } from "./preguntas/preguntas.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [AlertaBienvenidaComponent, PreguntasComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Cita a ciegas';
}
