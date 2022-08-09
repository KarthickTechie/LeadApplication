import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

import * as Xamp from "../../utils/AppInterfaces";

@Component({
  selector: "app-lead",
  templateUrl: "./lead.component.html",
  styleUrls: ["./lead.component.css"],
})
export class LeadComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  customerInfo: Xamp.Customer = { customerName: "", loanAmount: "" };

  customers: Xamp.Customer[] = [];

  isDisable = false;

  @ViewChild("customerName") customerName: ElementRef;
  @ViewChild("loanAmount") loanAmount: ElementRef;

  @Output("onLoadLead") onLoadLead = new EventEmitter<Xamp.Customer[]>();

  saveCustomer(custInfo: Xamp.Customer) {
    const whichIndex = this.customers.filter(
      (c) => c.customerName == custInfo.customerName
    ).length;
    if (whichIndex > 0) {
      const findInd = this.customers.findIndex(
        (c) => c.customerName == custInfo.customerName
      );
      alert(findInd);
      this.customers[findInd] = { ...custInfo };
    } else {
      this.customers.push({ ...custInfo });
    }

    this.resetFields();
    this.onLoadLead.emit(this.customers);
  }

  showCustomer(custInfo: Xamp.Customer) {
    this.customerInfo.customerName = custInfo.customerName;
    this.customerInfo.loanAmount = custInfo.loanAmount;
    this.isDisable = !this.isDisable;
  }

  deleteCustomer(i: number, e: any) {
    this.customers.splice(i, 1);
    e.stopPropagation();
  }

  resetFields() {
    for (let o in this.customerInfo) {
      this.customerInfo[o] = "";
    }
    this.isDisable = false;
  }
}
