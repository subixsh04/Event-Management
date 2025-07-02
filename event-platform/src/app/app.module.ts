// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // You must also create this
import { routes } from './app.routes'; // Assuming you want to use app.router.ts

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule],
  providers: [provideRouter(routes)],
  bootstrap: []
})
export class AppModule {
  bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}
