import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: false,
})
export class ArticleComponent  implements OnInit {

  @Input() article!: Article;
  @Input() index!: number;

  constructor() { }

  ngOnInit() {}

}
