import {DynFormFieldBase, TypeGuard} from './dyn-form-field-base';



export class DynFormTextboxField extends DynFormFieldBase<string> {

  override controlType = 'textbox';
	type: string;

	constructor(options: {} = {}) {
		super(options);
		// @ts-ignore
    this.type = options['type'] ? options['type'] : 'text';
	}
}

export const isDynFormTextboxField: TypeGuard<DynFormFieldBase<any>, DynFormTextboxField> = (dynFormField: DynFormFieldBase<any>): dynFormField is DynFormTextboxField =>
  dynFormField.controlType === 'textbox';
