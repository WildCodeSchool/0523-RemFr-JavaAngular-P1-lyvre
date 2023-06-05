import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookBoxComponent } from './pages/book-box/book-box.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
    DashboardComponent,
    BookBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
