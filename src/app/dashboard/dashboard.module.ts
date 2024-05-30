import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './pages/project-card/project-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalProjectComponent } from './components/modals/modal-project/modal-project.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ModalTaskComponent } from './components/modals/modal-task/modal-task.component';
import { ModalEditTaskComponent } from './components/modals/modal-edit-task/modal-edit-task.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    TasksComponent,
    ProjectsComponent,
    ProjectCardComponent,
    SpinnerComponent,
    ModalProjectComponent,
    ModalTaskComponent,
    ModalEditTaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    TextFieldModule,
  ],
})
export class DashboardModule {}
