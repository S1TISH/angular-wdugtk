import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public golfData:any;
  constructor(){

  }
  ngOnInit(){
    this.golfData = [
      {name: 'golfer1', assignedStatus:"", status: true},
      {name: 'golfer2', assignedStatus:"", status: true},
      {name: 'golfer3', assignedStatus:"", status: false},
      {name: 'golfer4', assignedStatus:"", status: true},
      {name: 'golfer5', assignedStatus:"", status: true},
      {name: 'golfer6', assignedStatus:"", status: false},
      {name: 'golfer7', assignedStatus:"", status: true},
      {name: 'golfer8', assignedStatus:"", status: true},
      {name: 'golfer9', assignedStatus:"", status: false},
      {name: 'golfer10',assignedStatus:"", status: true}
    ]
  }
  golferDetails(){
    console.log("golfer details")
  }
}
