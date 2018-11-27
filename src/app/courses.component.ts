import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `
    <button [style.background-color]="color">Save</button>
  `
})
export class CoursesComponent {
  title = "test me";
  colSpan = 2;
  courses;
  color = "red";
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
