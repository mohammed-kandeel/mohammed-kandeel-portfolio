import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollSectionService {
  private readonly viewportScroller = inject(ViewportScroller);

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
}
