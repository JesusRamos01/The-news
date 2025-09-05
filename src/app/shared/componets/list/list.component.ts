import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ListItem } from '../../../interfaces/index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})

export class ListComponent  implements OnInit {
  @Input() items: ListItem[] = [];
  @Output() selectItem = new EventEmitter<ListItem>();


  onSelect(item: ListItem) {
    console.log('List: click', item)
    this.selectItem.emit(item);
    
  }


  constructor() { }

  
  ngOnInit() {}

}
