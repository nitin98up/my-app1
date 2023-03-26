import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { AddBookComponent } from './component/add-book/add-book.component';



@NgModule({
  declarations: [
    AddBookComponent,
    DeleteBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
