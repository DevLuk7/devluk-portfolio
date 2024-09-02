import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkProjectsComponent } from './section-work-projects/section-work-projects.component';
import {
  SkillIconComponent,
  TSkillIconKey,
} from '../ui/skill-icon/skill-icon.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { ResumeButtonComponent } from '../ui/resume-button/resume-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SectionWorkProjectsComponent,
    SectionSkillsComponent,
    SkillIconComponent,
    ResumeButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly certificates: { name: TSkillIconKey; link: string }[] = [
    {
      name: 'nestjs',
      link: '/certificates/nestjs-fundamentals.pdf',
    },
  ];
}
