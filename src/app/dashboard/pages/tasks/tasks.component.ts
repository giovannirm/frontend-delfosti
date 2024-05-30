import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { List, Task } from '@core/entities/tasks/task.entity';
import { Project } from '@core/entities/projects/project.entity';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '@infrastructure/services/tasks.service';
import { ProyectsService } from '@infrastructure/services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@infrastructure/services/auth.service';
import { ModalEditTaskComponent } from '@app/dashboard/components/modals/modal-edit-task/modal-edit-task.component';
import { ModalTaskComponent } from '@app/dashboard/components/modals/modal-task/modal-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
})
export class TasksComponent implements OnInit {
  projects: Project[] = [];
  tasks: Task[] = [];
  lists: List[] = [];
  isLoading: boolean = true;

  constructor(
    private proyectsService: ProyectsService,
    private tasksService: TasksService,
    private readonly authService: AuthService,
    public dialog: MatDialog,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId = this.router.snapshot.paramMap.get('id');

    this.showTasks(Number(projectId!));
  }

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showTasks(projectId: number) {
    this.tasksService.getTasks(projectId).subscribe({
      next: (data: List[]) => {
        this.lists = [];
        this.lists = data;
        this.isLoading = false;
      },
    });
  }

  showModal(taskSelected: Task) {
    console.log(taskSelected);
    this.dialog.open(ModalEditTaskComponent, {
      data: {
        task: taskSelected,
        onEdit: this.onSaveState,
      },
    });
  }

  onSaveState = (projectId: number, taskId: number, state: string): void => {
    this.tasksService.updateStatusTask(taskId, state).subscribe({
      next: () => {
        this.showTasks(projectId);
      },
    });
  };

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  
  addTask(): void {
    const dialogRef = this.dialog.open(ModalTaskComponent, {
      data: { onSave: this.onSaveProject },
    });
  }

  onSaveProject = (task: Task): void => {
    const userId = Number(this.authService.getUserId());
    const projectId = Number(this.router.snapshot.paramMap.get('id'));
    task.projectId = projectId;
    task.userId = userId;

    this.tasksService.createTask(task).subscribe({
      next: () => {
        this.ngOnInit();
      },
    });
  }
}
