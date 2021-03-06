import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent {
  @Input("isFavorite") isSelected: Boolean = false;
  @Output("change") change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
