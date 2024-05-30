import { Injectable } from '@angular/core';
import { AuthEntity } from '@core/entities/auth/auth.entity';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authEndpoint: string = environment.apiBaseActivity;

  constructor(private http: HttpClient) {}

  login(auth: AuthEntity): Observable<void> {
    return this.http.post<void>(`${this.authEndpoint}/auth/login`, auth).pipe(
      tap((data: any) => {
        const { token, expiresIn, userId, role } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expiresIn);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMINISTRATOR';
  }

}
