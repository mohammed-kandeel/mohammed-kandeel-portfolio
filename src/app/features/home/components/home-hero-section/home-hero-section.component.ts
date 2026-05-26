import {
  AfterContentChecked,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  viewChild,
} from '@angular/core';
import { sociol } from '../../../../core/constants/sociol';
import { AnimateService } from '../../../../core/services/animate/animate.service';
import { ScrollSectionService } from '../../../../core/services/scrollTo/scroll-section.service';

@Component({
  selector: 'app-home-hero-section',
  imports: [],
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.css',
})
export class HomeHeroSectionComponent implements AfterContentChecked, OnInit {
  private readonly scrollSectionService = inject(ScrollSectionService);
  private readonly animateService = inject(AnimateService);

  sociol = computed(() => sociol);
  infoEl = viewChild<ElementRef>('info');
  imageEl = viewChild<ElementRef>('image');

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
  ngOnInit(): void {
    this.animation();
  }
  ngAfterContentChecked(): void {
    this.animation();
  }
  onScrollToSection(sectionId: string) {
    this.scrollSectionService.scrollToSection(sectionId);
  }
  animation() {
    this.animateService
      .animation(this.infoEl(), 'animate-[fadeRight_1.2s_ease-out_0.2s_forwards]')
      ?.observe(this.infoEl()?.nativeElement);
    this.animateService
      .animation(this.imageEl(), 'animate-[fadeLeft_1.2s_ease-out_0.2s_forwards]')
      ?.observe(this.imageEl()?.nativeElement);
  }
}
