import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared-module";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../app/shared/interceptors/interceptor/interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(
    { _forceStatusbarPadding: true }
  ), AppRoutingModule, HttpClientModule, SharedModule],
  providers: [{
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
