import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
  <div class="content-auth">
    <div class="content-form">
      <div class="form">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent {}
