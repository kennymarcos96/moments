import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/moment';
import { environment } from 'src/environments/environment';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent implements OnInit {

  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;


  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //id que está na URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
  }

  // Criar removeHandler
    async removeHandler(id: number) {

    await this.momentService.removeMoment(id).subscribe();

    this.messageService.add('Momento removido com sucesso!');

    this.router.navigate(['/']);
  }



}
