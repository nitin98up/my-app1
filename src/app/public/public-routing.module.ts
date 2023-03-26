import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id/author/:author', component: BookDetailsComponent },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
