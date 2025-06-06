import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkProjectsComponent } from '../section-work-projects/section-work-projects.component';
import { SectionSkillsComponent } from '../section-skills/section-skills.component';
import { SectionSideProjectsComponent } from '../section-side-projects/section-side-projects.component';
import { SectionCertificatesComponent } from '../section-certificates/section-certificates.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionWorkProjectsComponent,
    SectionSkillsComponent,
    SectionSideProjectsComponent,
    SectionCertificatesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
