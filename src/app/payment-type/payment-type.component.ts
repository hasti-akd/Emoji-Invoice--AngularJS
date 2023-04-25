import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})

export class PaymentTypeComponent implements OnInit { 
  constructor(){
  }

  @Input () haChildData:any = {};

  haPaymentMethod = 'Cash';
  haFlag:boolean = false;

  // if "credit card" is selected show a message that says  "We do not accept AMEX"
  haCheckPaymentType(event:any){
    this.haPaymentMethod = event.target.value;
    if (this.haPaymentMethod == 'Credit Card'){
      this.haFlag = true;
    }
    else{
      this.haFlag = false;      
    }
  }
 
  ngOnInit(): void {
  }  
}

