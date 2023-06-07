import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookBoxComponent } from './pages/book-box/book-box.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'book-box', component: BookBoxComponent},
  { path: 'add-book', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
