import { Component, OnInit } from '@angular/core';
// Rotas
import { ActivatedRoute, Router } from '@angular/router';
// Interface
import { Moment } from 'src/app/moment';
// MomentService
import { MomentService } from 'src/app/services/moment.service';
@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment
  btnText: string = 'Editar';

  constructor(private momentService: MomentService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id).subscribe(item => {
      this.moment = item.data;
    });

  }

}
