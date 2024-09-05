import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TSkillIconKey } from 'src/app/ui/skills.service';
import { SkillIconComponent } from 'src/app/ui/skill-icon/skill-icon.component';
import { CtaLinkComponent } from 'src/app/ui/cta-link/cta-link.component';

@Component({
  selector: 'app-section-certificates',
  standalone: true,
  imports: [CommonModule, SkillIconComponent, CtaLinkComponent],
  templateUrl: './section-certificates.component.html',
  styleUrl: './section-certificates.component.scss',
})
export class SectionCertificatesComponent {
  readonly certificates: {
    name: string;
    skill: TSkillIconKey;
    link: string;
  }[] = [
    {
      name: 'NestJS Fundamentals',
      skill: 'nestjs',
      link: '/certificates/nestjs-fundamentals.pdf',
    },
    {
      name: 'NestJS Authentication and Authorization',
      skill: 'nestjs',
      link: '/certificates/nestjs-authentication.pdf',
    },
    {
      name: 'NestJS Advanced Concepts',
      skill: 'nestjs',
      link: '/certificates/nestjs-advanced-concepts.pdf',
    },
  ];
}
