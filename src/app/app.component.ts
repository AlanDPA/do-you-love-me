import { Component } from '@angular/core';
import { AlertaBienvenidaComponent } from "./alerta-bienvenida/alerta-bienvenida.component";
import { PreguntasComponent } from "./preguntas/preguntas.component";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [AlertaBienvenidaComponent, PreguntasComponent, BrowserModule, RouterModule],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Cita a ciegas';
}
