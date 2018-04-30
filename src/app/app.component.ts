import { Component } from '@angular/core';
//very cool ~
@Component({
  selector: 'crazy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstTask ={
    description: "Finish weekend Angular homework for Epicodus course"
  }
}
