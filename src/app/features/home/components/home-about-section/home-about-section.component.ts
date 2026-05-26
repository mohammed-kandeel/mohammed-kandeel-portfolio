import {
  AfterContentChecked,
  Component,
  computed,
  ElementRef,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import { sociol } from '../../../../core/constants/sociol';
import { AnimateService } from '../../../../core/services/animate/animate.service';
import { ScrollSectionService } from '../../../../core/services/scrollTo/scroll-section.service';

@Component({
  selector: 'app-home-about-section',
  imports: [],
  templateUrl: './home-about-section.component.html',
  styleUrl: './home-about-section.component.css',
})
export class HomeAboutSectionComponent implements AfterContentChecked {
  private readonly scrollSectionService = inject(ScrollSectionService);
  private readonly animateService = inject(AnimateService);

  sociol = computed(() => sociol);
  headingRef = viewChild<ElementRef>('headingRef');
  profileCardRef = viewChild<ElementRef>('profileCardRef');
  paragraphsRef = viewChildren<ElementRef>('paragraphsRef');

  ngAfterContentChecked(): void {
    this.animation();
  }
  onScrollToSection(sectionId: string) {
    this.scrollSectionService.scrollToSection(sectionId);
  }
  animation() {
    this.animateService
      .animation(this.headingRef(), 'animate-[fadeRight_1.2s_ease-out_0.2s_forwards]', 0.4)
      ?.observe(this.headingRef()?.nativeElement);

    this.animateService
      .animation(this.profileCardRef(), 'animate-[fadeLeft_1.2s_ease-out_0.7s_forwards]', 0.4)
      ?.observe(this.profileCardRef()?.nativeElement);

    const animateCss = [
      'animate-[fadeUp_1s_ease-out_0.7s_forwards]',
      'animate-[fadeUp_1s_ease-out_0.8s_forwards]',
      'animate-[fadeUp_1s_ease-out_0.9s_forwards]',
      'animate-[fadeUp_1s_ease-out_1s_forwards]',
    ];
    this.paragraphsRef().forEach((paragraph, index) => {
      this.animateService
        .animation(paragraph, animateCss[index])
        ?.observe(paragraph?.nativeElement);
    });
  }
}
