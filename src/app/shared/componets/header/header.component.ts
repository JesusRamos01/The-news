import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent  implements OnInit {
  @Input() showAvatar: boolean = true; 
  @Input() title: string = '';
  @Input() menuId: string = 'main-menu';
  @Input() avatarUrl?: string ;

  constructor() { }

  ngOnInit() {}

}
