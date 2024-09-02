import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<
  Window & { gtag: (...args: unknown[]) => void }
>('Window');
