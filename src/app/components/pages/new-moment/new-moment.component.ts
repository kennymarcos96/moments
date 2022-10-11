import { Component, OnInit, } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar';

  constructor(
    // private momentService: MomentService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void { }

  createHandler(event: any) {
    console.log(event);

    this.messagesService.add(`Momento adicionado com sucesso!`);

    this.router.navigate(['/']); // leva o Usuário para Home após compartilhar
  }

}
