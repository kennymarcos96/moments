import { Component, OnInit, } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar';

  constructor(
    private momentService: MomentService,
    private router: Router,
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void { }

  createHandler(event: any) {
    console.log(event);
    delete event.id;

    const formData = new FormData();
    Object.keys(event).forEach((key) => {
      formData.append(key, event[key]);
    });

    this.momentService.createMoment(formData).toPromise().then((response: any) => {
      console.log(response);
      this.messagesService.add(response.message);
      // this.router.navigate(['/']);
    });
  }

}
