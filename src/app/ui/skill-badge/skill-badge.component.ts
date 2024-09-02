import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeService } from './skill-badge.service';

export type Skill =
  | 'JavaScript'
  | 'TypeScript'
  | 'Angular'
  | 'React'
  | 'Node.js'
  | 'NestJS'
  | 'NgRx'
  | 'RxJS'
  | 'Microfrontend'
  | 'Docker'
  | 'Kubernetes'
  | 'RWD'
  | 'Jest'
  | 'Cypress'
  | 'Storybook'
  | 'Chart.js'
  | 'D3.js'
  | 'NEO4J'
  | 'AG Grid'
  | 'PWA'
  | 'AWS Lambda'
  | 'AWS'
  | 'Sass'
  | 'CoffeeScript'
  | 'CSS3'
  | 'date-fns'
  | 'NPM'
  | 'Yarn'
  | 'WebRTC'
  | 'GitLab';

const skillColor: Partial<Record<Skill, string>> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Angular: '#DD0031',
  React: '#61DAFB',
  'Node.js': '#5FA04E',
  NestJS: '#E0234E',
  NgRx: '#BA2BD2',
  RxJS: '#B7178C',
  PWA: '#5A0FC8',
  Storybook: '#FF4785',
  NEO4J: '#4581C3',
  Sass: '#CC6699',
  Docker: '#2496ED',
  'Chart.js': '#FF6384',
  CoffeeScript: '#2F2625',
  Cypress: '#69D3A7',
  'D3.js': '#F9A03C',
  CSS3: '#1572B6',
  'date-fns': '#770C56',
};

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss',
})
export class SkillBadgeComponent implements OnInit {
  readonly skill = input.required<Skill>();

  private readonly skillBadgeService = inject(SkillBadgeService);

  color!: string;
  baseColor = signal('');
  class = computed(() => {
    // bg-${this.baseColor()}-100
    return `text-${this.baseColor()}-800 dark:bg-gray-700 dark:text-${this.baseColor()}-400 border border-${this.baseColor()}-400`;
  });

  ngOnInit(): void {
    this.color = skillColor[this.skill()] ?? '';
    if (!this.color) {
      this.baseColor.set(this.skillBadgeService.getColor());
    }
  }
}
