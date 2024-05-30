import { Component } from '@angular/core'
import { MenuService } from '@app/shared/services/menu.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})

export class HeaderComponent {
  constructor(private menuService: MenuService) { }

  toggleMenu() {
    this.menuService.menuState()
  }
}