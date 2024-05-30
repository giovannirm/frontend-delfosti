import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Project } from '../../core/entities/projects/project.entity'

@Injectable({
  providedIn: 'root'
})

export class ProyectsService {

  private endpoint: string = environment.apiBaseActivity

  constructor(private http: HttpClient) { }

  getProyects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${this.endpoint}/projects`)
  }

  createProject(userId: number, name: string): Observable<Project>{
    return this.http.post<Project>(`${this.endpoint}/projects/${userId}`, { name })
  }
  
}
