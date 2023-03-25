import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
  name: string="Nitin";
  empList:string[]=['jon','don','ron'];
  getName(data: number): string{
    if(data === 1)
    {
    return 'Hello from method 1';
    } else{
    return this.name;
    }
    }
}
