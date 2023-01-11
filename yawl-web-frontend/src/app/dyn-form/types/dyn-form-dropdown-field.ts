import {DynFormFieldBase, TypeGuard} from './dyn-form-field-base';
import {DynFormTextboxField} from "./dyn-form-textbox-field";



export class DynFormDropdownField extends DynFormFieldBase<string> {

  override controlType = 'dropdown';
	public options: {key: string, value: string}[] = [];

	constructor(options: {} = {}) {
		super(options);
    // @ts-ignore
    this.options = options['options'] || [];
	}
}

export const isDynFormDropdownField: TypeGuard<DynFormFieldBase<any>, DynFormDropdownField> = (dynFormField: DynFormFieldBase<any>): dynFormField is DynFormDropdownField =>
  dynFormField.controlType === 'dropdown';

