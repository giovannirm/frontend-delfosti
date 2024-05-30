import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'projects/:id',
        component: TasksComponent,
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}


// <h1>Vista general</h1>

// <ul>
//   <li *ngFor="let project of projects">
//     <span>{{ project.name }}</span>
//     <button (click)="showTasks(project.id)">Mostrar tareas</button>
//   </li>
// </ul>

// <table *ngIf="tasks.length > 0">
//     <thead>
//         <tr>
//             <th>Título</th>
//             <th>Descripción</th>
//             <th>Estado</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr *ngFor="let task of tasks" (click)="showModal( task.id )">
//             <td>{{ task.title }}</td>
//             <td>{{ task.description }}</td>
//             <td>{{ task.state }}</td>
//         </tr>
//     </tbody>
// </table>

