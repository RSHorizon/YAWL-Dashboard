import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {DynFormFieldBase, TypeGuard} from './types/dyn-form-field-base';
import {DynFormTextboxField, isDynFormTextboxField} from "./types/dyn-form-textbox-field";
import {DynFormDropdownField, isDynFormDropdownField} from "./types/dyn-form-dropdown-field";

@Component({
  selector: 'dyn-form-field',
  templateUrl: './dyn-form-field.html'
})
export class DynFormField {


  @Input("question")
  question:  DynFormDropdownField | DynFormTextboxField | DynFormFieldBase<any> | undefined;

  @Input()
  form: FormGroup | undefined;

  isDynFormDropdownField = isDynFormDropdownField;
  isDynFormTextboxField = isDynFormTextboxField;


  get isValid() {
    if(this.question == null ||this.form == null){
      return false;
    }
    return this.form.controls[this.question.key].valid;
  }
}
