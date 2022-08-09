import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, ElementRef, ViewChild, ViewChildren } from "@angular/core";
import * as Xamp from "../app/utils/AppInterfaces";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  _customer: Xamp.Customer[] = [];

  constructor() {}

  getLeadFromLeadComponent(e: Xamp.Customer[]) {
    this._customer = [...e];
  }
}
