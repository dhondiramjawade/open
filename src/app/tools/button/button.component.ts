import { Component, Input, OnInit } from '@angular/core';

type ButtonType = "BASIC" | "RAISED" | "STROKED" | "FLAT" | "ICON" | "FAB" | "MINI-FAB" | null;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: ButtonType = null;
  @Input() value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
