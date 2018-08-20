import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WritingComponent } from './writing/writing.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'skill', component: SkillComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'writing', component: WritingComponent },
  {path: 'aboutme', component: AboutMeComponent },
  {path: '',redirectTo: '/home',pathMatch:'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    PortfolioComponent,
    WritingComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
