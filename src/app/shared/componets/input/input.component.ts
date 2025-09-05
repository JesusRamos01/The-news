import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

type   InputType = 'text' | 'password' | 'email' ;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: InputType= 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  constructor() {}

  ngOnInit() {}

  public doWrite(event: any) {
    this.control.setValue(event.target.value);
  }

}
