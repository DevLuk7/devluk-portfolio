import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SkillIconComponent,
  TSkillIconKey,
} from 'src/app/ui/skill-icon/skill-icon.component';

@Component({
  selector: 'app-section-skills',
  standalone: true,
  imports: [CommonModule, SkillIconComponent],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss',
})
export class SectionSkillsComponent {
  readonly skills: TSkillIconKey[] = [
    'javascript',
    'typescript',
    'angular',
    'react',
    'nodedotjs',
    'nestjs',
  ];

  readonly skillsByTech: [string, TSkillIconKey[]][] = [
    ['language', ['html5', 'css3', 'javascript', 'typescript']],
    ['frontend', ['angular', 'react']],
    ['backend', ['nodedotjs', 'nestjs']],
    ['cloud', ['aws', 'firebase', 'vercel']],
    ['database', ['mongodb', 'neo4j', 'postgresql', 'sqlite']],
  ];
}
