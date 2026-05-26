import { HostListener, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleSidebar = signal<boolean>(false);

  openSidebar() {
    this.toggleSidebar.set(true);
  }
  closeSidebar() {
    this.toggleSidebar.set(false);
  }
  toggleClick() {
    this.toggleSidebar.set(!this.toggleSidebar());
  }
}
