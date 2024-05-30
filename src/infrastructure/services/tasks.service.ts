import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List, Task } from '../../core/entities/tasks/task.entity';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private endpoint: string = environment.apiBaseActivity;

  constructor(private http: HttpClient) {}

  getTasks(projectId: number): Observable<List[]> {
    return this.http.get<List[]>(`${this.endpoint}/projects/tasks/${projectId}`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.endpoint}/tasks/${id}`);
  }

  updateStatusTask(id: number, state: string): Observable<void> {
    console.log(id, state);
    return this.http.patch<void>(`${this.endpoint}/tasks/${id}`, { state });
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.endpoint}/tasks`, task);
  }
}
