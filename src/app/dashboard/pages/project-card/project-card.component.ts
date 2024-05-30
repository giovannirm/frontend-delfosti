import { Component, Input } from '@angular/core';
import { Project } from '@core/entities/projects/project.entity';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent {
  @Input() project: Project = {} as Project;
}
