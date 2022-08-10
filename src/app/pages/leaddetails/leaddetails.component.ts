import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-leaddetails",
  templateUrl: "./leaddetails.component.html",
  styleUrls: ["./leaddetails.component.css"],
})
export class LeaddetailsComponent implements OnInit {
  leadID: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.leadID = this.route.snapshot.paramMap.get("leadid");
  }
}
