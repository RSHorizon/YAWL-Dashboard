import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { SessionService } from '../session/session.service';

//import { ExtensionSpecificationService } from '../../dashboard/dashboard.service';
import {subscribeOn, Subscription} from "rxjs";
import { faArrowRightFromBracket, faBars, faGaugeHigh, faCompass, faBell, faSitemap, faFileCode, faDatabase, faCubes, faCircle, faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'default-page',
    templateUrl: 'default-page.component.html',
    styleUrls: ['../../../style/styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DefaultPageComponent implements OnInit {
  faArrowRightFromBracket=faArrowRightFromBracket
  faBars=faBars
  faGaugeHigh=faGaugeHigh
  faCompass=faCompass
  faBell=faBell
  faSitemap=faSitemap
  faCubes=faCubes
  faFileCode=faFileCode
  faDatabase=faDatabase
  faCaretDown=faCaretDown
  faCaretRight=faCaretRight
	dashboards : any = [];

  private subscription: Subscription = Subscription.EMPTY;

  withDashboardService = true;
  organisationToggledOn = false;

	constructor(
		//private dashboardService: ExtensionSpecificationService,
		private sessionService: SessionService,
		private router: Router,
    private notifierService: NotifierService) { }


	ngOnInit() {
        /*if(this.withDashboardService) {
            this.subscription = this.dashboardService.dashboardChanged.subscribe(() => {
                this.reload()
            });

            this.reload();
        }*/
	}


	ngOnDestroy() {
		if(this.subscription) {
			// @ts-ignore
      this.subscription.unsubscribe();
		}
	}


	reload() {
		/*this.dashboardService.getDashboardsOfUser().subscribe((result: { dashboards: any; }) => {
				this.dashboards = result.dashboards;
			},
			(error: string) => {
		    this.notifierService.notify("Error", "Could not load dashboards. "+error)
			},
			() => {});*/
	}

  toggleOrganisation(event: MouseEvent){
    this.organisationToggledOn = !this.organisationToggledOn;
  }

	onLogoutButton() {
		this.sessionService.logout().subscribe(() => {
        this.notifierService.notify("success", "You have been successfully logged out");
			this.router.navigate(['/login']);
		},
		() => {
      this.notifierService.notify("error", "An error occured while logging out!");
		});
	}

}
