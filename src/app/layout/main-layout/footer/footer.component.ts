import { Component, computed, inject, signal } from '@angular/core';
import { ScrollSectionService } from '../../../core/services/scrollTo/scroll-section.service';
import { sociol } from '../../../core/constants/sociol';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly scrollSectionService = inject(ScrollSectionService);
  sociol = computed(() => sociol);

  sectionsIds = ['home', 'about', 'skills', 'projects', 'contact'];
  links = [
    {
      title: 'GitHub',
      link: this.sociol().gitHub,
      icon: 'fa-brands fa-github',
    },
    {
      title: 'LinkedIn',
      link: this.sociol().linkedIn,
      icon: 'fa-brands fa-linkedin',
    },
    {
      title: 'WhatsApp',
      link: this.sociol().whatsApp,
      icon: 'fa-brands fa-whatsapp',
    },
    {
      title: 'Email',
      link: 'mailto:' + this.sociol().email,
      icon: 'fa-solid fa-envelope',
    },
  ];

  onScrollToSection(sectionId: string) {
    this.scrollSectionService.scrollToSection(sectionId);
  }
}
