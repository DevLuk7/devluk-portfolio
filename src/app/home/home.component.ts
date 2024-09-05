import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkProjectsComponent } from './section-work-projects/section-work-projects.component';
import { SkillIconComponent } from '../ui/skill-icon/skill-icon.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionSideProjectsComponent } from './section-side-projects/section-side-projects.component';
import { SectionCertificatesComponent } from './section-certificates/section-certificates.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SectionWorkProjectsComponent,
    SectionSkillsComponent,
    SkillIconComponent,
    SectionSideProjectsComponent,
    SectionCertificatesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
