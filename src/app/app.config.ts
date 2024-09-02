import {
  ApplicationConfig,
  isDevMode,
  PLATFORM_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { WINDOW } from './utils/window';
import { isPlatformBrowser } from '@angular/common';

export const config = () => {
  if (isDevMode()) {
    return {
      googleAnalyticsId: '',
    };
  }
  return {
    googleAnalyticsId: 'G-YCY2WNBF7W',
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: WINDOW,
      useFactory: (platformId: object) => {
        if (isPlatformBrowser(platformId)) {
          return window;
        }
        return {};
      },
      deps: [PLATFORM_ID],
    },
  ],
};
