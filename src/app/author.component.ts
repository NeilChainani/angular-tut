import { Component } from "@angular/core";

@Component({
  selector: "author",
  template: `
    <ul>
      s
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
  `
})
export class AuthorComponent {
  authors = ["author1", "author2", "author3"];
}
