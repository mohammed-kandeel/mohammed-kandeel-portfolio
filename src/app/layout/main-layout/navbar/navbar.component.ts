import { isPlatformServer } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { ScrollSectionService } from '../../../core/services/scrollTo/scroll-section.service';
import { SidebarService } from '../services/sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  private readonly sidebarService = inject(SidebarService);
  private readonly scrollSectionService = inject(ScrollSectionService);

  sections = ['home', 'about', 'skills', 'projects', 'contact'];
  activeAnchor = signal<string>('home');
  toggleSidebar = signal<boolean>(false);

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformServer(this.pLATFORM_ID)) return;
    const scrollPosition = window.scrollY;
    this.sections.forEach((section) => {
      const sectionElement = document.querySelector('#' + section) as HTMLElement;
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 200;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeAnchor.set(section);
        }
      }
    });
  }

  onToggleSidebar() {
    this.sidebarService.toggleClick();
  }

  onScrollToSection(sectionId: string) {
    this.scrollSectionService.scrollToSection(sectionId);
  }
}
