import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css']
})
export class TwowaybindComponent implements OnInit {
  
  name:string="smitu";
  constructor() { }

  ngOnInit(): void {
  }

}
