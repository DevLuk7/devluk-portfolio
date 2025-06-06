import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Project,
  ProjectsService,
} from '../../feature-projects/data-access/projects.service';
import { SkillBadgeComponent } from '../../ui/skill-badge/skill-badge.component';

@Component({
  selector: 'app-section-work-projects',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent],
  templateUrl: './section-work-projects.component.html',
  styleUrl: './section-work-projects.component.scss',
})
export class SectionWorkProjectsComponent {
  readonly workProjects: Project[] = inject(ProjectsService).workProjects;
}
