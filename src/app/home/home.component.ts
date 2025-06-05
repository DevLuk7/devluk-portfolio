import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkProjectsComponent } from './section-work-projects/section-work-projects.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionSideProjectsComponent } from './section-side-projects/section-side-projects.component';
import { SectionCertificatesComponent } from './section-certificates/section-certificates.component';
import { ChatComponent } from '../feature-chat/feature/chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SectionWorkProjectsComponent,
    SectionSkillsComponent,
    SectionSideProjectsComponent,
    SectionCertificatesComponent,
    ChatComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
