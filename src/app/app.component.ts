import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import * as Xamp from '../app/utils/AppInterfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customerInfo: Xamp.Customer = { customerName: '', loanAmount: '' };

  customers: Xamp.Customer[] = [];

  isDisable = false;

  badgeBackground = 'grey';

  @ViewChild('customerName') customerName: ElementRef;
  @ViewChild('loanAmount') loanAmount: ElementRef;
  @ViewChildren('trashIcon') trashIcon: ElementRef;

  title = 'LeadApplication';

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
    this.setBadgeColor();
    this.resetFields();
  }
  setBadgeColor() {
    const arrSize = this.customers.length;
    if (arrSize > 2 && arrSize < 4) {
      this.badgeBackground = 'yellowgreen';
    } else if (arrSize < 2) {
      this.badgeBackground = 'grey';
    } else if (arrSize > 5) {
      this.badgeBackground = 'red';
    }
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
      this.customerInfo[o] = '';
    }
    this.isDisable = false;
  }
}
