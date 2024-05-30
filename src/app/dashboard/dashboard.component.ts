import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div class="container">
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>`,
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent {}
