import {Pipe, PipeTransform} from "@angular/core";
import {DynFormTextboxField} from "./dyn-form-textbox-field";
import {DynFormDropdownField} from "./dyn-form-dropdown-field";

/**
 * Copied from example on angular.io.
 * https://angular.io/guide/dynamic-form
 */
export class DynFormFieldBase<T> {

	value: T;
	key: string;
	label: string;
	required: boolean;
	order: number;
	controlType: string;

	constructor(options: {
			value?: T,
			key?: string,
			label?: string,
			required?: boolean,
			order?: number,
			controlType?: string
			} = {})
	{
    this.value = options.value!;
		this.key = options.key || '';
		this.label = options.label || '';
		this.required = !!options.required;
		this.order = options.order === undefined ? 1 : options.order;
		this.controlType = options.controlType || '';
	}

}

export type TypeGuard<A, B extends A> = (a: A) => a is B;

@Pipe({
  name: 'guardType'
})
export class GuardTypePipe implements PipeTransform {
  transform<A, B extends A>(value: A, typeGuard: TypeGuard<A, B>): B {
    // @ts-ignore
    return typeGuard(value) ? value : undefined;
  }
}

