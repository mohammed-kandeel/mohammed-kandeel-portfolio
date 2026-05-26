import { isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimateService {
  private readonly pLATFORM_ID = inject(PLATFORM_ID);

  animation(
    elementRef: ElementRef<any> | undefined,
    cssAnimate: string,
    threshold: number = 0.2,
  ): IntersectionObserver | null {
    if (isPlatformServer(this.pLATFORM_ID)) return null;

    const element = elementRef?.nativeElement;

    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            if (target === element) {
              target.classList.add(cssAnimate);
              observer.unobserve(element);
            }
          }
        });
      },
      { threshold: threshold },
    );
  }
}
