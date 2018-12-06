import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `
    <a href="#" class="btn btn-success" (click)="onSave()">test </a>
  `
})
export class CoursesComponent {
  title = "test me";
  rating: 5;
  colSpan = 2;
  email = "neilchainani1@gmail.com";
  text: String = "superLong test woo i am here";

  onSave() {
    console.log("test");
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
