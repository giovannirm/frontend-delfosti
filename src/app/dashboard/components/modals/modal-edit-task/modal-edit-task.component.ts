import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '@core/entities/tasks/task.entity';

@Component({
  selector: 'app-modal-edit-task',
  templateUrl: './modal-edit-task.component.html',
  styleUrls: ['./modal-edit-task.component.sass'],
})
export class ModalEditTaskComponent {
  task: Task = this.data.task;
  state: string = this.task.state;

  states: string[] = ['PENDING', 'IN_PROGRESS', 'DONE'];

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      task: Task;
      onEdit: (projectId: number, taskId: number, state: string) => void;
    }
  ) {}

  onSaveState() {
    console.log(this.task);
    const stateIsChanged = this.task.state !== this.state;
    if (stateIsChanged) {
      this.data.onEdit(this.task.projectId, this.task.id, this.state);
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
