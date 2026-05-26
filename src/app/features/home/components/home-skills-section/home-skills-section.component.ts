import {
  AfterContentChecked,
  Component,
  ElementRef,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import { AnimateService } from '../../../../core/services/animate/animate.service';

@Component({
  selector: 'app-home-skills-section',
  imports: [],
  templateUrl: './home-skills-section.component.html',
  styleUrl: './home-skills-section.component.css',
})
export class HomeSkillsSectionComponent implements AfterContentChecked {
  private readonly animateService = inject(AnimateService);

  headRef = viewChild<ElementRef>('headRef');
  skillsCardsRef = viewChildren<ElementRef>('skillsCardsRef');

  skillsCards = [
    {
      id: 'angular',
      title: 'Angular & Frontend',
      icon: 'fa-brands fa-angular',
      color: 'text-red-400',
      skills: [
        'Angular',
        'Standalone Components',
        'Signals',
        'Routing',
        'Guards',
        'Services',
        'RxJS',
      ],
    },
    {
      id: 'core',
      title: 'Core Technologies',
      icon: 'fa-solid fa-code',
      color: 'text-cyan-400',
      skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
      id: 'ui',
      title: 'UI & Styling',
      icon: 'fa-solid fa-palette',
      color: 'text-blue-400',
      skills: ['Tailwind CSS', 'Bootstrap', 'Angular Material', 'PrimeNG', 'Flowbite', 'Swiper'],
    },
    {
      id: 'apis',
      title: 'APIs & Data',
      icon: 'fa-solid fa-server',
      color: 'text-purple-400',
      skills: ['REST APIs', 'HttpClient', 'Authentication', 'Authorization', 'CRUD Operations'],
    },
    {
      id: 'architecture',
      title: 'Architecture & Concepts',
      icon: 'fa-solid fa-sitemap',
      color: 'text-yellow-400',
      skills: [
        'Lazy Loading',
        'Feature-Based Architecture',
        'Modular Design',
        'Reusable Components',
        'State Management',
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Workflow',
      icon: 'fa-solid fa-toolbox',
      color: 'text-green-400',
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  ngAfterContentChecked(): void {
    this.animate();
  }

  animate() {
    this.animateService
      .animation(this.headRef(), 'animate-[fadeUp_1s_ease-out_0.2s_forwards]')
      ?.observe(this.headRef()?.nativeElement);

    const cardsCssAnimation = [
      'animate-[fadeUp_1s_ease-out_0.5s_forwards]',
      'animate-[fadeUp_1.1s_ease-out_0.6s_forwards]',
      'animate-[fadeUp_1.2s_ease-out_0.7s_forwards]',
      'animate-[fadeUp_1.3s_ease-out_0.8s_forwards]',
      'animate-[fadeUp_1.4s_ease-out_0.9s_forwards]',
      'animate-[fadeUp_1.5s_ease-out_1s_forwards]',
    ];
    this.skillsCardsRef().forEach((skillCard, index) => {
      this.animateService
        .animation(skillCard, cardsCssAnimation[index], 0.1)
        ?.observe(skillCard?.nativeElement);
    });
  }
}
