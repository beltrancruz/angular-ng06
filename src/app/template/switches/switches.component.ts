import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  constructor() { }

  person = {
    gender: '',
    notification: false
  }

  terms: boolean = false;

  ngOnInit(): void {
  }

}
