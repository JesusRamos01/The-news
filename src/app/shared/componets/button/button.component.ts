import { Component, OnInit, Input} from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

type ButtonType = 'button' | 'submit' ;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent  implements OnInit {

  @Input() value: string = '';
  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {}

}
