import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(respuestas: any) {
    const templateParams = {
      respuesta1: respuestas[1],
      respuesta2: respuestas[2],
      respuesta3: respuestas[3],
      respuesta4: respuestas[4],
      respuesta5: respuestas[5],
      respuesta6: respuestas[6],
      respuesta7: respuestas[7],
      respuesta8: respuestas[8],
      respuesta9: respuestas[9],
      respuesta10: respuestas[10]
    };

    emailjs.send('service_58mb57j', 'template_zpdeqa7', templateParams, 'TvqVKJ5UkqWk23fn5')
      .then((response) => {
        console.log('Email enviado correctamente:', response);
      })
      .catch((err) => {
        console.log('Error al enviar email:', err);
      });
  }
}
