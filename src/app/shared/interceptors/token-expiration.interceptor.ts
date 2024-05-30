import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable()
export class TokenExpirationInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone()

    // Verifica si existe un token almacenado y si ha expirado
    const tokenExpiration = localStorage.getItem('expiresIn')
    if (tokenExpiration && new Date(tokenExpiration) < new Date()) {
      // Elimina el token si ha expirado
      localStorage.removeItem('token')
      localStorage.removeItem('expiresIn')

      // Redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/'])
    }

    return next.handle(clonedRequest)
  }
}
