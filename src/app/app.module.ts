import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { NgChartsModule } from "ng2-charts";

import { DemoComponent } from "./components/demo/demo.component";
import { DemoPipe } from "./pipes/demo.pipe";
import { DemoDirective } from "./directives/demo.directive";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { BookBoxComponent } from "./pages/book-box/book-box.component";
import { MapComponent } from "./components/map/map.component";
import { ReadingInProgressComponent } from "./components/dashboard/reading-in-progress/reading-in-progress.component";
import { ButtonComponent } from "./components/UI/button/button.component";
import { AddBookComponent } from "./pages/add-book/add-book.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { GoToMapComponent } from "./components/dashboard/go-to-map/go-to-map.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./services/store/user.reducer";
import { MyReadingsComponent } from "./pages/my-readings/my-readings.component";
import { SmallButtonComponent } from "./components/UI/small-button/small-button.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ChartBarComponent } from "./components/dashboard/chart/charBar/chartBar.component";
import { SearchInputComponent } from "./components/map/search-input/search-input.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { ChartLineComponent } from "./components/dashboard/chart/chart-line/chart-line.component";
import { ChartComponent } from "./components/dashboard/chart/chart.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { MatStepperModule } from "@angular/material/stepper";
import { ChallengeComponent } from "./components/dashboard/challenge/challenge.component";
import { LevelComponent } from "./components/dashboard/level/level.component";
import { DisplayBadgesComponent } from "./components/dashboard/display-badges/display-badges.component";
import { ModalComponent } from "./components/modal/modal.component";
import { ModalBadgesComponent } from './components/modal-badges/modal-badges.component';

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
        AddBookComponent,
        GoToMapComponent,
        MyReadingsComponent,
        SmallButtonComponent,
        BookListComponent,
        NavigationComponent,
        SearchInputComponent,
        ChartBarComponent,
        ChartLineComponent,
        ChartComponent,
        ProgressComponent,
        CarouselComponent,
        FooterComponent,
        ContactComponent,
        PageNotFoundComponent,
        ChallengeComponent,
        LevelComponent,
        DisplayBadgesComponent,
        ModalComponent,
        ModalBadgesComponent,
    ],
    imports: [
        NgChartsModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatIconModule,
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LeafletModule,
        HttpClientModule,
        StoreModule.forRoot({ userState: reducer }),
        MatProgressBarModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
