import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  mainForm: FormGroup;
  @Input() Data: any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let formObj={};
    
    for (let index = 0; index < this.Data.length; index++) {
      let dataName = this.Data[index].name;
      //let dataValidator = []; //this.Data[index].validator;
      formObj[dataName] = new FormControl();
    }
    this.mainForm = new FormGroup(formObj)
    console.log(formObj)
  }

}
