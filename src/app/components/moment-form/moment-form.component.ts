import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/moment';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;
  // momentData  Vai iniciar como nulo
  @Input() momentData: Moment | null = null;

  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]), // validação de erro
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('title')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: event.target.files[0] });
  }

  // Trava na Validação
  submit() {
    console.log(this.momentForm.value);
    if (this.momentForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.momentForm.value);

  }
}
