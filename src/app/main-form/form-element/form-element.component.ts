import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  @Input() El;
  @Input() mainForm: FormGroup;
  isInput: boolean = false;
  isSelect: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (this.El.type == "input")
      this.isInput = true
    else if (this.El.type == "select")
      this.isSelect = true
  }

}
