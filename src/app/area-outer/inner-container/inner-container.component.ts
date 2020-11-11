import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inner-container',
  templateUrl: './inner-container.component.html',
  styleUrls: ['./inner-container.component.css']
})
export class InnerContainerComponent implements OnInit {

  @Input() txt: string;
  @Output() btnEventAddToCounter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnCount() {
    console.log('btn clicked');

    // emit here
    this.btnEventAddToCounter.emit();


  }

}
