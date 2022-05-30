import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { EducationAddComponent } from './components/education-add/education-add.component';
import { ExperienceAddComponent } from './components/experience-add/experience-add.component';
import { ProjectsAddComponent } from './components/projects-add/projects-add.component';
import { ProjectsItemComponent } from './components/projects-item/projects-item.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { SoftskillItemComponent } from './components/softskill-item/softskill-item.component';
import { HardskillItemComponent } from './components/hardskill-item/hardskill-item.component';
import { HardskillAddComponent } from './components/hardskill-add/hardskill-add.component';
import { SoftskillAddComponent } from './components/softskill-add/softskill-add.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    EducationAddComponent,
    ExperienceAddComponent,
    ProjectsAddComponent,
    ProjectsItemComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    SoftskillItemComponent,
    HardskillItemComponent,
    HardskillAddComponent,
    SoftskillAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
