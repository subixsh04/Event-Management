import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent{
  bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
}


