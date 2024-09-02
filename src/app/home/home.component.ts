import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkProjectsComponent } from './section-work-projects/section-work-projects.component';
import {
  SkillIconComponent,
  TSkillIconKey,
} from '../ui/skill-icon/skill-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SectionWorkProjectsComponent, SkillIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly skills: TSkillIconKey[] = [
    'javascript',
    'typescript',
    'angular',
    'react',
    'nodedotjs',
    'nestjs',
  ];

  readonly certificates: { name: TSkillIconKey; link: string }[] = [
    {
      name: 'nestjs',
      link: '/certificates/nestjs-fundamentals.pdf',
    },
  ];
}
