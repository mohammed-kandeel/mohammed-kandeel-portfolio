import { Component } from '@angular/core';
import { HomeAboutSectionComponent } from '../../components/home-about-section/home-about-section.component';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { HomeProjectsSectionComponent } from '../../components/home-projects-section/home-projects-section.component';
import { HomeSkillsSectionComponent } from '../../components/home-skills-section/home-skills-section.component';
import { HomeContactSectionComponent } from '../../components/home-contact-section/home-contact-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeHeroSectionComponent,
    HomeAboutSectionComponent,
    HomeProjectsSectionComponent,
    HomeSkillsSectionComponent,
    HomeContactSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
