import { Component, inject, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GoogleAnalyticsService } from './utils/google-analytics.service';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly googleAnalyticsService = inject(GoogleAnalyticsService);

  constructor() {
    if (!isDevMode()) {
      this.googleAnalyticsService.loadGoogleAnalytics();
    }
  }
}
