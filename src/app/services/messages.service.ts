import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  message: string = '';

  // Mostrar mensagem e limpar após 4 segundos

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.message = '';
  }
}
