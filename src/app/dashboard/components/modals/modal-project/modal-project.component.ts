import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Project } from '@core/entities/projects/project.entity';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.sass'],
})
export class ModalProjectComponent {
  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: { onSave: (name: string) => void }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onSave(name: string) {
    this.data.onSave(name);
    this.dialogRef.close();
  }
}
