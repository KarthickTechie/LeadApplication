import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import * as Xamp from "../../utils/AppInterfaces";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input("customers") customers: Xamp.Customer[];

  badgeBackground = "grey";

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setBadgeColor();
  }

  ngOnInit(): void {}

  setBadgeColor() {
    const arrSize = this.customers.length;
    if (arrSize > 2 && arrSize < 4) {
      this.badgeBackground = "yellowgreen";
    } else if (arrSize < 2) {
      this.badgeBackground = "grey";
    } else if (arrSize > 5) {
      this.badgeBackground = "red";
    }
  }
}
