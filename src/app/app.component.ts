import { Component } from '@angular/core';

import { default as data } from './fakeJsons/testForm.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-dynamic-form';
  data = data.formGroup;


  ngOnInit(): void {
  }

}
