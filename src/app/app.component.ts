import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-assignment';

  // formats the current date in a long month, numeric day, and numeric year format using toLocaleDateString() method
  haDate = new Date();
  haOptions:any = { month: 'long', day: 'numeric', year: 'numeric' };
  haFormattedDate:any = this.haDate.toLocaleDateString('en-US', this.haOptions);

  // Create an object in the parent component that includes all invoice data
  haInvoiceData = {
    name: 'Emoji Web Design, Inc.',
    address: [
      {
        street: '12345 Sunny Road',
        city: 'Sunnyville',
        state: 'TX',
        zip: '75182'
      }
    ],
    number: '123456789',
    date: this.haFormattedDate,
    items: [
      {
        title: "Web Design",
        hours: 20,
        hourlyRate: 50,
      },
      {
        title: "Web development",
        hours: 100,
        hourlyRate: 75,
      },
      {
        title: "Project Management",
        hours: 12,
        hourlyRate: 55.30,
      }
    ],
    paymentType: ["Cash", "Credit Card", "BitCoin", "Interact"],
    taxAmount: 0.13
  };

  haAddItem(haNewItem: any) {
    this.haInvoiceData.items.push(haNewItem);
  }

}
