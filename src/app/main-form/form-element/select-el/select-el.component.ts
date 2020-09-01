import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-el',
  templateUrl: './select-el.component.html',
  styleUrls: ['./select-el.component.css']
})
export class SelectElComponent implements OnInit {
  @Input() selectEl
  @Input() mainForm: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
