import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { TSkillIconKey } from '../skills.service';

@Component({
  selector: 'app-cta-link',
  standalone: true,
  imports: [CommonModule, SkillIconComponent],
  templateUrl: './cta-link.component.html',
  styleUrl: './cta-link.component.scss',
})
export class CtaLinkComponent {
  readonly href = input.required<string>();
  readonly name = input.required<string>();
  readonly skill = input<TSkillIconKey>();
}
