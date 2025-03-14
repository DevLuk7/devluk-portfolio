import { Component, HostBinding, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { skillCustomIcon, skillIcon, TSkillIconKey } from '../skills.service';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'block',
  },
})
export class SkillIconComponent implements OnInit {
  readonly skill = input.required<TSkillIconKey>();
  readonly size = input<number>(12);

  @HostBinding('class')
  get class() {
    return `w-${this.size()} h-${this.size()}`;
  }

  private readonly sanitizer = inject(DomSanitizer);

  icon!: SafeHtml;
  src!: string;

  ngOnInit(): void {
    const siIcon = skillIcon[this.skill()];
    if (siIcon) {
      this.icon = this.sanitizer.bypassSecurityTrustHtml(
        siIcon.svg.replace('<svg', `<svg style="fill: #${siIcon.hex};"`)
      );
    }
    this.src = `/icons/${skillCustomIcon[this.skill()]}`;
  }
}
