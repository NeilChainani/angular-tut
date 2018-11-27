import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `
    <input #lol (keyup.enter)="onKeyUp(lol)" />
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
  onKeyUp(lol) {
    console.log("enter was used", lol.value);
  }
  courses;
  color = "red";
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
