import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';



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
