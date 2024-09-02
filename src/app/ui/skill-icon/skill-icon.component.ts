import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  siTypescript,
  siJavascript,
  siD3dotjs,
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
  siNeo4j,
  siPwa,
  siAmazonwebservices,
  siSass,
  siCoffeescript,
  siCss3,
  siDatefns,
  siNpm,
  siYarn,
  siWebrtc,
  siHtml5,
  siVercel,
} from 'simple-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export const SkillIcon = {
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
  aws: siAmazonwebservices,
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
};

export type TSkillIcon = typeof SkillIcon;
export type TSkillIconKey = keyof TSkillIcon;

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss',
})
export class SkillIconComponent implements OnInit {
  readonly skill = input.required<TSkillIconKey>();

  private readonly sanitizer = inject(DomSanitizer);

  icon!: SafeHtml;

  ngOnInit(): void {
    const siIcon = SkillIcon[this.skill()];
    if (siIcon) {
      this.icon = this.sanitizer.bypassSecurityTrustHtml(
        siIcon.svg.replace('<svg', `<svg style="fill: #${siIcon.hex};"`)
      );
    }
  }
}
