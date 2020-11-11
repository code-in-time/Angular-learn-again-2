import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-outer',
  templateUrl: './area-outer.component.html',
  styleUrls: ['./area-outer.component.css']
})
export class AreaOuterComponent implements OnInit {

  textToShare: string = "This is my text";
  mainCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  count() {
    console.log('count')
    this.mainCounter += 1;
  }

}
