import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
  name: string = "Nitin";
  empList: string[] = ['jon', 'don', 'ron'];
  clickSave(): void {
    this.name = 'nitish updated'
  }
  over(): void {
    this.name = 'nitish over';
  }
  txtChange(): void {
    this.name = 'changed';
  }
  isDisabled: boolean = true;
  myClass = "success height20"
}
