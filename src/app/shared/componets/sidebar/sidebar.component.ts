import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListItem } from 'src/app/interfaces';
import { User } from '../../services/user/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false,
})
export class SidebarComponent  implements OnInit {
  @Input() title: string = '';
  @Input() menuId: string = 'mainMenu';
  @Input() contentId: string = '';
  @Input() icon?: string;

  userName: string = '';
  
  menuItems: ListItem[] = [
    { label: 'Business', value: 'business', icon: 'briefcase-outline' },
    { label: 'Entertainment', value: 'entertainment', icon: 'film-outline' },
    { label: 'General', value: 'general', icon: 'newspaper-outline' },
    { label: 'Health', value: 'health', icon: 'heart-outline' },
    { label: 'Science', value: 'science', icon: 'flask-outline' },
    { label: 'Sports', value: 'sports', icon: 'football-outline' },
    { label: 'Technology', value: 'technology', icon: 'laptop-outline' }
  ];

  @Output() selectCategory = new EventEmitter<ListItem>();

  constructor(private menuCtrl: MenuController, private router: Router, private userService: User) { }

  onSelect(item: ListItem) {
    console.log('Sidebar: selected ->', item);  
    this.menuCtrl.close(this.menuId);
    this.router.navigate(['/home'], { queryParams: { category: item.value } });
    this.selectCategory.emit(item); 
  }


  ngOnInit() {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.userName = `${user.name} ${user.lastName}`;
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
