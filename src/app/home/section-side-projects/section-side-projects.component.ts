import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Project,
  ProjectsService,
} from 'src/app/feature-projects/data-access/projects.service';
import { SkillBadgeComponent } from 'src/app/ui/skill-badge/skill-badge.component';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';

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
