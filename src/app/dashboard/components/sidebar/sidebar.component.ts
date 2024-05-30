import { Component, OnInit } from '@angular/core';
import { MenuService } from '@app/shared/services/menu.service';
import { AuthService } from '@infrastructure/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  showHide: string = '';
  optionOpen: any = null;

  distrits: any[] = [];

  ngOnInit(): void {
    this.menuService.toggleMenu.subscribe((data) => {
      this.showHide = data;
    });
  }

  closeMenu() {
    this.showHide = '';
    this.menuService.menuActive = false;
  }

  closeTree() {
    if (!this.optionOpen) return;
    this.optionOpen.style.maxHeight = '';
    this.optionOpen = null;
  }

  showTree(opt: any) {
    const oldOpen = this.optionOpen;
    const toggle = opt.nextElementSibling;

    this.closeTree();

    if (!toggle) return;

    if (toggle === oldOpen) return;
    this.optionOpen = toggle;

    toggle.style.maxHeight = `${toggle.scrollHeight}px`;
  }

  logout() {
    this.authService.logout();
    this.closeMenu();
  }
}
