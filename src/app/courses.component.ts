import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `
    <input (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponent {
  title = "test me";
  colSpan = 2;
  onSave($event) {
    console.log("test", $event);
  }
  onDivClicked() {
    console.log("div was clicked");
  }
  onKeyUp() {
    console.log("enter was used");
  }
  courses;
  color = "red";
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
