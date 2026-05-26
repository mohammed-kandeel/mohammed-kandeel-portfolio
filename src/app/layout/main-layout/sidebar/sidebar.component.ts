import { Component, computed, HostListener, inject } from '@angular/core';
import { ScrollSectionService } from '../../../core/services/scrollTo/scroll-section.service';
import { SidebarService } from '../services/sidebar/sidebar.service';
import { sociol } from '../../../core/constants/sociol';

@Component({
  selector: 'app-sidebar',
  imports: [],
templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private readonly sidebarService = inject(SidebarService);
  private readonly scrollSectionService = inject(ScrollSectionService);

  sections = ['home', 'about', 'skills', 'projects', 'contact'];
  isOpen = computed(() => this.sidebarService.toggleSidebar());

  sociol = computed(() => sociol);

  @HostListener('window:resize')
  @HostListener('window:keydown.escape')
  onResize() {
    this.sidebarService.closeSidebar();
  }

  onCloseSidebar() {
    this.sidebarService.closeSidebar();
  }

  onScrollToSection(sectionId: string) {
    this.scrollSectionService.scrollToSection(sectionId);
  }
}
