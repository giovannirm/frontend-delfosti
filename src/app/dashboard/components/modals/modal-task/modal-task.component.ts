import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '@core/entities/tasks/task.entity';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.sass'],
})
export class ModalTaskComponent {
  @ViewChild('autosize') autosize: CdkTextareaAutosize =
    {} as CdkTextareaAutosize;
  task: Task = {} as Task;
  states: string[] = ['PENDING', 'IN_PROGRESS', 'DONE'];

  constructor(
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: { onSave: (task: Task) => void }
  ) {}

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveProject(task: Task) {
    console.log(task);
    this.data.onSave(task);
    this.dialogRef.close();
  }
}
