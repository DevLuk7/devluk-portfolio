import { Route } from '@angular/router';
import { HomeComponent } from './feature-home/home/home.component';
import { ChatComponent } from './feature-chat/feature/chat/chat.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];
