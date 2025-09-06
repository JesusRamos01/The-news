import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './componets/input/input.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './componets/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componets/header/header.component';
import { CardComponent } from './componets/card/card.component';
import { ModalComponent } from './componets/modal/modal.component';
import { PrincipalnewsComponent } from './componets/principalnews/principalnews.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { ListComponent } from './componets/list/list.component';
import { ArticleComponent } from './componets/article/article.component';
import { SelectComponent } from './componets/select/select.component';
import { User } from './services/user/user';
import { Storage } from './provaiders/storage/storage';
import { Uid } from './provaiders/uid/uid';

const services = [User];

const provaiders = [Storage, Uid];

@NgModule({
  declarations: [InputComponent, ButtonComponent, HeaderComponent, CardComponent, ModalComponent, PrincipalnewsComponent, SidebarComponent, ListComponent, ArticleComponent, SelectComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule, HeaderComponent, CardComponent, ModalComponent, PrincipalnewsComponent, SidebarComponent, ListComponent, ArticleComponent, SelectComponent],
})
export class SharedModule { }
