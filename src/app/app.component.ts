import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-test';
  images:any = [
    {
      src: "../assets/images/1.jpg",
      title: "Test 1",
      description: "A natural wonder"
    },
    {
      src: "../assets/images/2.jpg",
      title: "Test 2",
      description: "A raines"
    },
    {
      src: "../assets/images/3.jpg",
      title: "Test 3",
      description: "A raines natural"
    }
  ]
}
