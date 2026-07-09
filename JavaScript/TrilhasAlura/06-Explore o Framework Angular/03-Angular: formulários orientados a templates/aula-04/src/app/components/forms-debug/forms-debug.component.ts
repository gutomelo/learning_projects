import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-debug',
  templateUrl: './forms-debug.component.html',
  styleUrls: ['./forms-debug.component.css']
})
export class FormsDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
