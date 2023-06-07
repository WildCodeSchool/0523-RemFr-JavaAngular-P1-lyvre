import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookBoxComponent } from './pages/book-box/book-box.component';
import { MapComponent } from './components/map/map.component';
import { ReadingInProgressComponent } from './components/dashboard/reading-in-progress/reading-in-progress.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { AddBookComponent } from './pages/add-book/add-book.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
    DashboardComponent,
    BookBoxComponent,
    MapComponent,
    ReadingInProgressComponent,
    ButtonComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
