import { Component, OnInit, } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar';

  constructor(private messagesService: MessagesService
  ) { }

  ngOnInit(): void { }

  createHandler(event: any) {
    console.log(event);

    this.messagesService.add(`Momento adicionado com sucesso!`);

  }

}
