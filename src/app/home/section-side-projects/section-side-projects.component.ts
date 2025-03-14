import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';
import { SkillBadgeComponent } from '../../ui/skill-badge/skill-badge.component';
import {
  Project,
  ProjectsService,
} from '../../feature-projects/data-access/projects.service';

@Component({
  selector: 'app-section-side-projects',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent, LucideAngularModule],
  templateUrl: './section-side-projects.component.html',
  styleUrl: './section-side-projects.component.scss',
})
export class SectionSideProjectsComponent {
  readonly workProjects: Project[] = inject(ProjectsService).sideProjects;
  readonly externalLinkIcon = ExternalLink;
}
