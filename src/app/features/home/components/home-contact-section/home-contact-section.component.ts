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

@Component({
  selector: 'app-home-contact-section',
  imports: [],
  templateUrl: './home-contact-section.component.html',
  styleUrl: './home-contact-section.component.css',
})
export class HomeContactSectionComponent implements AfterContentChecked {
  private readonly animateService = inject(AnimateService);

  headRef = viewChild<ElementRef>('headRef');
  contactItemsRef = viewChildren<ElementRef>('contactItemsRef');
  cvBtnRef = viewChild<ElementRef>('cvBtnRef');

  sociol = computed(() => sociol);
  contactItems = [
    {
      title: 'email',
      link: 'mailto:' + this.sociol().email,
      icon: 'fa-solid fa-envelope text-secondary-400',
      text: this.sociol().email,
    },
    {
      title: 'linkedIn',
      link: this.sociol().linkedIn,
      icon: 'fa-brands fa-linkedin-in text-blue-400',
      text: this.sociol().linkedIn,
    },
    {
      title: 'gitHub',
      link: this.sociol().gitHub,
      icon: 'fa-brands fa-github text-white',
      text: this.sociol().gitHub,
    },
    {
      title: 'whatsApp',
      link: this.sociol().whatsApp,
      icon: 'fa-brands fa-whatsapp text-green-400',
      text: this.sociol().phone,
    },
  ];

  ngAfterContentChecked(): void {
    this.animation();
  }

  animation() {
    this.animateService
      .animation(this.headRef(), 'animate-[fadeUp_1s_ease-out_0.2s_forwards]')
      ?.observe(this.headRef()?.nativeElement);

    const cardsCssAnimation = [
      'animate-[fadeUp_1s_ease-out_0.5s_forwards]',
      'animate-[fadeUp_1.1s_ease-out_0.6s_forwards]',
      'animate-[fadeUp_1.2s_ease-out_0.7s_forwards]',
      'animate-[fadeUp_1.3s_ease-out_0.8s_forwards]',
      'animate-[fadeUp_1.5s_ease-out_1.2s_forwards]',
    ];
    this.contactItemsRef().forEach((contactCard, index) => {
      this.animateService
        .animation(contactCard, cardsCssAnimation[index], 0.1)
        ?.observe(contactCard?.nativeElement);
    });

    this.animateService
      .animation(this.cvBtnRef(), 'animate-[fadeUp_1s_ease-out_1s_forwards]', 0.2)
      ?.observe(this.cvBtnRef()?.nativeElement);
  }
}
