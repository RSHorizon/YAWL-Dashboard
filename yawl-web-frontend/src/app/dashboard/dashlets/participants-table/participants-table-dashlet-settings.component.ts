import { Component, Input } from '@angular/core';



@Component({
    selector: 'participants-table-dashlet-settings',
    templateUrl: 'participants-table-dashlet-settings.component.html'
})
export class ParticipantsTableDashletSettingsComponent {

	// @ts-ignore
  dashletId : String;

	settings : any = {};

}
