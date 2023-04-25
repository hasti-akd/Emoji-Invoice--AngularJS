import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})

export class TotalsComponent implements OnInit { 
  constructor(){
  }
  
  @Input () haChildData:any = {};

  haGetTotalHours(){
    let haTotalHours:number = 0;
    for (let i = 0; i < this.haChildData.items.length; i++) {
      haTotalHours += this.haChildData.items[i].hours;
    }
    return haTotalHours;
  }

  haSubTotal:number = 0;
  haTax:number = 0;

  haGetSubTotal(){
    this.haSubTotal = 0;
    for (let i = 0; i < this.haChildData.items.length; i++) {
      this.haSubTotal += (this.haChildData.items[i].hours * this.haChildData.items[i].hourlyRate);
    }
    return this.haSubTotal;
  }

  haGetTax(){
    this.haTax = this.haSubTotal * this.haChildData.taxAmount;
    return this.haTax;
  }

  ngOnInit(): void {
  }  
}
