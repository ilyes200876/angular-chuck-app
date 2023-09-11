import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChuckComponent } from './chuck/chuck.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent,
    NavBarComponent,
    ChuckComponent
  ],
  imports: [
    // fonctionnalité
    BrowserModule,
    HttpClientModule,
    // composant & module
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
