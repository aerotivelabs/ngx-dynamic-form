import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormElementComponent } from './main-form/form-element/form-element.component';
import { InputElComponent } from './main-form/form-element/input-el/input-el.component';
import { SelectElComponent } from './main-form/form-element/select-el/select-el.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FormElementComponent,
    InputElComponent,
    SelectElComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
