// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; // You must also create this
import { routes } from './app.routes'; // Assuming you want to use app.router.ts

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule.forRoot(routes)
  ],
  bootstrap: []
})
export class AppModule {}
