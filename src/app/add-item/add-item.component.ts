import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})


export class AddItemComponent implements OnInit {

  constructor(haItemHourlyRate:ElementRef){
    this.haItemHourlyRate = haItemHourlyRate;
  }

  haItemTitle:string = '';

  @ViewChild('haItemHourlyRate') haItemHourlyRate: ElementRef;
  @Output() haNewItemEvent = new EventEmitter<any>();

  haAddNewItem(haItemHours:any) {

    // add item code goes here

    let haNewItem:any = {
      // using 2-way binding
      title:this.haItemTitle,    

      // using local reference in template
      hours:Number(haItemHours.value),

      // using view child
      hourlyRate:Number(this.haItemHourlyRate.nativeElement.value), 
    }
    
    this.haNewItemEvent.emit(haNewItem);

    // reset the input fields

    this.haItemTitle = '';
    haItemHours.value = '';
    this.haItemHourlyRate.nativeElement.value = '';
  }

  ngOnInit(): void {
  }  
}
