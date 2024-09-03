import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeService, TSkillIconKey } from '../skills.service';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule, SkillIconComponent],
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss',
})
export class SkillBadgeComponent implements OnInit {
  readonly skill = input.required<TSkillIconKey>();

  private readonly skillBadgeService = inject(SkillBadgeService);

  color!: string;
  baseColor = signal('');
  class = computed(() => {
    // bg-${this.baseColor()}-100
    return `text-${this.baseColor()}-800 dark:bg-gray-700 dark:text-${this.baseColor()}-400 border border-${this.baseColor()}-400`;
  });
  name = computed(() => this.skillBadgeService.getName(this.skill()));

  ngOnInit(): void {
    this.color = this.skillBadgeService.getColor(this.skill());
    if (!this.color) {
      this.baseColor.set(this.skillBadgeService.getRandomColor());
    }
  }
}
