import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent  implements OnInit {
  @Input() articles: Article[] = [];

  constructor() { }

  ngOnInit() {}

}
