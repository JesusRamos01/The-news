import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NewsResponse, Article } from 'src/app/interfaces';
import { News } from 'src/app/shared/services/news/news';
import { ListItem } from 'src/app/interfaces';

  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

    public articles: Article[] = [];
    public selectedCategory: string = '';
  

  constructor(private menu: MenuController, private newService: News) {}

  ngOnInit() {
     this.newService.getTopHeadLinesByCategory(this.selectedCategory);
    
     this.loadCategory();
  }


  openSideBar() {
    this.menu.enable(true, 'mainMenu');
    this.menu.open('mainMenu');
  }

  onCategorySelected(item: ListItem) {
    console.log('Categoría seleccionada:', item.value);
    this.selectedCategory = item.value;
    this.loadCategory(item.value);

  }


  loadCategory(category?: string) {
  this.articles = [];
  this.newService.getTopHeadLines(category)
    .subscribe(articles => this.articles.push(...articles));
}

loadData(event: any) { 
 this.newService.getTopHeadLinesByCategory(this.selectedCategory, true)
 .subscribe(articles => {
   this.articles = articles;

     event.target.complete();

  });
}
 
}
