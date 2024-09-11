import { Injectable } from '@angular/core';
import {
  siJavascript,
  siTypescript,
  siReact,
  siNodedotjs,
  siNestjs,
  siNgrx,
  siReactivex,
  siDocker,
  siKubernetes,
  siJest,
  siCypress,
  siStorybook,
  siChartdotjs,
  siD3dotjs,
  siNeo4j,
  siPwa,
  siSass,
  siCoffeescript,
  siCss3,
  siDatefns,
  siNpm,
  siYarn,
  siWebrtc,
  siHtml5,
  siVercel,
  siMongodb,
  siPostgresql,
  siSqlite,
  SimpleIcon,
  siTailwindcss,
  siGitlab,
  siNextdotjs,
  siExpress,
} from 'simple-icons';

const randomColors = [
  'blue',
  'gray',
  'red',
  'green',
  'yellow',
  'indigo',
  'purple',
  'pink',
];

export const skillIcon = {
  javascript: siJavascript,
  typescript: siTypescript,
  angular: null,
  react: siReact,
  nodedotjs: siNodedotjs,
  nestjs: siNestjs,
  ngrx: siNgrx,
  rxjs: siReactivex,
  docker: siDocker,
  kubernetes: siKubernetes,
  Jest: siJest,
  cypress: siCypress,
  storybook: siStorybook,
  chartdotjs: siChartdotjs,
  d3dotjs: siD3dotjs,
  neo4j: siNeo4j,
  pwa: siPwa,
  aws: null,
  sass: siSass,
  coffeescript: siCoffeescript,
  css3: siCss3,
  datefns: siDatefns,
  npm: siNpm,
  yarn: siYarn,
  webrtc: siWebrtc,
  firebase: null,
  html5: siHtml5,
  vercel: siVercel,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  sqlite: siSqlite,
  aggrid: null,
  rwd: null,
  gitlab: siGitlab,
  tailwindcss: siTailwindcss,
  elf: null,
  nextdotjs: siNextdotjs,
  express: siExpress,
};

export const skillColor: Partial<Record<TSkillIconKey, string>> = {
  angular: '#e8015b',
  // 'linear-gradient(135deg, #f124b0, #482bee),linear-gradient(225deg, #e8015b, #5348e5)',
};

export const skillName: Partial<Record<TSkillIconKey, string>> = {
  angular: 'Angular',
  firebase: 'Firebase',
  aggrid: 'AG Grid',
  rwd: 'RWD',
  elf: 'Elf',
  aws: 'AWS',
};

export const skillCustomIcon: Partial<Record<TSkillIconKey, string>> = {
  angular: 'angular-color.svg',
  firebase: 'firebase-color.svg',
  aggrid: 'aggrid-color.svg',
  rwd: 'rwd-color.svg',
  elf: 'elf-color.png',
  aws: 'aws-color.svg',
};

export type TSkillIcon = typeof skillIcon;
export type TSkillIconKey = keyof TSkillIcon;

@Injectable({ providedIn: 'root' })
export class SkillBadgeService {
  private randomColors = [...randomColors];

  getColor(skill: TSkillIconKey): string {
    const icon = skillIcon[skill];
    if (icon) {
      return `#${icon.hex}`;
    }
    const color = skillColor[skill];
    if (color) {
      return color;
    }
    return '';
  }

  getName(skill: TSkillIconKey): string {
    const icon = skillIcon[skill];
    if (icon) {
      return icon.title;
    }
    return skillName[skill] || '';
  }

  getRandomColor(): string {
    const randomColor = this.randomColors.shift();

    if (this.randomColors.length === 0) {
      this.randomColors = [...randomColors];
    }

    return randomColor as string;
  }

  getIcon(): SimpleIcon | null {
    return null;
  }
}
