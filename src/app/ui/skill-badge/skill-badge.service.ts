import { Injectable } from '@angular/core';

const colors = [
  'blue',
  'gray',
  'red',
  'green',
  'yellow',
  'indigo',
  'purple',
  'pink',
];

export type Color = typeof colors;

@Injectable({ providedIn: 'root' })
export class SkillBadgeService {
  private colors = [...colors];
  private lastColor = '';

  getColor(): string {
    const color = this.colors.shift();

    if (this.colors.length === 0) {
      this.colors = [...colors];
    }

    return color as string;
  }
}
