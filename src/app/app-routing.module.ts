import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { BookBoxComponent } from "./pages/book-box/book-box.component";
import { AddBookComponent } from "./pages/add-book/add-book.component";
import { MyReadingsComponent } from "./pages/my-readings/my-readings.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "book-box", component: BookBoxComponent },
    { path: "add-book", component: AddBookComponent },
    { path: "my-readings", component: MyReadingsComponent },
    { path: "progress/:id", component: ProgressComponent },
    { path: "contact", component: ContactComponent },
    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
