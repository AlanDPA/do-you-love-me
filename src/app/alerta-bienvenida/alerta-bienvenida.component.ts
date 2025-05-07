import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta-bienvenida',
  imports: [],
  templateUrl: './alerta-bienvenida.component.html',
  styles: ``,
})
export class AlertaBienvenidaComponent implements OnInit {
  ngOnInit(): void {
    this.getName();
  }
  displayName: string | null = null;
  getName() {
    let person = prompt('Hola, ingresa tu nombre:')

    if (person === null || person === '') {
      this.displayName = 'El usuario canceló el prompt. (Si, fuiste tú, princesita)'
    } else {
      this.displayName = `¡Bienvenida ${person}, es un placer tenerte por aquí!`
    }
  }
}
