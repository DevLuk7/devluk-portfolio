import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillIconComponent } from '../../ui/skill-icon/skill-icon.component';
import { TSkillIconKey } from '../../ui/skills.service';

@Component({
  selector: 'app-section-skills',
  standalone: true,
  imports: [CommonModule, SkillIconComponent],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss',
})
export class SectionSkillsComponent {
  readonly skillsByTech: [string, TSkillIconKey[]][] = [
    ['language', ['html5', 'css3', 'javascript', 'typescript']],
    ['frontend', ['angular', 'react', 'nextdotjs']],
    ['backend', ['nodedotjs', 'express', 'nestjs']],
    ['cloud', ['aws', 'firebase', 'vercel']],
    ['database', ['mongodb', 'neo4j', 'postgresql', 'sqlite']],
  ];
}
