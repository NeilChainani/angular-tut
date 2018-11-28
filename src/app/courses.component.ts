import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponent {
  title = "test me";
  colSpan = 2;
  email = "neilchainani1@gmail.com";

  onSave($event) {
    console.log("test", $event);
  }
  onDivClicked() {
    console.log("div was clicked");
  }
  onKeyUp() {
    console.log(this.email);
  }
  courses;
  color = "red";
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
