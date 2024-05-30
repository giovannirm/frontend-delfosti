import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProjectComponent } from '@app/dashboard/components/modals/modal-project/modal-project.component';
import { Project } from '@core/entities/projects/project.entity';
import { AuthService } from '@infrastructure/services/auth.service';
import { ProyectsService } from '@infrastructure/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  projects: Project[] = [];
  isLoading: boolean = true;

  constructor(
    private proyectsService: ProyectsService,
    private readonly authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.proyectsService.getProyects().subscribe({
      next: (data: Project[]) => {
        this.projects = data;
        this.isLoading = false;
      },
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalProjectComponent, {
      data: { onSave: this.onSaveProject },
    });
  }

  onSaveProject = (name: string): void => {
    const userId = this.authService.getUserId();
    this.proyectsService.createProject(userId, name).subscribe({
      next: () => {
        this.ngOnInit();
      },
    });
  }
  
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
