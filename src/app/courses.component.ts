import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: "2.2-2" }} <br />
    {{ course.price | currency: "AUD" }} <br />
    {{ course.releaseDate | date: "shortDate" }}
  `
})
export class CoursesComponent {
  title = "test me";
  rating: 5;
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
  course = {
    title: "neil",
    rating: 5.423,
    students: 3121,
    price: 190.31,
    releaseDate: new Date(2016, 3, 1)
  };
  courses;
  color = "red";
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
