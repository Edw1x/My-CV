import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HeroComponent } from './main/hero/hero.component';
import { ProjectsSectionComponent } from './main/projects-section/projects-section.component';
import { BiographySectionComponent } from './main/biography-section/biography-section.component';
import { SocialsSectionComponent } from './main/socials-section/socials-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HeroComponent,
    ProjectsSectionComponent,
    BiographySectionComponent,
    SocialsSectionComponent
  ],
  imports: [
    BrowserModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
