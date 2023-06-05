import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookBoxComponent } from './pages/book-box/book-box.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'book-box', component: BookBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
