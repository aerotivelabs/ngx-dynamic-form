import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-el',
  templateUrl: './input-el.component.html',
  styleUrls: ['./input-el.component.css']
})
export class InputElComponent implements OnInit {
  @Input() inputEl
  @Input() mainForm: FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
