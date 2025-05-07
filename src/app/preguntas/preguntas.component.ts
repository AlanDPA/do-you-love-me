import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-preguntas',
  standalone:true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './preguntas.component.html',
})
export class PreguntasComponent {
  title = '¡Juguemos a las preguntas preguntonas!';

  preguntas = [
    {
      id: 1,
      pregunta: '¿Crees que los gatos dominarán el mundo algún día?',
      alternativas: ['si', 'no'],
    },
    { id: 2, pregunta: '¿Te harías un tatuaje?', alternativas: ['si', 'no'] },
    {
      id: 3,
      pregunta: '¿Te gustaría que nos conozcamos?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 4,
      pregunta:
        '¿Te gusta cuando alguien te manda un mensaje solo para decirte “pensé en ti”?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 5,
      pregunta: '¿Te gustaría que alguien te dedicara una canción cursi?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 6,
      pregunta: '¿Si pudieras viajar al pasado, lo harías?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 7,
      pregunta: '¿Alguna vez te has enamorado de un personaje ficticio?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 8,
      pregunta:
        '¿Has bailado alguna vez solo en tu cuarto como si estuvieras en un videoclip?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 9,
      pregunta: '¿Alguna vez has enviado un mensaje vergonzoso por error?',
      alternativas: ['Si', 'No'],
    },
    {
      id: 10,
      pregunta: '¿Sientes que has sido 100% honesta conmigo?',
      alternativas: ['Si', 'No'],
    },
  ];

  respuestas: any = {};

  constructor(private emailService:EmailService){}

  sendDataQuestions(event: Event) {
    event.preventDefault()
    console.log(this.respuestas)
    this.emailService.sendEmail(this.respuestas)
  }
}
