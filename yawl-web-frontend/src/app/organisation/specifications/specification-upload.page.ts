import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { SpecificationService } from '../../yawl/resources/services/specification.service';
import { Specification } from '../../yawl/resources/entities/specification.entity';


@Component({
    templateUrl: 'specification-upload.page.html'
})
export class SpecificationUploadPage {

	public fileName = null;
	public specificationData = null;
	public dropZoneOver = false;

	constructor(
		private router: Router,
		private notifierService : NotifierService,
		private specificationService : SpecificationService) {
	}

	onDragEnter(event: any) {
		event.stopPropagation();
		event.preventDefault();
		this.dropZoneOver = true;
	}

	onDragLeave(event: any) {
		event.stopPropagation();
		event.preventDefault();
		this.dropZoneOver = false;
	}

	onDragOver(event: any) {
		event.stopPropagation();
		event.preventDefault();
		event.dataTransfer.dropEffect = 'copy';
	}

	onDrop(event: any) {
		event.stopPropagation();
		event.preventDefault();

		this.dropZoneOver = false;

		let files = event.dataTransfer.files;

		if(files.length <= 0) {
			return;
		}

		let file = files[0];
		this.readThis(file);
	}


	onFileSelected($event : any): void {
		let files = $event.target.files;

		if(files.length <= 0) {
			return;
		}

		let file = files[0];
		this.readThis(file);
	}


	readThis(file : File): void {
		// @ts-ignore
    this.fileName = file.name;

		var reader: FileReader = new FileReader();

		reader.onloadend = (e) => {
			// @ts-ignore
      this.specificationData = reader.result;
		}

		reader.readAsText(file);
	}


	uploadSepcification() {
		// @ts-ignore
    this.specificationService.save(this.specificationData).subscribe((result) => {
			this.gotoSpecificationsPage();
			this.notifierService.notify("success", "The new specification was successfully uploaded!");
		},
		(error) => {
			this.notifierService.notify("error", "Could not upload specification" + error);
		})
	}


	reset() {
		this.fileName = null;
		this.specificationData = null;
	}


	gotoSpecificationsPage() {
		let url = '/specifications';
		this.router.navigate([url]);
	}

}
