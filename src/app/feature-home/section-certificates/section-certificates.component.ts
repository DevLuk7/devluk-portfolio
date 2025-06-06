import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaLinkComponent } from '../../ui/cta-link/cta-link.component';
import { TSkillIconKey } from '../../ui/skills.service';

@Component({
  selector: 'app-section-certificates',
  standalone: true,
  imports: [CommonModule, CtaLinkComponent],
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
