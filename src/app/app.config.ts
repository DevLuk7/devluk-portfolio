import {
  ApplicationConfig,
  isDevMode,
  PLATFORM_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { WINDOW } from './utils/window';
import { isPlatformBrowser } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';

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
    provideClientHydration(withEventReplay()),
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
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'portfolio-83e54',
        appId: '1:790412593531:web:eb9bc9efef9399b91895de',
        storageBucket: 'portfolio-83e54.firebasestorage.app',
        apiKey: 'AIzaSyCZ8b84maDDdGKgkVLl-yKpqbOzITyBECM',
        authDomain: 'portfolio-83e54.firebaseapp.com',
        messagingSenderId: '790412593531',
        measurementId: 'G-DMM701QRZK',
      }),
    ),
    provideVertexAI(() => getVertexAI()),
  ],
};
