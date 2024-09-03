import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { skillIcon, TSkillIconKey } from '../skills.service';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss',
  host: {
    class: 'w-12 h-12',
  },
})
export class SkillIconComponent implements OnInit {
  readonly skill = input.required<TSkillIconKey>();

  private readonly sanitizer = inject(DomSanitizer);

  icon!: SafeHtml;

  ngOnInit(): void {
    const siIcon = skillIcon[this.skill()];
    if (siIcon) {
      this.icon = this.sanitizer.bypassSecurityTrustHtml(
        siIcon.svg.replace('<svg', `<svg style="fill: #${siIcon.hex};"`)
      );
    }
  }
}
