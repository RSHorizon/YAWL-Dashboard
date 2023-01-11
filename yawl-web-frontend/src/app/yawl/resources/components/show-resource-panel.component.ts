import { Component, Input } from '@angular/core';


@Component({
    selector: 'show-resource-panel',
    templateUrl: 'show-resource-panel.component.html'
})
export class ShowResourcePanelComponent {

	@Input("item")
	public item : any;

	@Input("resourceType")
  // @ts-ignore
	public resourceType : string = null;

	@Input("resourceTypeCycle")
	public resourceTypeCycle : string = "I";

	@Input("nameAttribute")
	public nameAttribute : string = "name";

	@Input("subtitleAttribute")
  // @ts-ignore
	public subtitleAttribute : string = null;

	@Input("descriptionAttribute")
	public descriptionAttribute : string = "description";

}
