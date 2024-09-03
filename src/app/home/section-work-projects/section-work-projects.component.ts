import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from 'src/app/ui/skill-badge/skill-badge.component';
import {
  Project,
  ProjectsService,
} from 'src/app/feature-projects/data-access/projects.service';

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
