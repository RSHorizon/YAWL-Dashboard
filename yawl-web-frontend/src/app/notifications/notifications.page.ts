import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PopupMenuService } from '../util/popup-menu.service';

import { NotificationsService } from './notifications.service';

import { Observer } from './observations/observer';
import { ObserverRegistry } from './observations/observer-registry.service';


@Component({
    selector: 'notifications-page',
    templateUrl: 'notifications.page.html'
})
export class NotificationsPage {

	@ViewChild('list')
	private list : any;

	mode = "active";

	// @ts-ignore
  selectedNotificationId : string = null;
	selectedNotification : any;

	newComment = "";
	newDelay = 0;


	constructor(
		private route: ActivatedRoute,
		private popupMenuService : PopupMenuService,
		private observerRegistry : ObserverRegistry,
		private notificationsService : NotificationsService,
		private router: Router) {
	}


    ngOnInit() {
		this.route.params.subscribe(params => {
			if(params['id']) {
				this.newComment = "";
				this.newDelay = 0;
				this.selectedNotificationId = params['id'];
				this.loadSelectedNotification(params['id']);
			}
		});
    }


    loadSelectedNotification(id : string) {
		this.notificationsService.getNotificationById(id).subscribe((result) => {
			this.selectedNotification = result;
			this.addKeyDisplayNames();
		});
    }


    reload() {
    }


    reloadList() {
		this.list.reload();
    }


	addKeyDisplayNames() {
		let notification = this.selectedNotification;

		notification.displayData = [];

		let observer = this.observerRegistry.getObserver(notification.type);
		if(observer) {
			for(let key in notification.data) {
				let found = observer.metadataKeyNames[key];
				if(found) {
					if(key == "workItemCreationDate") {
						let d = new Date(notification.data[key]*1000);
						var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
										d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
						notification.displayData.push({ 'key': found, 'value': d.toString().substring(0,21)});
					}
					else {
						notification.displayData.push({ 'key': found, 'value': notification.data[key]});
					}
				}
			}
		}
	}


	public onSettingsButton($event: MouseEvent, item: any): void {
    this.popupMenuService.show.next({
			menuItems: [
				{
					html: () => 'Refresh Notifications',
          // @ts-ignore
					click: (item) => this.reload()
				},
				{
					html: () => 'Manage Observations',
          // @ts-ignore
					click: (item) => this.navigateToObservationsList()
				}
			],
			event: $event,
			item: item,
		});
		$event.preventDefault();
	}


	submitComment() {
		this.notificationsService.addComment(this.selectedNotificationId, this.newComment).subscribe(() => {
			this.newComment = "";
			this.reloadList();
			this.loadSelectedNotification(this.selectedNotificationId);
		});
	}


	setDelay() {
		let delayUntil = Math.floor(Date.now() / 1000) + this.newDelay;
		this.notificationsService.delay(this.selectedNotificationId, delayUntil).subscribe(() => {
			this.newDelay = 0;
			this.reloadList();
			this.loadSelectedNotification(this.selectedNotificationId);
		});
	}


	resetDelay() {
		this.notificationsService.delay(this.selectedNotificationId, 0).subscribe(() => {
			this.reloadList();
			this.loadSelectedNotification(this.selectedNotificationId);
		});
	}




	setMode(newMode: number) {
        if(newMode == 0) this.mode = "active";
        else if(newMode == 1) this.mode = "delayed";
        else if(newMode == 2) this.mode = "muted";
	}


	navigateToObservationsList() {
		let url = 'observations';
		this.router.navigate([url]);
	}

}
